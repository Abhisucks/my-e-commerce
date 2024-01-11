import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup'
import { toast } from 'react-toastify';
import { invalidate } from '../../redux/slice/publicSlice';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/actions/publicActions';

const Login = () => {
    const dispatch = useDispatch()
    const { loading, error, login } = useSelector(state => state.public)
    const navigate = useNavigate()
    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(invalidate(["error"]))
        }
        if (login) {
            toast.success("Login Successfully")
            // dispatch(invalidate(["login"]))
            navigate("/shop")
        }
    }, [error, login])

    const formik = useFormik({
        initialValues: ({
            email: "",
            password: "",
        }),
        validationSchema: yup.object({
            email: yup.string().required().email(),
            password: yup.string().required().min(4).max(16),
        }),
        onSubmit: (value, restForm) => {
            // console.log(value);
            dispatch(loginUser(value))
        }
    })

    useEffect(() => {
        if (login) {
            if (login.role === "user") {
                navigate("/")
            }
            if (login.role === "admin") {
                navigate("/admin")
            }
        }
    }, [login])

    if (loading) <div class="spinner-border text-primary"></div>
    return <>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card">
                            <div class="card-header">Login</div>
                            <div class="card-body">
                                <div class="mt-2">
                                    <label for="email" class="form-label">Email</label>
                                    <input
                                        {...formik.getFieldProps("email")}
                                        type="email"
                                        class={`form-control ${formik.touched.email && (formik.errors.email ? "is-invalid" : "is-valid")}`}
                                        id="email"
                                        placeholder="Enter Your email "
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.email}</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">Password</label>
                                    <input
                                        {...formik.getFieldProps("password")}
                                        type="text"
                                        class={`form-control ${formik.touched.password && (formik.errors.password ? "is-invalid" : "is-valid")}`}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.password}</div>
                                </div>

                                <button type="submit" class="btn btn-primary w-100 mt-3" >
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Don't Have Account? <Link className='' to={"/register"} href="#">Sigh up</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Login