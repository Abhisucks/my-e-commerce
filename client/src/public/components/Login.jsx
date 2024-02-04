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
            <div class="row flex-column-reverse flex-sm-row">
                <div className="col-sm-4 ">
                    {/* <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" className=' img-fluid' alt="" /> */}
                    <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=740&t=st=1706857252~exp=1706857852~hmac=5ff56d841dd60df4af5d689dc76fd4857faa3662489de95cdae36c2cdc810bd2" className=' img-fluid' alt="" />


                </div>
                <div class="col-sm-6 ">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card mb-4 border-black">
                            <div class="card-header text-center">Login</div>
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
                                        type="password"
                                        class={`form-control ${formik.touched.password && (formik.errors.password ? "is-invalid" : "is-valid")}`}
                                        id="password"
                                        placeholder="Enter Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.password}</div>
                                </div>

                                <button type="submit" class="btn btn-success text-center w-100 mt-3" >
                                    Login
                                </button>
                                <p class="text-center mt-3">
                                    Don't Have Account? <Link className=' text-dark' to={"/register"} href="#">Sigh up</Link>
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