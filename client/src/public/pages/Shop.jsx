import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/adminActions'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Shop = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { allProducts } = useSelector(state => state.admin)
    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    const addcart = (item) => {
        // dispatch(adminGetProduct(), item)
        navigate("/ShopSingle", { state: { item: item } })
    }

    return <>
        <div className="container">
            <div className="row m-3">
                {
                    allProducts && allProducts.map((item, i) => <div class="col-md-4" onClick={e => addcart(item)} key={item._id}>
                        <div class="card mb-4 product-wap rounded-0">
                            <div class="card rounded-0">
                                <img class="card-img rounded-0 img-fluid" src={item.img} />
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center" >
                                    <ul class="list-unstyled">
                                        <li><a class="btn btn-success text-white" ><i class="far fa-heart"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" ><i class="far fa-eye"></i></a></li>
                                        <li><a class="btn btn-success text-white mt-2" ><i class="fas fa-cart-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="card-body">
                                <h6 class="h3 text-decoration-none">{item.title}</h6>
                                {/* <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                                    <li>M/L/X/XL</li>
                                    <li class="pt-2">
                                        <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                        <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                                    </li>
                                </ul> */}
                                <ul class="list-unstyled d-flex justify-content-center mb-1">
                                    <li>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                    </li>
                                </ul>
                                <h6 class="text-center mb-0">₹{item.price}</h6>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div >

        {<Footer />}
    </>
}

export default Shop