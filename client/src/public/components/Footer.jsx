import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    function scrollToFAQ(e) {
        e.preventDefault();

        const faqSection = document.getElementById('faq-section');

        if (faqSection) {
            faqSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return <>
        {/* <!-- Start Footer --> */}
        <footer class="bg-dark" id="tempaltemo_footer">
            <div class="container">
                <div class="row mx-3 mx-lg-0">

                    <div class="col-md-4 pt-5">
                        <h2 class="h2 text-success border-bottom pb-3 border-light logo">Zen Shop</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li>
                                <i class="fas fa-map-marker-alt fa-fw"></i>
                                123 Consectetur at ligula 10660
                            </li>
                            <li>
                                <i class="fa fa-phone fa-fw"></i>
                                <a class="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                            </li>
                            <li>
                                <i class="fa fa-envelope fa-fw"></i>
                                <a class="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-4 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li><Link to={"/shop"} onClick={scrollToTop} class="text-decoration-none">Fruits</Link></li>
                            <li><Link to={"/shop"} onClick={scrollToTop} class="text-decoration-none">Spices</Link></li>
                            <li><Link to={"/shop"} onClick={scrollToTop} class="text-decoration-none">Vegitable</Link></li>
                            <li><Link to={"/shop"} onClick={scrollToTop} class="text-decoration-none">Fresh Produce</Link></li>
                            <li><Link to={"/shop"} onClick={scrollToTop} class="text-decoration-none">Dairy and Eggs</Link></li>
                        </ul>
                    </div>

                    <div class="col-md-4 pt-5">
                        <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                        <ul class="list-unstyled text-light footer-link-list">
                            <li><Link to={"/"} onClick={scrollToTop} class="text-decoration-none" >Home</Link></li>
                            <li><Link to={"/shop"} onClick={scrollToTop} class="text-decoration-none" >Shop</Link></li>
                            <li><Link to={"/about"} onClick={scrollToTop} class="text-decoration-none" >About Us</Link></li>
                            <li><Link to={"/contact"} onClick={scrollToTop} class="text-decoration-none" >Contact Us</Link></li>
                            <li><Link to={"/about#faq-section"} class="text-decoration-none" >FAQ'S</Link></li>
                        </ul>
                    </div>

                </div>

                <div class="row text-light mb-4">
                    <div class="col-12 mb-3">
                        <div class="w-100 my-3 border-top border-light"></div>
                    </div>
                    <div class="col-auto me-auto">
                        <ul class="list-inline text-left footer-icons">
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a rel="nofollow" class="text-light text-decoration-none" target="_blank" href="http://fb.com/templatemo"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                            </li>

                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item border border-light rounded-circle text-center">
                                <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-github fa-lg fa-fw"></i></a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

            <div class="w-100 bg-black py-3">
                <div class="container">
                    <div class="row pt-2">
                        <div class="col-12">
                            <p class="text-left text-light">
                                Copyright &copy; 2023 VN Farm
                                | Designed by <a rel="sponsored" href="" target="_blank">AbhiSucks2</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    </>
}

export default Footer