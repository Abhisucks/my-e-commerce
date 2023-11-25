import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminProtected = ({ compo }) => {
    const navigate = useNavigate()
    const { login } = useSelector(state => state.public)

    useEffect(() => {
        if (!login) {
            toast.error("Unauthorized Access")
        }
        if (login) {
            if (login.role !== "admin") {
                toast.error("Unauthorized Access")
            }
        }
    }, [])
    return <>
        {
            login && login.role === "admin" ? compo : <Navigate to={"/shop"} />
        }
    </>
}

export default AdminProtected