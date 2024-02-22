import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/adminActions'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import Error from '../components/Error'


const Shop = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [productcate, setProductCate] = useState("all products")
    const [priceRange, setPriceRange] = useState("all prices")
    const [perPage, setPerPage] = useState(9); // Adjust the number of items per page as needed
    const [currentPage, setCurrentPage] = useState(1);

    const { allProducts, loading: productLoading, error: productError } = useSelector(state => state.admin)
    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    const addcart = (item) => {
        // dispatch(adminGetProduct(), item)
        navigate("/ShopSingle", { state: { item: item } })
    }

    const filterByPrice = (item) => {
        switch (priceRange) {
            case "500":
                return item.price <= 500;
            case "1000":
                return item.price <= 1000;
            case "2000":
                return item.price >= 2000;
            default:
                return true; // "all prices" or any other case
        }
    };

    const result = allProducts && allProducts.filter(
        (item) =>
            (productcate === "all products" || item.category === productcate) &&
            filterByPrice(item)
    );

    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const currentItems = result && result.slice(indexOfFirstItem, indexOfLastItem);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const setCurrentPageWithScroll = (newPage) => {
        setCurrentPage(newPage);
        scrollToTop();
    };

    if (productLoading) {
        return <Loader />
    }

    if (productError) {
        // dispatch(invalidate(["error"]))

        // Handle the error here, you can render an error message or take any other action
        // toast.error(productError.message)
        return <Error productError={productError} />
    }


    return <>
        <div className="container">
            <div className='d-flex'>
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
                <div className='w-25 m-3'>
                    <label htmlFor="" >Price Range</label>
                    <select value={priceRange}
                        className="form-select  mt-2 mb-3" onChange={e => setPriceRange(e.target.value)}>
                        <option value="all prices">All Prices</option>
                        <option value="500">Under ₹500</option>
                        <option value="1000">Under ₹1000</option>
                        <option value="2000">Over ₹2000</option>

                    </select>
                </div>
            </div>

            <div className="row m-3">
                {
                    currentItems && currentItems.map((item, i) => <div class="col-md-4" onClick={e => addcart(item)} key={item._id}>
                        <div class="card mb-4 product-wap rounded-0">
                            <div class="card rounded-0">
                                <img class="card-img rounded-0 img-fluid" src={item.img} />
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center" >
                                    <ul class="list-unstyled">
                                        {/* <li><a class="btn btn-success text-white" ><i class="far fa-heart"></i></a></li> */}
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
            </div >


            <div className="pagination justify-content-center">
                {result && result.length > perPage && (
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPageWithScroll(currentPage - 1)}>
                                <i className="bi bi-caret-left-fill"></i>
                            </button>
                        </li>
                        <li className="page-item">
                            <span className="page-link">{currentPage}</span>
                        </li>
                        <li className={`page-item ${currentPage === Math.ceil(result.length / perPage) ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPageWithScroll(currentPage + 1)}>
                                <i className="bi bi-caret-right-fill"></i>
                            </button>
                        </li>
                    </ul>
                )}
            </div>

        </div >

        {< Footer />}
    </>
}

export default Shop