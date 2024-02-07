import React from 'react'
import { Link } from 'react-router-dom'

const OrderPlaced = () => {
    return <>
        <div className="container m-5">
            <h3 className='fw-lighter'>Hurry!</h3>
            <h4 className='fw-lighter'>Your Order Is Placed Successfully</h4>
            <Link to={"/myorders"}>My Orders</Link>
        </div>
    </>
}

export default OrderPlaced