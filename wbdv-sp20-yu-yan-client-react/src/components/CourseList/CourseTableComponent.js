import React from "react";
import CourseRowComponentStateful from "./CourseRowComponentStateful";

const CourseTableComponent = ({editCourse, activateCourseEditor, deleteCourse, courses}) =>
    <table className="table table-hover">
      <tbody>
        {
          courses.map(course =>
              <CourseRowComponentStateful
                activateCourseEditor={activateCourseEditor}
                editCourse={editCourse}
                deleteCourse={deleteCourse}
                key={course._id}
                course={course}/>
          )
        }
      </tbody>
    </table>;

export default CourseTableComponent;