import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
// import { getUsers } from '../../redux/actions/publicActions'

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return <>

        {/* <!-- Start Banner Hero --> */}
        <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators text-decoration-none">
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="container">
                        <div class="row p-5">
                            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img class="img-fluid" src="https://img.freepik.com/free-photo/basket-full-vegetables_1112-316.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="" width="100%" />
                                {/* <img class="img-fluid" src="https://img.freepik.com/premium-photo/paper-bag-different-food-isolated_185193-17549.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="" width="100%" /> */}
                            </div>
                            <div class="col-lg-6 mb-0 d-flex align-items-center">
                                <div class="text-align-left align-self-center">
                                    <h1 class="h1 text-success"><b>Eco</b>Harves</h1>
                                    <h3 class="h2">Discover Excellence in Every Bite</h3>
                                    <p>
                                        Nourish your senses with the finest organic harvest! Dive into a world of freshness with our farm-to-table products – Fruits, Vegetables, and Fresh Produce.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row p-5">
                            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img class="img-fluid" src="https://img.freepik.com/premium-photo/group-tropical-fresh-fruits-vegetables-isolated-white-background_3236-1468.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="" />
                            </div>
                            <div class="col-lg-6 mb-0 d-flex align-items-center">
                                <div class="text-align-left">
                                    <h1 class="h1">Savor Pure Bliss</h1>
                                    <h3 class="h2">Crafting Flavorful Experiences</h3>
                                    <p>
                                        Celebrate nature's bounty on your plate! Immerse yourself in the wholesome goodness of organic Dairy, Eggs, Fruits, Vegetables, and Produce for a delightful and nutritious feast.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="container">
                        <div class="row p-5">
                            <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img class="img-fluid" src="https://img.freepik.com/free-photo/flat-lay-wooden-spoons-with-variety-spices_23-2148601126.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="" />
                            </div>
                            <div class="col-lg-6 mb-0 d-flex align-items-center">
                                <div class="text-align-left">
                                    <h1 class="h1">Elevate Your Tastes</h1>
                                    <h3 class="h2">Indulge in Exquisite Culinary Delights</h3>
                                    <p>
                                        Immerse yourself in farm-to-table excellence! From the richness of Dairy and Eggs to the freshness of Fruits, Vegetables, and Produce – elevate your culinary journey with our organic treasures.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel"
                role="button" data-bs-slide="prev">
                <i class="fas fa-chevron-left"></i>
            </a>
            <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel"
                role="button" data-bs-slide="next">
                <i class="fas fa-chevron-right"></i>
            </a>
        </div>
        {/* <!-- End Banner Hero --> */}



        {/* <!-- Start Categories of The Month --> */}
        <section class="container py-5">
            <div class="row text-center pt-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Popular Categories</h1>
                    <p>
                        Crafted with care and dedication, bringing you a curated selection that reflects our commitment to excellence.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-4 p-5 mt-3">
                    <Link to={"/shop"} onClick={scrollToTop} ><img src="https://images.unsplash.com/photo-1587411768515-eeac0647deed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHZlZ2V0YWJsZXxlbnwwfHwwfHx8MA%3D%3D" class="rounded-circle img-fluid border" /></Link>
                    <h5 class="text-center mt-3 mb-3">Vegitables</h5>
                    <p class="text-center"><Link to={"/shop"} onClick={scrollToTop} class="btn btn-success">Go Shop</Link></p>
                </div>
                <div class="col-12 col-md-4 p-5 mt-3">
                    <Link to={"/shop"} onClick={scrollToTop} ><img src="https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwaWNlc3xlbnwwfHwwfHx8MA%3D%3D" class="rounded-circle img-fluid border" /></Link>
                    <h2 class="h5 text-center mt-3 mb-3">Spices</h2>
                    <p class="text-center"><Link to={"/shop"} onClick={scrollToTop} class="btn btn-success">Go Shop</Link ></p>
                </div>
                <div class="col-12 col-md-4 p-5 mt-3">
                    <Link to={"/shop"} onClick={scrollToTop} ><img src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D" class="rounded-circle img-fluid border" /></Link>
                    <h2 class="h5 text-center mt-3 mb-3">Dairy</h2>
                    <p class="text-center"><Link to={"/shop"} onClick={scrollToTop} class="btn btn-success">Go Shop</Link ></p>
                </div>
            </div>
        </section>
        {/* <!-- End Categories of The Month --> */}


        {/* <!-- Start Featured Product --> */}
        <section class="bg-light">
            <div class="container py-5">
                <div class="row text-center py-3">
                    <div class="col-lg-6 m-auto">
                        <h1 class="h1">Featured Product</h1>
                        <p>
                            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4 mb-4">
                        <div class="card h-100">
                            <a href="shop-single.html">
                                <img src="https://img.freepik.com/free-photo/different-vegetables-seeds-fruits-table-healthy-diet-flat-lay-top-view_1150-42611.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" class="card-img-top" alt="..." />
                            </a>
                            <div class="card-body">
                                <ul class="list-unstyled d-flex justify-content-between">
                                    {/* <li>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                    </li> */}
                                    <li class="text-muted text-right">₹240.00</li>
                                </ul>
                                <a href="shop-single.html" class="h2 text-decoration-none text-dark">Gym Weight</a>
                                <p class="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia
                                    deserunt.
                                </p>
                                <p class="text-muted">See More</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-4">
                        <div class="card h-100">
                            <a href="shop-single.html">
                                <img src="https://img.freepik.com/premium-photo/high-angle-view-food-table_1048944-4398612.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" class="card-img-top" alt="..." />
                            </a>
                            <div class="card-body">
                                <ul class="list-unstyled d-flex justify-content-between">
                                    <li>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                        <i class="text-muted fa fa-star"></i>
                                    </li>
                                    <li class="text-muted text-right">$480.00</li>
                                </ul>
                                <a href="shop-single.html" class="h2 text-decoration-none text-dark">Cloud Nike Shoes</a>
                                <p class="card-text">
                                    Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo
                                    ullamcorper.
                                </p>
                                <p class="text-muted">Reviews (48)</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-4">
                        <div class="card h-100">
                            <a href="shop-single.html">
                                <img src="https://img.freepik.com/free-photo/top-view-fresh-foods-spices-vegetables-bottom-white-table_140725-142722.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" class="card-img-top" alt="..." />
                            </a>
                            <div class="card-body">
                                <ul class="list-unstyled d-flex justify-content-between">
                                    <li>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                        <i class="text-warning fa fa-star"></i>
                                    </li>
                                    <li class="text-muted text-right">$360.00</li>
                                </ul>
                                <a href="shop-single.html" class="h2 text-decoration-none text-dark">Summer Addides
                                    Shoes</a>
                                <p class="card-text">
                                    Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et
                                    scelerisque ipsum lobortis nec.
                                </p>
                                <p class="text-muted">Reviews (74)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Featured Product --> */}

        {<Footer />}

    </>
}

export default Home