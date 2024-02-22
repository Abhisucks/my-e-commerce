import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/adminActions'
import { useNavigate } from 'react-router-dom'

const FeaturedPro = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { allProducts, loading: productLoading, error: productError } = useSelector(state => state.admin)

    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    // Filter only the featured products
    const featuredProducts = allProducts && allProducts.filter(product => product.featured);
    console.log(featuredProducts);

    const goToShopSingle = (item) => {
        navigate("/ShopSingle", { state: { item: item } })
    }

    return <>
        <section className="bg-light">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Featured Product</h1>
                        <p>
                            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {featuredProducts && featuredProducts.map(product => (
                        <div key={product._id} className="col-12 col-md-4 mb-4" onClick={e => goToShopSingle(product)}>
                            <div className="card h-100" style={{ cursor: 'pointer' }} >
                                <a>
                                    <img src={product.img} className="card-img-top" alt="..." />
                                </a>
                                <div className="card-body">
                                    <ul className="list-unstyled d-flex justify-content-between">
                                        {/* Rating Stars */}
                                        <li>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                        </li>
                                        <li className="text-muted text-right">{`₹${product.price.toFixed(2)}`}</li>
                                    </ul>
                                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">{product.title}</a>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perferendi
                                    </p>
                                    <p className="text-muted">See More</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
}

export default FeaturedPro