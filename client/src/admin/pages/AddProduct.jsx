import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, editProduct, getAllProduct } from '../../redux/actions/adminActions'
import { toast } from 'react-toastify'
import { invalidate } from '../../redux/slice/adminSlice'
import Loader from '../../public/components/Loader'
// import { getUsers } from '../../redux/actions/publicActions'

const AddProduct = () => {
    const [proId, setproId] = useState()
    const [selectedPro, setselectedPro] = useState({
        category: "",
        img: "",
        title: "",
        price: 0,
        qty: 1,
        count: 50
    })
    const dispatch = useDispatch()
    const { loading, error, productAdded, allProducts, ProductDeleted, ProductEdited } = useSelector(state => state.admin)
    const [product, setProduct] = useState({
        category: "",
        img: "",
        title: "",
        price: 0,
        qty: 1,
        count: 200
    })
    const handleAddProduct = () => {
        console.log(product);
        dispatch(addProduct(product))
    }
    const handleEditProduct = () => {
        console.log(selectedPro);
        dispatch(editProduct(selectedPro))
    }

    useEffect(() => {

        if (error) {
            console.log("error");
            toast.error(error)
            dispatch(invalidate(["error"]))
        }
        if (productAdded) {
            toast.success("Product Added Successfully")
            dispatch(getAllProduct())
            dispatch(invalidate(["productAdded"]))
        }
        if (ProductDeleted) {
            toast.success("Product Deleted Successfully")
            dispatch(getAllProduct())
            dispatch(invalidate(["ProductDeleted"]))
        }
        if (ProductEdited) {
            toast.success("Product Updated Successfully")
            dispatch(getAllProduct())
            dispatch(invalidate(["ProductEdited"]))
        }
    }, [productAdded, error, ProductDeleted, ProductEdited])


    useEffect(() => {
        dispatch(getAllProduct())
    }, [])

    const handleDelete = (proId) => {
        dispatch(deleteProduct(proId))
    }
    const content = <>
        <table class="table table-dark table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Actions</th>

                </tr>
            </thead>
            <tbody>
                {
                    allProducts && allProducts.map((item, i) => <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>
                            <img src={item.img} alt="" className='img-fluid' width={100} />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td className={item.count <= 20 ? 'text-danger' : ''}>{item.count}</td>
                        <td>
                            <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#editexampleModal" onClick={e => setselectedPro(item)}>Edit</button>
                            <button type="button" class="btn btn-outline-danger mx-2" data-bs-toggle="modal" data-bs-target="#deleteexampleModal" onClick={e => setproId(item._id)}>Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>

    </>



    if (loading) {
        return <Loader />
    }

    return <>

        <div className="container">
            <div className='text-end mt-4'>
                <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    + Add Product
                </button>
            </div>
            <h5 className='text-center'>All Listed Products</h5>

            <div className="table-responsive">
                {content}
            </div>
        </div>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <label htmlFor="">Categerogy</label>
                        <select value={product.category}
                            onChange={e => setProduct({ ...product, category: e.target.value })} className="form-select  mt-2" >
                            <option value="fruits">Fruits</option>
                            <option value="vegitable">Vegitable</option>
                            <option value="FreshProduce">Fresh Produce</option>
                            <option value="Dairy and Eggs">Dairy and Eggs</option>
                            <option value="Food">Food</option>
                        </select>

                        <div className='mt-2'>
                            <label htmlFor="">Upload Img</label>
                            <input value={product.img}
                                onChange={e => setProduct({ ...product, img: e.target.value })}
                                type="text" className='form-control mt-1' placeholder='image url' />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="">Title</label>
                            <input value={product.title}
                                onChange={e => setProduct({ ...product, title: e.target.value })}
                                type="text" className='form-control mt-1' placeholder='add title' />
                        </div>

                        <div className='mt-2'>
                            <label htmlFor="">Price</label>
                            <input value={product.price}
                                onChange={e => setProduct({ ...product, price: e.target.value })}
                                type="text" className='form-control mt-1' />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="">qty</label>
                            <input value={product.qty}
                                onChange={e => setProduct({ ...product, qty: e.target.value })}
                                type="text" className='form-control mt-1' />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="">Count</label>
                            <input value={product.count}
                                onChange={e => setProduct({ ...product, count: e.target.value })}
                                type="text" className='form-control mt-1' />
                        </div>

                        <button onClick={handleAddProduct} type="button" class="btn btn-primary w-100 mt-4">Save</button>

                    </div>

                </div>
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
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={e => handleDelete(proId)}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
        {/* delete modal end */}

        {/* edit modal start*/}

        <div class="modal fade" id="editexampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <label htmlFor="">Categerogy</label>
                        <select value={selectedPro.category}
                            onChange={e => setselectedPro({ ...selectedPro, category: e.target.value })} className="form-select  mt-2" >
                            <option value="fruits">Fruits</option>
                            <option value="vegitable">Vegitable</option>
                            <option value="FreshProduce">Fresh Produce</option>
                            <option value="Dairy and Eggs">Dairy and Eggs</option>
                            <option value="Food">Food</option>
                        </select>

                        <div className='mt-2'>
                            <label htmlFor="">Upload Img</label>
                            <input value={selectedPro.img}
                                onChange={e => setselectedPro({ ...selectedPro, img: e.target.value })}
                                type="text" className='form-control mt-1' placeholder='image url' />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="">Title</label>
                            <input value={selectedPro.title}
                                onChange={e => setselectedPro({ ...selectedPro, title: e.target.value })}
                                type="text" className='form-control mt-1' placeholder='add title' />
                        </div>

                        <div className='mt-2'>
                            <label htmlFor="">Price</label>
                            <input value={selectedPro.price}
                                onChange={e => setselectedPro({ ...selectedPro, price: e.target.value })}
                                type="text" className='form-control mt-1' />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="">qty</label>
                            <input value={selectedPro.qty}
                                onChange={e => setselectedPro({ ...selectedPro, qty: e.target.value })}
                                type="text" className='form-control mt-1' />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="">Count</label>
                            <input value={selectedPro.count}
                                onChange={e => setselectedPro({ ...selectedPro, count: e.target.value })}
                                type="text" className='form-control mt-1' />
                        </div>

                        <button onClick={handleEditProduct} type="button" data-bs-dismiss="modal" class="btn btn-primary w-100 mt-4">Save</button>

                    </div>
                </div>
            </div>
        </div>
        {/* edit modal end*/}
    </>
}

export default AddProduct