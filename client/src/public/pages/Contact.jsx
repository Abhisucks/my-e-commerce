import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { addUserMessage } from '../../redux/actions/publicActions'
import { invalidate } from '../../redux/slice/publicSlice'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'


const Contact = () => {
    const dispatch = useDispatch()
    const { loading, error, messageAdded } = useSelector(state => state.public)

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
        onSubmit: (value, resetForm) => {
            dispatch(addUserMessage(value))
        }
    })

    useEffect(() => {

        if (error) {
            toast.error(error)
            dispatch(invalidate(["error"]))
        }
        if (messageAdded) {
            toast.success("Message Sent Successfully")
            dispatch(invalidate(["messageAdded"]))
        }
    }, [messageAdded, error])

    if (loading) {
        return <Loader />
    }


    return <>
        {/* <!-- Start Content Page --> */}
        <div class="container-fluid bg-light py-5">
            <div class="col-md-6 m-auto text-center">
                <h1 class="h1">Contact Us</h1>
                <p>
                    Have questions or need to report an issue with a Our product or service? We've got you covered.
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