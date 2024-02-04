import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from "react-router-dom"
import { addUserOrders } from '../../redux/actions/orderActions'
import { clearCart } from '../../redux/slice/publicSlice'
import { updateProStock } from '../../redux/actions/adminActions'
const PaymentSuccess = () => {

    const { login, error, cart } = useSelector(state => state.public)
    const { orderAdded } = useSelector(state => state.order)
    const dispatch = useDispatch()
    const seachQuery = useSearchParams()[0]
    const referenceNum = seachQuery.get("reference")
    const navigate = useNavigate()


    // const modifiedCart = cart.map(({ _id, ...rest }) => ({
    //     ...rest,
    //     paymentId: referenceNum, // Use referenceNum as the paymentId
    //     productId: _id
    // }));

    const modifiedCart = cart.map(item => {
        const { _id, ...rest } = item;

        return {
            ...rest,
            userId: login.id,
            paymentId: referenceNum,
            productId: _id
        };
    });

    console.log(modifiedCart);

    useEffect(() => {
        if (cart.length > 0 && referenceNum) {
            dispatch(addUserOrders(modifiedCart))

            dispatch(updateProStock(modifiedCart))
        }
    }, [])

    // console.log(modifiedCart);

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