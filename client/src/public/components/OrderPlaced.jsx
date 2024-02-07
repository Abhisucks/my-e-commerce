import React from 'react'
import { Link } from 'react-router-dom'

const OrderPlaced = () => {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-5 mt-5 pt-5 text-center">
                    <h3 className='fw-bold'>Hurry!</h3>
                    <h4 className='fw-'>Your Order Is Placed Successfully!</h4>
                    <p>Payment Id-</p>
                    <Link to={"/myorders"}>My Orders</Link>
                </div>
                <div className="col-sm-7">
                    <img className=' img-fluid' src="https://img.freepik.com/free-vector/cash-delivery-concept_23-2148786295.jpg?size=626&ext=jpg&ga=GA1.1.499869514.1706805800&semt=ais" alt="" />
                </div>
            </div>
        </div>
    </>
}

export default OrderPlaced