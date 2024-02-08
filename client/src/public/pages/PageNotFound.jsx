import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return <>
        <div className="container text-center my-5">
            <div className="row">
                <div className="col-md-6 mt-5 pt-md-5">
                    <h2 className='text-danger fw-light mb-4'>Oops 404! Page Not Found</h2>
                    <p className='fs-5 text-muted'>The page you are trying to access doesn’t exist
                        <br />
                        Try going back to our homepage.</p>
                    <Link to={"/"} className="btn btn-outline-primary mt-1">Go To Home</Link>
                </div>
                <div className="col-md-6">
                    <img src="https://img.freepik.com/premium-vector/fixed-404-problem-isometric-illustration_18660-420.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="" className=' img-fluid' />
                </div>
            </div>
        </div>
    </>
}

export default PageNotFound