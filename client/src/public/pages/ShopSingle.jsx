import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addToCart } from '../../redux/slice/publicSlice'
import { toast } from 'react-toastify'

const ShopSingle = () => {
    const { login, error } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const btnColor = "#FB641B"
    const cartbtnColor = "#FF9F00"
    const location = useLocation()
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
        navigate("/cart")
    }

    const handleOutOfStock = (item) => {
        toast.error("Product Is Out Of Stock", { autoClose: 600 })
    }

    return <>

        <div className='container py-3'>
            <div className="row">
                <div className="col-md-4">
                    <div className="card rounded-0">
                        <div className="card-body d-flex justify-content-center align-items-center m-0">
                            <img className=' img-fluid text-center' src={`${location.state.item.img}`} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-8 px-2">
                    <div className="card rounded-0">
                        <div className="card-body">
                            <h5 className=' fw-medium'>{`${location.state.item.title}`}</h5>
                            <p className='text-success fw-light'>Special price</p>
                            <h3 className='mx-2'><span className='text-danger'>₹</span> {`${location.state.item.price}`}</h3>
                            <p>Category : {`${location.state.item.category}`}</p>
                            {/* <p>Brand : Zen</p> */}
                            <p className='fw-medium'>Description:</p>
                            <p className='mx-3'>
                                {location.state.item.description}
                            </p>
                            <p className='fw-medium'>Specification:</p>
                            <p className='mx-3'>
                                <ul>
                                    <li>100% Oraganic</li>
                                    <li>Natural Product </li>
                                </ul>
                            </p>
                            <div className='d-flex'>
                                {
                                    location.state.item.count > 0
                                        ? <>
                                            <button type="button" className="btn text-light fw-bold me-2 w-100" onClick={e => handleAddToCart(location.state.item)} style={{ background: cartbtnColor }}><i className="bi bi-cart-plus mx-1"></i> Add To Cart</button>
                                            {/* <button type="button" className="btn text-light fw-bold w-50" style={{ background: btnColor }}><i className="bi bi-bag-heart-fill mx-2"></i>Go to Cart</button> */}
                                        </>
                                        : <>
                                            <button type="button" className="btn text-light fw-bold me-2 w-100" onClick={e => handleOutOfStock()} style={{ background: btnColor }}><i class="bi bi-bag-x-fill"></i> Out Of Stock</button>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ShopSingle