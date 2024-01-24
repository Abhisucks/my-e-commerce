import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCartItem, deleteCartItem, incrementCartItem } from '../../redux/slice/publicSlice'
import { Link, useNavigate } from 'react-router-dom'
import { CheckOutway } from '../../redux/actions/publicActions'
import api from '../../redux/api'

const Cart = () => {
    const btnColor = "#FB641B"
    const { cart, total, login } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const cartF = cart.filter((item) => item.userId === (JSON.parse(localStorage.getItem("loginInfoo")).id)) 
    const cartF = login
        ? cart.filter((item) => item.userId === (JSON.parse(localStorage.getItem("loginInfoo")).id))
        : cart

    const handlepay = () => {
        if (login) {
            dispatch(CheckOutway(total))
        } else {
            navigate("/login")
        }
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
                                        <div class="row mt-1 mb-2">
                                            <div class="col-lg-3 col-3 img-fluid">
                                                <img width="100%"
                                                    src={`${item.img}`}
                                                    alt="" />
                                            </div>
                                            <div class="col-lg-3 mt-3 col-9 position-relative">
                                                <h5>{item.title}</h5>
                                                <p>₹{item.price}</p>

                                                <span class="ps-lg-5 position-absolute top-0 end-0 pe-4 d-lg-none"><i
                                                    class="bi bi-x-lg"></i></span>

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

                                        </div>

                                    )
                                }

                            </>
                            : <>
                                <h4 className='m-5 mb-0'>
                                    Cart is Empty
                                </h4>
                                <Link className='m-5 mt-0' to={"/shop"}>Shop Now</Link>
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