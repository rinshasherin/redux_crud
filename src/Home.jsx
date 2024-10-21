import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import Add from './components/Add'
import { Link } from 'react-router-dom'
import { deleteStudent } from './redux/studentSlice'

function Home() {

    const student = useSelector((state) => state.studentReducer)
    console.log(student)
    const dispatch = useDispatch()

    return (
        <>
            <h1 className='text-center text-dark mt-2 fw-bold'>Student Details</h1>
            <div className="container">

                <Link to={'/add'} className="btn btn-primary mt-5">create new</Link>
                <div className='mt-5'>
                    {
                        student?.length > 0 ?
                            <table className="table table-secondary table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Department</th>
                                        <th>Age</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        student?.map((item, index) => (
                                            <tr>
                                                <td>{item?.id}</td>
                                                <td>{item?.name}</td>
                                                <td>{item?.dept}</td>
                                                <td>{item?.age}</td>
                                                <td>
                                                    
                                                    <Link to={`edit/${item.id}`} className="btn">
                                                        <i className="fa-solid fa-user-pen fa-xl" style={{ color: "#4a4a4a", }} />
                                                    </Link>
                                                    <Link className="btn" onClick={() => { dispatch(deleteStudent({ id: item.id })) }}>
                                                        <i className="fa-solid fa-trash fa-xl" style={{ color: "#a21616", }} />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            :
                            <h3>No Details yet!!</h3>
                    }

                </div>
            </div>
        </>
    )
}

export default Home