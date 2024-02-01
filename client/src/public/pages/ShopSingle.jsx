import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addToCart } from '../../redux/slice/publicSlice'
import { toast } from 'react-toastify'

const ShopSingle = () => {
    const { login, error } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const btnColor = "#FB641B"
    const cartbtnColor = "#FF9F00"
    const location = useLocation()


    const handleAddToCart = (item) => {
        // console.log(item);
        if (login) {

            dispatch(addToCart({ ...item, userId: login.id }))
            // toast.success("Added To Cart", { autoClose: 300 })
        } else {
            dispatch(addToCart(item))
            // toast.success("Added To Cart", { autoClose: 300 })
        }

    }

    const handleOutOfStock = (item) => {
        toast.error("Product Is Out Of Stock", { autoClose: 600 })
    }

    return <>

        <div className='container py-5'>
            <div className="row">
                <div className="col-md-4">
                    <div className="card rounded-0">
                        <div className="card-body d-flex justify-content-center align-items-center m-3">
                            <img className=' img-fluid text-center' src={`${location.state.item.img}`} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-8 px-2">
                    <div className="card rounded-0">
                        <div className="card-body">
                            <h5>{`${location.state.item.title}`}</h5>
                            <p className='text-success fw-medium'>Special price</p>
                            <h3 className='mx-2'><span className='text-danger'>₹</span> {`${location.state.item.price}`}</h3>
                            <p>Category : {`${location.state.item.category}`}</p>
                            <p>Brand : Lorem</p>
                            <p className='fw-medium'>Description:</p>
                            <p className='mx-3'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, saepe aliquid odio doloremque, perspiciatis illum, voluptatibus iure expedita omnis temporibus et minus similique id beatae odit? Quo doloribus vero unde!
                            </p>
                            <p className='fw-medium'>Specification:</p>
                            <p className='mx-3'>
                                <ul>
                                    <li>Lorem ipsum</li>
                                    <li>Sit amet </li>
                                </ul>
                            </p>
                            <div className='d-flex'>
                                {
                                    location.state.item.count > 0
                                        ? <>
                                            <button type="button" className="btn text-light fw-bold me-2 w-100" onClick={e => handleAddToCart(location.state.item)} style={{ background: cartbtnColor }}><i className="bi bi-cart-plus mx-1"></i> Add To Cart</button>
                                        </>
                                        : <>
                                            <button type="button" className="btn text-light fw-bold me-2 w-100" onClick={e => handleOutOfStock()} style={{ background: btnColor }}><i class="bi bi-bag-x-fill"></i> Out Of Stock</button>
                                        </>
                                }
                                {/* <button type="button" className="btn text-light fw-bold w-50" style={{ background: btnColor }}><i className="bi bi-bag-heart-fill mx-2"></i>Buy  Now</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ShopSingle