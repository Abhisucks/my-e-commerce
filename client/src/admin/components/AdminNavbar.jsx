import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../redux/actions/publicActions'
import { toast } from 'react-toastify'
import { invalidate } from '../../redux/slice/publicSlice'

const AdminNavbar = () => {
    const Navigate = useNavigate()
    const { login, error } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutUser())
        toast.success("Logout Success")
    }

    return <>
        {/* <!-- Start Top Nav --> */}
        <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
            <div class="container text-light">
                <div class="w-100 d-flex justify-content-between">
                    <div>
                        <i class="fa fa-envelope mx-2"></i>
                        <a class="navbar-sm-brand text-light text-decoration-none"
                            href="mailto:info@company.com">info@company.com</a>
                        <i class="fa fa-phone mx-2"></i>
                        <a class="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                    </div>
                    <div>
                        <a class="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i
                            class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                        <a class="text-light" href="https://www.instagram.com/" target="_blank"><i
                            class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                        <a class="text-light" href="https://twitter.com/" target="_blank"><i
                            class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                        <a class="text-light" href="https://www.linkedin.com/" target="_blank"><i
                            class="fab fa-linkedin fa-sm fa-fw"></i></a>
                    </div>
                </div>
            </div>
        </nav>
        {/* <!-- Close Top Nav --> */}

        <nav class="navbar navbar-expand-lg navbar-light shadow">
            <div class="container d-flex justify-content-between align-items-center">

                <Link to={"/admin"} class="navbar-brand text-success logo h1 align-self-center" >
                    Zen
                </Link>

                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class=" collapse navbar-collapse "
                    id="templatemo_main_nav">
                    <div class="flex-fill">

                        <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto ms-3">
                            <li class="nav-item">
                                <Link to={"/admin"} class="nav-link" >Dashboard</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/admin/add-pro"} class="nav-link" >Add-product</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/admin/users"} class="nav-link" >Users</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={"/admin/messages"} class="nav-link" >Messages</Link>
                            </li>
                        </ul>
                    </div>

                    <div class="d-flex mt-2 mt-lg-0 flex-lg-row flex-row-reverse justify-content-end justify-content-lg-start">

                        {login ? (
                            <div class="ms-lg-4 ms-2">
                                <div class="dropdown">
                                    <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                                        <i class="fa fa-fw fa-user mr-3"></i>
                                        <span className='ms-1'>{login.name}</span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <button onClick={handleLogout} class="dropdown-item">
                                                <i class="bi bi-box-arrow-right me-2"></i>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <Link to={"/login"} class="nav-icon position-relative text-decoration-none text-dark ms-lg-4 ms-2">
                                <button class="btn btn-outline-dark" type="button">
                                    <i class="fa fa-fw fa-user mr-3"></i>
                                    <span className='ms-1'>Login</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>

            </div>
        </nav >
        {/* <!-- Close Header --> */}

    </>
}

export default AdminNavbar