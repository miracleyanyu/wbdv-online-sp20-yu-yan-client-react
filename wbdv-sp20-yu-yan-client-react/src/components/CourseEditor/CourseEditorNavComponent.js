import React from "react";
import {Link} from "react-router-dom"
import LessonTabsContainer from "../../containers/LessonTabsContainer";

class CourseEditorNavComponent extends React.Component {

  constructor(props) {
    super(props);
    const url = window.location.pathname;
    if (url.split('/').length === 5) {
      this.state.moduleId = url.substring(url.lastIndexOf('/') + 1);
    }
    else {
      this.state.moduleId = url.split('/')[4];
    }
  };

  state = {
    moduleId: null
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-secondary">
          <label className="text-white h4 text-left offset-1">
            {
              this.props.course.title
            }
          </label>
          <LessonTabsContainer
              courseId={this.props.courseId}
              moduleId={this.state.moduleId}
              history={this.props.history}/>
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