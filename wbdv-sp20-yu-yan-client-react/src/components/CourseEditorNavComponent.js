import React from "react";
import LessonTabsComponent from "./LessonTabsComponent";

const CourseEditorNavComponent = ({course}) =>
    <div>
      <nav className="navbar navbar-dark bg-secondary">
        <label className="text-white h4 text-left offset-1">
          {
            course.title
          }
        </label>
        <ul className="nav nav-pills nav-fill col-md-8 text-right">
          <LessonTabsComponent/>
        </ul>
        <a href="#"
           className="col-md-auto">
          <i className="fas fa-times fa-2x"
             style={{color: '#000000'}}/>
        </a>
      </nav>
    </div>;

export default CourseEditorNavComponent;