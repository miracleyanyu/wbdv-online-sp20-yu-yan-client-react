import React from "react";
import LessonTabsComponent from "./LessonTabsComponent";
import {Link} from "react-router-dom"

class CourseEditorNavComponent extends React.Component {

  constructor(props) {
    super(props);
    // this.props.findCourseById(this.props.courseId)
    //   .then(course =>
    //     this.setState({
    //       course: course
    //     }))
  };

  // state = {
  //   course: null
  // };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-secondary">
          <label className="text-white h4 text-left offset-1">
            {
              this.props.course.title
            }
          </label>
          <ul className="nav nav-pills nav-fill col-md-8 text-right">
            <LessonTabsComponent/>
          </ul>
          <Link to="/course-list"
             className="col-md-auto">
            <i className="fas fa-times fa-2x"
               style={{color: '#000000'}}/>
          </Link>
        </nav>
      </div>
    )
  }
}

export default CourseEditorNavComponent;