import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneUserOrders } from '../../redux/actions/orderActions'

const MyOrders = () => {
    const { login, error } = useSelector(state => state.public)
    const { yourOrders } = useSelector(state => state.order)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneUserOrders(login.id))
    }, [])


    const content = <>
        <table class="table mt-5 table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">img</th>
                    <th scope="col">name</th>
                    <th scope="col">price</th>
                    <th scope="col">qty</th>
                    <th scope="col">PaymentId</th>
                </tr>
            </thead>
            <tbody>
                {
                    yourOrders && yourOrders.map((item, i) => <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>
                            <img src={`${item.img}`} width={100} alt="" className='img-fluid' />
                        </td>
                        <td>
                            {item.title}
                        </td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>

                        <td>{item.paymentId}</td>

                    </tr>)
                }
            </tbody>
        </table>
    </>
    return <>
        <div className="container mt-5">
            <h5 className='text-center'>Your Orders</h5>
            <div className='table-responsive'>
                {content}
            </div>
        </div>
    </>
}

export default MyOrders