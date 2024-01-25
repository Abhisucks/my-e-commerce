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


    // const content = <>
    //     <table class="table mt-5 table-dark table-striped table-hover">
    //         <thead>
    //             <tr>
    //                 <th scope="col">#</th>
    //                 <th scope="col">img</th>
    //                 <th scope="col">name</th>
    //                 <th scope="col">price</th>
    //                 <th scope="col">qty</th>
    //                 <th scope="col">PaymentId</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {
    //                 yourOrders && yourOrders.map((item, i) => <tr key={item._id}>
    //                     <td>{i + 1}</td>
    //                     <td>
    //                         <img src={`${item.img}`} width={100} alt="" className='img-fluid' />
    //                     </td>
    //                     <td>
    //                         {item.title}
    //                     </td>
    //                     <td>{item.price}</td>
    //                     <td>{item.qty}</td>

    //                     <td>{item.paymentId}</td>

    //                 </tr>)
    //             }
    //         </tbody>
    //     </table>
    // </>

    const orderCard = <>
        {
            yourOrders && yourOrders.map((item, i) => <div className="card shadow-0 border mb-4">
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
                            <p className=" mb-0 small">Payment_Id :- {item.paymentId}</p>
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
            </div>)
        }
    </>
    return <>
        <div className="container mt-5">
            <h5 className='text-center mb-3'>Your Orders</h5>
            {
                orderCard
            }

        </div>

    </>
}

export default MyOrders