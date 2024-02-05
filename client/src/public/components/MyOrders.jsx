import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneUserOrders } from '../../redux/actions/orderActions'
import { Link } from "react-router-dom"
import Loader from './Loader'

const MyOrders = () => {
    const { login, error } = useSelector(state => state.public)
    const { yourOrders, loading: orderLoading } = useSelector(state => state.order)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneUserOrders(login.id))
    }, [])


    const orderCard = <>
        {
            yourOrders && [...yourOrders].reverse().map((item, i) => {

                // Convert orderDate to Indian timezone format
                const orderDateInIndianTimezone = new Date(item.orderDate).toLocaleString('en-IN');

                return <>
                    <div className="card shadow-0 border mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                    <img
                                        src={`${item.img}`}
                                        className="img-fluid p-2 p-sm-1"
                                        alt="Photo"
                                    />
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                    <p className=" mb-0">{item.title}</p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                    <p className=" mb-0 small">Qty: {item.qty}</p>
                                </div>
                                <div className="col-md-2 text-center d-flex justify-content-center align-items-center">
                                    <p className=" mb-0 small">₹{item.price}</p>
                                </div>
                                <div className="col-md-4 text-center d-flex justify-content-center align-items-center">
                                    {/* <p className=" mb-0 small">Payment_Id :- {item.paymentId}</p> */}
                                    <p className=" mb-0 small">
                                        <span>Order Date :</span> <br />
                                        <span>{orderDateInIndianTimezone}</span>
                                    </p>

                                </div>
                            </div>
                            <hr className="mb-4" style={{ backgroundColor: '#e0e0e0', opacity: 1 }} />

                            <div className="row d-flex align-items-center">

                                <div className="col-md-12">
                                    <div className="progress" style={{ height: '6px', borderRadius: '16px' }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: '20%', borderRadius: '16px', backgroundColor: '#a8729a' }}
                                            aria-valuenow="20"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <div className="d-flex justify-content-around mb-1 mt-2">
                                        <p className="text- mt-1 mb-0 small ms-xl-5">Order Placed</p>
                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">Out for delivery</p>
                                        <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            })
        }
    </>

    if (orderLoading) {
        return <Loader />
    }

    return <>
        <div className="container mt-5">
            <h5 className='text-center mb-3'>Your Orders</h5>
            {
                yourOrders && yourOrders.length > 0
                    ? <>
                        {
                            orderCard
                        }
                    </>
                    : <>
                        <p>You have no orders</p>
                        <Link to={"/shop"}>ShopNow</Link>
                    </>
            }

        </div>

    </>
}

export default MyOrders