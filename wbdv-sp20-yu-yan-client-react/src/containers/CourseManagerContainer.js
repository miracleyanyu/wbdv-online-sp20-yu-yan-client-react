import React from "react";
import CourseService from "../services/CourseService"
import CourseTableComponent from "../components/CourseTableComponent"
import CourseManagerNavComponent from "../components/CourseManagerNavComponent"
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditorComponent";

const courseService = new CourseService();

class CourseManagerContainer extends React.Component {

  state = {
    layout: 'table',
    activateEditor: false,
    whichCourse: null,
    newCourseTitle: 'New Course',
    courses: []
  };

  componentDidMount() {
    courseService.findAllCourses()
      .then(courses => {
        console.log(courses);
        this.setState({
          courses: courses
        })
      })
  }

  toggle = () => {
    this.setState(prevState => ({
      layout: prevState.layout === 'grid' ? 'table' : 'grid'
    }))
  };

  deleteCourse = (deleteCourse) => {
    courseService.deleteCourse(deleteCourse._id)
      .then(status => {
        return courseService.findAllCourses()
      })
      .then(courses => {
        this.setState({
          courses: courses
        })
      })
  };

  addCourse = () => {
    courseService.createCourse({
      title: this.state.newCourseTitle
    }).then(actualCourse => {
      return courseService.findAllCourses()
    }).then(courses => {
      this.setState({
        courses: courses
      })
    })
  };

  editCourse = (editCourse, value) => {
    courseService.editCourse(editCourse._id, {
      title: value
    })
      .then(status => {
        return courseService.findAllCourses()
      })
      .then(courses => {
        this.setState({
          courses: courses
        })
      })
  };

  updateFormState = (event) => {
    this.setState({
      newCourseTitle: event.target.value
    })
  };

  activateCourseEditor = (course) => {
    this.setState({
      activateEditor: true,
      whichCourse: course
    })
  };

  closeCourseEditor = () => {
    this.setState({
      activateEditor: false
    })
  };

  render() {
    return (
      <div>
        {
          !this.state.activateEditor &&
              <div>
                <CourseManagerNavComponent
                    toggle={this.toggle}
                    updateFormState={this.updateFormState}
                    addCourse={this.addCourse}
                    state={this.state}/>
                {
                  this.state.layout === "table" &&
                  <div className="bg-light">
                  <div className="container-fluid">
                  <div className="col-8 mx-auto">
                  {
                    this.state.layout === "table" &&
                    <CourseTableComponent
                        activateCourseEditor={this.activateCourseEditor}
                        editCourse={this.editCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                  }
                  </div>
                  </div>
                  </div>
                }
                {
                this.state.layout === "grid" &&
                <div className="bg-light">
                <div className="container-fluid">
                <div className="col-8 mx-auto">
                <table className="table table-hover">
                <tbody>
                  {
                    this.state.layout === "grid" &&
                    <CourseGridComponent
                        activateCourseEditor={this.activateCourseEditor}
                        editCourse={this.editCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                  }
                </tbody>
                </table>
                </div>
                </div>
                </div>
                }
              </div>
        }
        {
          this.state.activateEditor &&
              <div>
                <CourseEditorComponent
                  course={this.state.whichCourse}
                  closeCourseEditor={this.closeCourseEditor}/>
              </div>
        }
      </div>
    )
  }
}

export default CourseManagerContainer;