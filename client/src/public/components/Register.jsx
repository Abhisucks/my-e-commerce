import React, { useEffect } from 'react'
import { useFormik } from "formik"
import * as yup from 'yup'
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { invalidate } from '../../redux/slice/publicSlice'
import { registerUser } from '../../redux/actions/publicActions'
import { Link } from 'react-router-dom'
const Register = () => {
    const dispatch = useDispatch()
    const { loading, error, userAdded } = useSelector(state => state.public)
    useEffect(() => {
        if (error) {
            console.log("error");
            toast.error(error)
            dispatch(invalidate(["error"]))
        }
        if (userAdded) {
            toast.success("User Added Successfully")
            dispatch(invalidate(["userAdded"]))
        }
    }, [userAdded, error])

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

    if (loading) return <div class="spinner-border text-primary"></div>
    return <>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div class="card">
                            <div class="card-header">Register</div>
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
                                <button type="submit" class="btn btn-primary w-100 mt-3">
                                    Signup
                                </button>
                                <p class="text-center mt-3">
                                    Already Have Account? <Link to={"/login"}>Login</Link>
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