import React from 'react'
import Footer from '../components/Footer'
import { useFormik } from 'formik'
import * as yup from 'yup'


const Contact = () => {
    const formik = useFormik({
        initialValues: ({
            name: "",
            email: "",
            subject: "",
            message: "",
        }),
        validationSchema: yup.object({
            name: yup.string().required(),
            email: yup.string().required().email(),
            subject: yup.string().required(),
            message: yup.string().required(),
        }),
        onSubmit: (value, restForm) => {
            console.log(value);
            // dispatch(loginUser(value))
        }
    })
    return <>
        {/* <!-- Start Content Page --> */}
        <div class="container-fluid bg-light py-5">
            <div class="col-md-6 m-auto text-center">
                <h1 class="h1">Contact Us</h1>
                <p>
                    Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        </div>


        {/* <!-- Start Contact --> */}
        <div class="container py-5">
            <div class="row py-5">
                <form onSubmit={formik.handleSubmit} class="col-md-9 m-auto" method="post" role="form">
                    <div class="row" >
                        <div class="form-group col-md-6 mb-3">
                            <label for="inputname">Name</label>
                            <input
                                {...formik.getFieldProps("name")}
                                type="text"
                                class={`form-control mt-1 ${formik.touched.name && (formik.errors.name ? "is-invalid" : "is-valid")}`}
                                id="name" name="name" placeholder="Name" />
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label for="inputemail">Email</label>
                            <input
                                {...formik.getFieldProps("email")}
                                type="email"
                                class={`form-control mt-1 ${formik.touched.email && (formik.errors.email ? "is-invalid" : "is-valid")}`}
                                id="email" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="inputsubject">Subject</label>
                        <input
                            {...formik.getFieldProps("subject")}
                            type="text"
                            class={`form-control mt-1 ${formik.touched.subject && (formik.errors.subject ? "is-invalid" : "is-valid")}`}
                            id="subject" name="subject" placeholder="subject" />

                    </div>
                    <div class="mb-3">
                        <label for="inputmessage">Message</label>
                        <textarea
                            {...formik.getFieldProps("message")}
                            class={`form-control mt-1 ${formik.touched.message && (formik.errors.message ? "is-invalid" : "is-valid")}`}
                            id="message" name="message" placeholder="Message" rows="8"></textarea>
                    </div>
                    <div class="row">
                        <div class="col text-end mt-2">
                            <button type="submit" class="btn btn-success btn-lg px-3">Let’s Talk</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        {/* <!-- End Contact --> */}

        <Footer />
    </>
}

export default Contact