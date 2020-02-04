import React  from "react";
import CourseEditorNavComponent from "./CourseEditorNavComponent";

const CourseEditorComponent = ({course}) =>
  <div>
    <CourseEditorNavComponent
      course={course}/>
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-3 d-none d-md-block bg-dark sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column wbdv-module-list">
              <div className="container">
              </div>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>;

export default CourseEditorComponent;