import axios from 'axios';
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

export const AddStudents = () => {
    let navigate = useNavigate();
    const[student,setStudent] = useState({
        firstName:'',
        lastName:'',
        email:'',
        department:''
    })

    const {firstName,lastName,email,department} = student;

    const handleInputChange = (e) => {

        setStudent({...student,[e.target.name]: e.target.value}); //Obten lo que hay en el campo input
    };

    const saveStudent = async(e) => {

        e.preventDefault();
        await axios.post(
            'http://localhost:8080/students/add',student
        );
        navigate('/view-students');
    }

  return (
    <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h2 className='mt-5'>Add a new student</h2>
        <form onSubmit={(e) => saveStudent(e)}>
            <div className='input-group mb-5'>
                <label
                    className='input-group-text'
                    htmlFor='firstName'
                    >Name
                </label>
                <input
                    className='form-control col-sm-6'
                    type='text'
                    name='firstName'
                    id='firstName'
                    required
                    value={firstName}
                    onChange={(e) => handleInputChange(e)}
                ></input>
            </div>

            <div className='input-group mb-5'>
                <label
                    className='input-group-text'
                    htmlFor='firstName'
                    >Last name
                </label>
                <input
                    className='form-control col-sm-6'
                    type='text'
                    name='lastName'
                    id='lastName'
                    required
                    value={lastName}
                    onChange={(e) => handleInputChange(e)}
                ></input>
            </div>

            <div className='input-group mb-5'>
                <label
                    className='input-group-text'
                    htmlFor='firstName'
                    >Email
                </label>
                <input
                    className='form-control col-sm-6'
                    type='text'
                    name='email'
                    id='email'
                    required
                    value={email}
                    onChange={(e) => handleInputChange(e)}
                ></input>
            </div>

            <div className='input-group mb-5'>
                <label
                    className='input-group-text'
                    htmlFor='firstName'
                    >Department
                </label>
                <input
                    className='form-control col-sm-6'
                    type='text'
                    name='department'
                    id='department'
                    required
                    value={department}
                    onChange={(e) => handleInputChange(e)}
                ></input>
            </div>

            <div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Save
						</button>
					</div>     
					<div className="col-sm-2">
						<Link
							to={"/view-students"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
                </div>    
        </form>
    </div>
  )
}
