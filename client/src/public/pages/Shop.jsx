import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/adminActions'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Shop = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [productcate, setProductCate] = useState("all products")
    const { allProducts } = useSelector(state => state.admin)
    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    const addcart = (item) => {
        // dispatch(adminGetProduct(), item)
        navigate("/ShopSingle", { state: { item: item } })
    }

    const result = productcate === "all products"
        ? allProducts
        : allProducts.filter(item => item.category === productcate);

    // console.log(result);
    console.log(productcate);


    return <>
        <div className="container">
            <div className='w-25 m-3'>
                <label htmlFor="" >Categerogy</label>
                <select value={productcate}
                    className="form-select  mt-2 mb-3" onChange={e => setProductCate(e.target.value)}>
                    <option value="all products">All Products</option>
                    <option value="fruits">Fruits</option>
                    <option value="vegitable">Vegitable</option>
                    <option value="FreshProduce">Fresh Produce</option>
                    <option value="Dairy and Eggs">Dairy and Eggs</option>
                    <option value="Food">Food</option>
                </select>
            </div>

            <div className="row m-3">
                {
                    result && result.map((item, i) => <div class="col-md-4" onClick={e => addcart(item)} key={item._id}>
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