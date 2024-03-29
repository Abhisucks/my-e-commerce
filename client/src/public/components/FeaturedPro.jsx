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

    const goToShopSingle = (item) => {
        navigate("/ShopSingle", { state: { item: item } })
    }

    return <>
        <section className="bg-light">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Featured Products</h1>
                        <p>
                            Each item is crafted with care, delivering an unparalleled experience of taste and freshness.
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
                                            <i className="text-warning fa fa-star"></i>
                                            <i className="text-muted fa fa-star"></i>
                                        </li>
                                        <li className="text-muted text-right">{`₹${product.price.toFixed(2)}`}</li>
                                    </ul>
                                    <p className="h2 text-decoration-none text-dark">{product.title}</p>
                                    <p className="card-text">
                                        {product.description}
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