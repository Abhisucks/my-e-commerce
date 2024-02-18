import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserMessage, getUserMessage } from '../../redux/actions/publicActions'
import { toast } from 'react-toastify'
import { invalidate } from '../../redux/slice/publicSlice'

const Messages = () => {
    const { loading, error, messages, messageDeleted } = useSelector(state => state.public)
    const dispatch = useDispatch()
    const [messageId, setMessageId] = useState()

    useEffect(() => {
        dispatch(getUserMessage())
        if (messageDeleted) {
            toast.success("Message Deleted Successfully")
            dispatch(invalidate(["messageDeleted"]))
        }
        if (error) {
            toast.error(error)
            dispatch(invalidate(["error"]))
        }
    }, [messageDeleted, error])

    const handleDelete = (msgId) => {
        dispatch(deleteUserMessage(msgId))
    }

    const content = <>
        <table class="table table-dark table-striped table-hover mt-3">
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
                            <button type="button" class="btn btn-outline-danger" data-bs-toggle="modal"
                                data-bs-target="#deleteexampleModal" onClick={e => setMessageId(item._id)}>
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


        {/* delete modal start */}
        <div class="modal fade" id="deleteexampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Delete Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h5>Are You Sure?</h5>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={e => handleDelete(messageId)}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
        {/* delete modal end */}

    </>
}

export default Messages