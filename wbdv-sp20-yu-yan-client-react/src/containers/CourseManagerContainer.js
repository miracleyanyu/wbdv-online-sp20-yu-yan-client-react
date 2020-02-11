import React from "react";
import CourseService from "../services/CourseService"
import CourseTableComponent from "../components/CourseTableComponent"
import CourseManagerNavComponent from "../components/CourseManagerNavComponent"
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditorComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import CourseListComponent from "../components/CourseListComponent";

const courseService = new CourseService();

class CourseManagerContainer extends React.Component {

  state = {
    layout: 'table',
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
      title: this.state.newCourseTitle,
      date: (new Date()).toLocaleString()
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
      title: value,
      date: (new Date()).toLocaleString()
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
      whichCourse: course
    })
  };

  render() {
    return (
        <Router>
          <Route path={"/course-list"}
                 render={() =>
                     <CourseListComponent
                         state={this.state}
                         toggle={this.toggle}
                         updateFormState={this.updateFormState}
                         addCourse={this.addCourse}
                         layout={this.state.layout}
                         activateCourseEditor={this.activateCourseEditor}
                         editCourse={this.editCourse}
                         deleteCourse={this.deleteCourse}
                         courses={this.state.courses}
                         whichCourse={this.state.whichCourse}/>
                 }/>
          <Route path={"/course-editor/:courseId"}
                 exact={true}
                 render={() =>
                     <CourseEditorComponent
                         course={this.state.whichCourse}/>
                 }/>
        </Router>
    )
  }
}

export default CourseManagerContainer;