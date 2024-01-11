import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
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