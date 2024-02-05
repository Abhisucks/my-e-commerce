import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCartItem, deleteCartItem, incrementCartItem } from '../../redux/slice/publicSlice'
import { Link, useNavigate } from 'react-router-dom'
import { CheckOutway } from '../../redux/actions/publicActions'
import api from '../../redux/api'
import Loader from './Loader'

const Cart = () => {
    const btnColor = "#FB641B"
    const { cart, total, login, checked, loading: razorpayLoading } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handlepay = () => {
        if (login) {
            dispatch(CheckOutway(total))
            updatedCart()
        } else {
            navigate("/login")
        }

    }


    if (razorpayLoading) {
        return <Loader />;
    }

    return <>
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-8 mt-3 mt-lg-0">
                    {
                        cart.length > 0
                            ? <>
                                {
                                    cart && cart.map((item, i) =>
                                        <div class="row mt-1 mb-1">
                                            <div class="col-lg-3 col-3 img-fluid">
                                                <img width="100%"
                                                    src={`${item.img}`}
                                                    alt="" />
                                            </div>
                                            <div class="col-lg-3 mt-3 col-9 position-relative">
                                                <h5>{item.title}</h5>
                                                <p>₹{item.price}</p>

                                                <span class="ps-lg-5 position-absolute top-0 end-0 pe-4 d-lg-none"><i onClick={() => dispatch(deleteCartItem(i))} class="bi bi-x-lg"></i></span>

                                            </div>
                                            <div class="col-lg-3 mt-3 offset-3 col-3 offset-lg-0">

                                                <div class="btn-group">
                                                    <button
                                                        type="button"
                                                        class="btn btn-secondary"
                                                        onClick={() => dispatch(decrementCartItem(i))}
                                                    >
                                                        <i class="bi bi-dash"></i>
                                                    </button>

                                                    <button type="button" class="btn btn-outline-secondary">{item.qty}</button>

                                                    <button
                                                        type="button"
                                                        class="btn btn-secondary"
                                                        onClick={() => dispatch(incrementCartItem(i))}
                                                    >
                                                        <i class="bi bi-plus"></i>
                                                    </button>

                                                </div>

                                            </div>
                                            <div class="col-lg-3 mt-3 col-6 ms-auto ps-5 ps-lg-0">
                                                <span>₹{item.price * item.qty}</span>
                                                <span class="ps-lg-5 d-none d-lg-inline"><i onClick={() => dispatch(deleteCartItem(i))} class="bi bi-x-lg"></i></span>
                                            </div>
                                            <hr className='mt-1' />
                                        </div>

                                    )
                                }

                            </>
                            : <>

                                <div className="container text-center mt-5">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <img
                                                src="https://img.freepik.com/free-vector/hand-drawn-people-supermarket-illustration_23-2148110347.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais"
                                                alt="Empty Cart Illustration"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="col-sm-4 text-center">
                                            <div>
                                                <h4 className="m-0 mb-2 fw-light" >Your Cart is Empty!</h4>
                                                <p className="text-muted mb-4">Explore our shop and discover amazing products.</p>
                                                <Link to={"/shop"} className="btn btn-outline-success">
                                                    <i className="bi bi-shop"></i> Shop Now
                                                </Link>

                                                <hr />
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </>
                    }

                </div>

                <div class="col-md-4 mt-2">
                    <div class="card">
                        <div class="card-header py-3"><strong>PRICE DETAILS</strong></div>
                        <div class="card-body">
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <p><strong>Cart Products</strong></p>
                                    {/* <p><strong>Total item </strong></p> */}
                                    <p>Delevery Charges</p>
                                    <hr />
                                    <h4>Total Amount</h4>
                                </div>
                                <div >
                                    <h3><span className='text-danger'>{cart && cart.length}</span> </h3>
                                    {/* <h3><span className='text-danger'>{cart && cart.qty}</span> </h3> */}
                                    <p className='text-success'>Free</p>
                                    <hr />
                                    <h2><span className='text-danger'>₹{total}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        cart.length > 0 && <button type="button"
                            onClick={e => handlepay()} className="btn btn-outline-secondary p-2 mt-2 text-light fw-bold w-100 mb-4"
                            style={{ background: btnColor }} ><i className="bi bi-bag-heart-fill mx-2"></i>  PLACE ORDER
                        </button>
                    }
                </div>

            </div>
        </div>

    </>
}

export default Cart