import React from 'react'
import CourseGridCardComponent from './CourseGridCardComponent'

const CourseGridComponent = ({editCourse, deleteCourse, courses}) =>
    <div>
      <div className="row">
        {
          courses.map(function(course, index) {
            return (
                <CourseGridCardComponent
                    editCourse={editCourse}
                    key={course._id}
                    deleteCourse={deleteCourse}
                    course={course}/>
            )
          })
        }
      </div>
    </div>;

export default CourseGridComponent;