import React from 'react'
import CourseGridCardComponentStateful from './CourseGridCardComponentStateful'

const CourseGridComponent = ({editCourse, deleteCourse, courses}) =>
    <div>
      <div className="row">
        {
          courses.map(function(course, index) {
            return (
                <CourseGridCardComponentStateful
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