import React, { useEffect } from 'react'
import { useFormik } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { invalidate } from '../../redux/slice/publicSlice'
import { loginUser, registerUser } from '../../redux/actions/publicActions'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
    const dispatch = useDispatch()
    const { loading, error, userAdded } = useSelector(state => state.public)
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: ({
            name: "",
            // mobile: "",
            email: "",
            password: "",
            c_password: ""
        }),
        validationSchema: yup.object({
            name: yup.string().required().min(2).max(16),
            // mobile: yup.string().required().min(10),
            email: yup.string().required().email(),
            password: yup.string().required().min(4).max(16),
            c_password: yup.string().required().oneOf([yup.ref("password")])

        }),
        onSubmit: (value, resetForm) => {
            dispatch(registerUser(value))
            console.log(value);
            resetForm()
        }
    })

    useEffect(() => {
        if (error) {
            console.log("error");
            toast.error(error)
            dispatch(invalidate(["error"]))
        }
        if (userAdded) {
            toast.success("SignUp Successfully")
            dispatch(invalidate(["userAdded"]))
            dispatch(loginUser({ email: formik.values.email, password: formik.values.password }))
            navigate("/shop")
        }
    }, [userAdded, error])

    if (loading) return <div class="spinner-border text-primary"></div>
    return <>
        <div class="container mt-5">
            <div class="row flex-column-reverse flex-sm-row">
                <div className="col-sm-4">
                    {/* <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7892.jpg?w=740&t=st=1706857252~exp=1706857852~hmac=5ff56d841dd60df4af5d689dc76fd4857faa3662489de95cdae36c2cdc810bd2" className=' img-fluid' alt="" /> */}
                    <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" className=' img-fluid' alt="" />

                </div>
                <div class="col-sm-6">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card border-black mb-4">
                            <div class="card-header text-center">Register</div>
                            <div class="card-body">
                                <div>
                                    <label for="name" class="form-label"> Name</label>
                                    <input
                                        {...formik.getFieldProps("name")}
                                        type="text"
                                        class={`form-control ${formik.touched.name && (formik.errors.name ? "is-invalid" : "is-valid")}`}
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">{formik.errors.name}</div>
                                </div>
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
                                <div class="mt-2">
                                    <label for="cpassword" class="form-label">Confirm Password</label>
                                    <input
                                        {...formik.getFieldProps("c_password")}
                                        type="text"
                                        class={`form-control ${formik.touched.c_password && (formik.errors.c_password ? "is-invalid" : "is-valid")}`}
                                        id="cpassword"
                                        placeholder="Confirm Your Password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">
                                        {formik.errors.c_password}
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-success w-100 mt-3">
                                    Signup
                                </button>
                                <p class="text-center mt-3">
                                    Already Have Account? <Link className='text-dark' to={"/login"}>Login</Link>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}

export default Register
