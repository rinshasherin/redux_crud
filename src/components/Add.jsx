// import React from 'react'
// import { useState } from 'react';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
// import Form from 'react-bootstrap/Form';
// import { addStudent } from '../redux/studentSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// function Add() {

//     const [name, setName] = useState("")
//     const [dept, setDept] = useState("")
//     const [age, setAge] = useState("")

//     const student=useSelector((state)=>state.studentReducer)
//     console.log(student)
//     const dispatch=useDispatch()
//     const nav=useNavigate

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         dispatch(addStudent({ id: student[student.length - 1].id+1,name,dept,age }))
//         nav('/')
//     }

//     return (
//         <>
//             <div className='container-fluid d-flex justify-content-center align-items-center' style={{ 'height': '100vh' }}>
//                 <div className=" border p-5 shadow " style={{ width: "500px" }}>
//                     <h3 className="text-dark">Add New Student</h3>
//                     <form action="" onSubmit={handleSubmit}>
//                         <FloatingLabel controlId="floatingInput" label="ID" className="mb-3 " >
//                             <Form.Control type="email" placeholder="name@example.com" />
//                         </FloatingLabel>
//                         <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
//                             <Form.Control type="text" placeholder="Password" onChange={(e) => {setName(...student,e.target.value)}} />
//                         </FloatingLabel>
//                         <FloatingLabel controlId="floatingInput" label="Department" className="mb-3">
//                             <Form.Control type="text" placeholder="Password" onChange={(e) => setDept(...student,e.target.value)} />
//                         </FloatingLabel>
//                         <FloatingLabel controlId="floatingInput" label="Age" className="mb-3">
//                             <Form.Control type="text" placeholder="Password" onChange={(e) => setAge(...student,e.target.value)} />
//                         </FloatingLabel>
//                     </form>
//                     <div className='d-flex justify-content-end mt-4'>
//                         <Link to={'/'} className="btn btn-secondary me-3">Cancel</Link>
//                         <button className="btn btn-primary">Add</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Add













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