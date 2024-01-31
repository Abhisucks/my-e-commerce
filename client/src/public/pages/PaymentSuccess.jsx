import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from "react-router-dom"
import { addUserOrders } from '../../redux/actions/orderActions'
import { clearCart } from '../../redux/slice/publicSlice'
const PaymentSuccess = () => {

    const { login, error, cart } = useSelector(state => state.public)
    const { orderAdded } = useSelector(state => state.order)
    const dispatch = useDispatch()
    const seachQuery = useSearchParams()[0]
    const referenceNum = seachQuery.get("reference")
    const navigate = useNavigate()


    const modifiedCart = cart.map(({ _id, ...rest }) => ({
        ...rest,
        paymentId: referenceNum, // Use referenceNum as the paymentId
    }));

    // const modifiedCart = cart.map(({ _id, count, qty, ...rest }) => ({
    //     ...rest,
    //     qty,
    //     count: count - qty, // Update the count by subtracting qty
    //     paymentId: referenceNum, // Use referenceNum as the paymentId
    // }));

    useEffect(() => {
        if (cart.length > 0) {
            dispatch(addUserOrders(modifiedCart))
        }
    }, [])

    console.log(cart);

    useEffect(() => {
        if (orderAdded) {
            navigate("/orderplaced")
            dispatch(clearCart())
        }
    }, [orderAdded])

    return <>
        <div className='container mt-4'>

            {
                referenceNum
                    ? <>
                        <h3> Order Successfull</h3>

                        <p>
                            Reference No.{referenceNum}
                        </p>

                    </>
                    : <>
                        <h3> Order Unsuccessfull</h3>

                    </>
            }
        </div>
    </>

}

export default PaymentSuccess