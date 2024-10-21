import React from 'react'
import { useState } from 'react';
import { addStudent } from '../redux/studentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Add() {

  const [name, setName] = useState("")
  const [dept, setDept] = useState("")
  const [age, setAge] = useState("")


  const student = useSelector((state) => state.studentReducer)
  console.log(student)
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent({ id: student[student.length - 1].id + 1, name, dept, age }))
    navigate('/')
  }

  return (
    <>
      <div className=' d-flex vh-100 justify-content-center align-items-center mt-5'>
        <div className=' border p-5 shadow'>
          <h3 className='text-primary'>Add New Student</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name :</label>
              <input type="text" name='name' className='form-control form-signin' placeholder='Enter Name' onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="department">Department :</label>
              <input type="text" name='dept' className='form-control form-signin' placeholder='Enter Department' onChange={e => setDept(e.target.value)} />
            </div>
            <div>
              <label htmlFor="age">Age :</label>
              <input type="text" name='age' className='form-control form-signin' placeholder='Enter Age' onChange={e => setAge(e.target.value)} />
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <Link to={"/"} className='btn btn-secondary '>Cancel</Link>
              <button className='btn btn-info '>Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Add