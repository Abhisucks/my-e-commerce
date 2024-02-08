import React, { useEffect } from 'react';

const Error = () => {

    return (
        <div className="container text-center my-5">
            <div className="row">
                <div className="col-md-6 mt-5 pt-md-5">
                    <h2 className='text-danger fw-light mb-4'>Oops! Something went wrong.</h2>
                    <p className='fs-5 text-muted'>Please try again later.</p>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid mt-0 w-75' src="https://img.freepik.com/free-vector/monster-404-error-concept-illustration_114360-1879.jpg?size=626&ext=jpg&ga=GA1.2.499869514.1706805800&semt=ais" alt="Error Illustration" />
                </div>
            </div>
        </div>
    );
}

export default Error;
