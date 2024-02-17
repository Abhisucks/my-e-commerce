import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserMessage } from '../../redux/actions/publicActions'

const Messages = () => {
    const { loading, error, messages } = useSelector(state => state.public)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserMessage())
    }, [])

    const content = <>
        <table class="table table-dark table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Message</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    messages && messages.map((item, i) => <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>
                            {item.name}
                        </td>
                        <td>{item.email}</td>
                        <td>{item.subject}</td>
                        <td>{item.message}</td>
                        <td>
                            <button type="button" class="btn btn-outline-danger mx-2" >
                                <i className='bi bi-trash'></i>
                            </button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

    </>
    return <>
        <div className=' container mt-3'>
            <h5 className='text-center'>User Messages</h5>
            <div className="table-responsive">
                {content}
            </div>
        </div>

    </>
}

export default Messages