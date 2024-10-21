import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editStudent } from '../redux/studentSlice'

function Edit() {
  
  const { id } = useParams()
  const student = useSelector((state) => state.studentReducer)
  const existingStudent = student.find((item) => item.id == id)
  const [uname, setName] = useState(existingStudent ? existingStudent.name : '')
  const [udept, setDept] = useState(existingStudent ? existingStudent.dept : '')
  const [uage, setAge] = useState(existingStudent ? existingStudent.age : '')


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault()
    dispatch(editStudent(
      {
        id: id,
        name: uname,
        dept: udept,
        age: uage
      }
    ))
    navigate('/')
  }
  return (

    <>

      <div className='edit-bg d-flex vh-100 justify-content-center align-items-center mt-5'>
        <div className='edit w-90 border p-5 shadow'>
          <h3 className='text-primary'> Edit Student</h3>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="name" >Name :</label>
              <input value={uname} onChange={(e) => setName(e.target.value)} type="text" name='name' className='form-control' placeholder='Enter Name' />
            </div>
            <div>
              <label htmlFor="category" >Department :</label>
              <input value={udept} onChange={(e) => setDept(e.target.value)} type="text" name='cat' className='form-control' placeholder='Enter Department' />
            </div>
            <div>
              <label htmlFor="price" >Age :</label>
              <input value={uage} onChange={(e) => setAge(e.target.value)} type="text" name='price' className='form-control' placeholder='Enter Age' />
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <Link to={"/"} className='btn btn-secondary '>Cancel</Link>
              <button className='btn btn-info '>Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Edit