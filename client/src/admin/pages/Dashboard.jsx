import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../redux/actions/publicActions'

const Dashboard = () => {
    const { loading, error, users } = useSelector(state => state.public)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const content = <>
        <table class="table table-dark table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Id</th>
                    {/* <th scope="col">Action</th> */}

                </tr>
            </thead>
            <tbody>
                {
                    users && users.map((item, i) => <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>
                            {item.name}
                        </td>
                        <td>{item.email}</td>
                        <td>{item._id}</td>
                        {/* <td>
                            <button type="button" class="btn btn-outline-danger mx-2" >Delete</button>
                        </td> */}
                    </tr>)
                }
            </tbody>
        </table>

    </>
    return <>
        <div className=' container mt-3'>
            <h5 className='text-center'>All Users</h5>
            <div className="table-responsive">
                {content}
            </div>
        </div>

    </>
}

export default Dashboard