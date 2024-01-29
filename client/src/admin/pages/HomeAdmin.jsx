import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../redux/actions/orderActions'

const HomeAdmin = () => {
    const { orders } = useSelector(state => state.order)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    if (orders) {
        console.log(JSON.stringify(orders));
    }


    const content = <>
        <table class="table mt-5 table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">qty</th>
                    <th scope="col">orderDate</th>
                    <th scope="col">userId</th>
                    <th scope="col">PaymentId</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders && orders.map((item, i) => <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>
                            {item.title}
                        </td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>{item.orderDate}</td>
                        <td>{item.userId}</td>
                        <td>{item.paymentId}</td>

                    </tr>)
                }
            </tbody>
        </table>
    </>
    return <>
        <div className="container mt-3">
            <h5 className='text-center'>All Orders</h5>
            <div className="table-responsive">
                {content}
            </div>

        </div>
    </>
}

export default HomeAdmin