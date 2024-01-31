import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../redux/actions/orderActions'
import { getAllUsers } from '../../redux/actions/publicActions'
import { getAllProduct } from '../../redux/actions/adminActions'

const Dashboard = () => {
    const { orders } = useSelector(state => state.order)
    const { loading, error, users } = useSelector(state => state.public)
    const { allProducts } = useSelector(state => state.admin)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllOrders())

        dispatch(getAllUsers())
        dispatch(getAllProduct())
    }, [])



    const adminStats = <>
        <div className="mt-5">
            <div className="row">
                <div className="col-md-3 mb-1">
                    <div className="card bg-info text-white stats-box">
                        <div className="card-body">
                            <h4 className="card-title text-center fw-light"><i className="bi bi-box"></i> Total Products</h4>
                            <p className="card-text text-center fs-3 fw-bolder">{allProducts && allProducts.length}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-1">
                    <div className="card bg-success text-white stats-box">
                        <div className="card-body">
                            <h4 className="card-title text-center fw-light"><i className="bi bi-currency-dollar"></i>Total Sales</h4>
                            <p className="card-text text-center fs-3 fw-bolder">
                                {
                                    orders && orders.length > 0 && (
                                        orders.reduce((total, item) => total + (item.price * item.qty), 0)
                                    )
                                }
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-1">
                    <div className="card bg-primary text-white stats-box">
                        <div className="card-body">
                            <h4 className="card-title text-center fw-light"><i className="bi bi-person-plus"></i> Total Signups</h4>
                            <p className="card-text text-center fs-3 fw-bolder">{users && users.length}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-1">
                    <div className="card bg-warning text-dark stats-box">
                        <div className="card-body">
                            <h4 className="card-title text-center fw-light"><i className="bi bi-cart"></i> Total Orders</h4>
                            <p className="card-text text-center fs-3 fw-bolder">{orders && orders.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    const content = <>
        <table class="table mt-3 table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">name</th>
                    <th scope="col">qty</th>
                    <th scope="col">total</th>
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
                        <td>{item.qty}</td>
                        <td>₹{(item.price * item.qty)}</td>
                        <td>{item.orderDate}</td>
                        <td>{item.userId}</td>
                        <td>{item.paymentId}</td>

                    </tr>)
                }
            </tbody>
        </table>
    </>
    return <>

        <div className="container mt-5">
            {adminStats}
            <h5 className='text-center mt-5'>All Orders</h5>
            <div className="table-responsive">
                {content}
            </div>

        </div>
    </>
}

export default Dashboard