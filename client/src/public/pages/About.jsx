import React from 'react'
import Footer from '../components/Footer'
import Faq from '../components/Faq'

const About = () => {
    return <>
        <section class="bg-success py-5">
            <div class="container">
                <div class="row align-items-center py-5">
                    <div class="col-md-8 text-white">
                        <h1>About ZEN</h1>
                        <p>
                            ZEN is your go-to destination for premium organic products. We are dedicated to providing you with fresh, locally sourced, and sustainably produced goods. Join us on our mission to make organic living accessible and enjoyable for all.
                        </p>
                    </div>
                    <div class="col-md-4">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-food-bank-illustration_23-2149344811.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="About Hero" className='img-fluid rounded-circle' />
                    </div>
                </div>
            </div>

        </section>
        {/* <!-- Close Banner --> */}

        {/* <!-- Start Section --> */}
        <section class="container py-5">
            <div class="row text-center pt-5 pb-3">
                <div class="col-lg-6 m-auto">
                    <h1 class="h1">Our Services</h1>
                    <p>
                        At ZEN, we strive to enhance your shopping experience with a range of services designed to meet your needs.
                    </p>
                </div>
            </div>
            <div class="row">

                <div class="col-md-6 col-lg-3 pb-5">
                    <div class="h-100 py-5 services-icon-wap shadow">
                        <div class="h1 text-success text-center"><i class="fa fa-truck fa-lg"></i></div>
                        <h2 class="h5 mt-4 text-center">Delivery Services</h2>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 pb-5">
                    <div class="h-100 py-5 services-icon-wap shadow">
                        <div class="h1 text-success text-center"><i class="fas fa-exchange-alt"></i></div>
                        <h2 class="h5 mt-4 text-center">Shipping & Return</h2>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 pb-5">
                    <div class="h-100 py-5 services-icon-wap shadow">
                        <div class="h1 text-success text-center"><i class="fa fa-percent"></i></div>
                        <h2 class="h5 mt-4 text-center">Promotion</h2>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 pb-5">
                    <div class="h-100 py-5 services-icon-wap shadow">
                        <div class="h1 text-success text-center"><i class="fa fa-user"></i></div>
                        <h2 class="h5 mt-4 text-center">24 Hours Service</h2>
                    </div>
                </div>
            </div>
        </section>

        <hr className='mx-5' />

        {/* <!-- End Section --> */}

        <div id="faq-section">
            {<Faq />}
        </div>


        {/* <!-- Start Brands --> */}
        <section class="bg-light py-5">
            <div class="container my-4">
                <div class="row text-center py-3">
                    <div class="col-lg-6 m-auto">
                        <h1 class="h1">Our Brands</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="col-lg-9 m-auto tempaltemo-carousel">
                        <div class="row d-flex flex-row">
                            {/* <!--Controls--> */}
                            <div class="col-1 align-self-center">
                                <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                                    <i class="text-light fas fa-chevron-left"></i>
                                </a>
                            </div>
                            {/* <!--End Controls--> */}

                            {/* <!--Carousel Wrapper--> */}
                            <div class="col">
                                <div class="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                                    {/* <!--Slides--> */}
                                    <div class="carousel-inner product-links-wap" role="listbox">

                                        {/* <!--First slide--> */}
                                        <div class="carousel-item active">
                                            <div class="row">
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/certified-organic-food-product-green-label-sticker_1017-25576.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/organic-products-label_23-2147492572.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/best-qaulity-natural-product-label-stocker_1017-26203.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/100-organic-food-certified-label_1017-19669.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <!--End First slide--> */}

                                        {/* <!--Second slide--> */}
                                        <div class="carousel-item">
                                            <div class="row">
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/certified-organic-food-product-green-label-sticker_1017-25576.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/organic-products-label_23-2147492572.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/best-qaulity-natural-product-label-stocker_1017-26203.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/100-organic-food-certified-label_1017-19669.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <!--End Second slide--> */}

                                        {/* <!--Third slide--> */}
                                        <div class="carousel-item">
                                            <div class="row">
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/certified-organic-food-product-green-label-sticker_1017-25576.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/organic-products-label_23-2147492572.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/best-qaulity-natural-product-label-stocker_1017-26203.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>
                                                <div class="col-3 p-md-5">
                                                    <a href="#"><img class="img-fluid brand-img rounded-circle" src="https://img.freepik.com/free-vector/100-organic-food-certified-label_1017-19669.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="Brand Logo" /></a>
                                                </div>

                                            </div>
                                        </div>
                                        {/* <!--End Third slide--> */}

                                    </div>
                                    {/* <!--End Slides--> */}
                                </div>
                            </div>
                            {/* <!--End Carousel Wrapper--> */}

                            {/* <!--Controls--> */}
                            <div class="col-1 align-self-center">
                                <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                                    <i class="text-light fas fa-chevron-right"></i>
                                </a>
                            </div>
                            {/* <!--End Controls--> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--End Brands--> */}


        {<Footer />}

    </>
}

export default About