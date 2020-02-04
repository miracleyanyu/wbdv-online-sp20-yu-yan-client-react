import React from 'react'

const CourseGridCardComponent = ({course, deleteCourse}) =>
    <div className="card"
         style={{width: '16.5rem', margin: '8px', padding: '10px'}}>
      <img src="https://i.ibb.co/SxYsFKM/Screen-Shot-2020-02-03-at-14-38-00.png" className="card-img-top" alt="..."/>
        <div className="font-weight-bold"
             style={{margin: '8px', padding: '10px'}}>
          {course.title}
        </div>
      <div className="dropdown text-right">
        <i className="fas fa-ellipsis-v dropdown-toggle"
           data-toggle="dropdown"></i>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item"
          >Edit</a>
          <a className="dropdown-item"
             onClick={(event) => deleteCourse(course)}>Delete</a>
        </div>
      </div>
    </div>;

export default CourseGridCardComponent;