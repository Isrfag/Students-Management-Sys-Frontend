import React from 'react'
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <section className='d-flex justify-content-center mt-8'>
      <div className="card card-dark shadow" style={{width: '48rem',textAlign:'center'}}>
        <div className="card-body">
          <h2 className="card-title">Welcome to the students management system </h2>
          <h4 className="card-subtitle mt-3 mb-3 text-muted">Search, add , update or delete any student from the database </h4>
          <p className="card-text">This system is designed to provide data from the database and renderize it using React</p>
          <div className="d-flex justify-content-center">
            <Link to='/view-students' className="btn btn-outline-info btn">See all students</Link>
            <Link to='/add-students' className="btn btn-outline-warning btn">Add a new student</Link>
          </div>
        </div>
    </div>
  </section>
  )
}