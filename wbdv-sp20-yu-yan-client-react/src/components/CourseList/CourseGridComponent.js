import React from 'react'
import CourseGridCardComponentStateful from './CourseGridCardComponentStateful'

const CourseGridComponent = ({editCourse, activateCourseEditor, deleteCourse, courses}) =>
    <div>
      <div className="row">
        {
          courses.map(function(course, index) {
            return (
                <CourseGridCardComponentStateful
                    activateCourseEditor={activateCourseEditor}
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