import React from 'react'
import { Link } from 'react-router-dom'

const OrderPlaced = () => {
    return <>
        <div className="container m-5">
            <h3>Hurry!</h3>
            <h4>Your Order Is Placed Successfully</h4>
            <Link to={"/myorders"}>My Orders</Link>
        </div>
    </>
}

export default OrderPlaced