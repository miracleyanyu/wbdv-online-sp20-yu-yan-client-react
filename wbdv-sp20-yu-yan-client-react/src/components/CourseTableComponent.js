import React from "react";
import CourseRowComponentStateful from "./CourseRowComponentStateful";

const CourseTableComponent = ({editCourse, deleteCourse, courses}) =>
    <table className="table table-hover">
      <tbody>
        {
          courses.map(course =>
              <CourseRowComponentStateful
                editCourse={editCourse}
                deleteCourse={deleteCourse}
                key={course._id}
                course={course}/>
          )
        }
      </tbody>
    </table>;

export default CourseTableComponent;