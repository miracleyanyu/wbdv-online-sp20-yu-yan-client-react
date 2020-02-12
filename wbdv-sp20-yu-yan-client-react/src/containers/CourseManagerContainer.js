import React from "react";
import CourseService from "../services/CourseService"
import CourseTableComponent from "../components/CourseList/CourseTableComponent"
import CourseManagerNavComponent from "../components/CourseList/CourseManagerNavComponent"
import CourseGridComponent from "../components/CourseList/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import CourseListComponent from "../components/CourseList/CourseListComponent";

const courseService = new CourseService();

class CourseManagerContainer extends React.Component {

  constructor(props) {
    super(props);
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    courseService.findCourseById(id)
    .then(course =>
        this.setState({
          whichCourse: course
        })
    );
  }

  state = {
    layout: 'table',
    whichCourse: {},
    newCourseTitle: 'New Course',
    courses: []
  };

  componentDidMount() {
    courseService.findAllCourses()
      .then(courses => {
        this.setState({
          courses: courses
        })
      });
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

  findCourseById = (courseId) => {
    courseService.findCourseById(courseId)
    .then(course =>
        this.setState({
          whichCourse: course
        })
    );
    return this.state.whichCourse;
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
                 render={(props) =>
                     <CourseEditorComponent
                         {...props}
                         courseId={props.match.params.courseId}
                         findCourseById={courseService.findCourseById}
                         course={this.findCourseById()}/>
                 }/>
          <Route path="/course-editor/:courseId/module/:moduleId"
                 exact={true}
                 render={(props) =>
                     <CourseEditorComponent
                         {...props}
                         course={this.findCourseById(props.match.params.courseId)}
                         moduleId={props.match.params.moduleId}
                         courseId={props.match.params.courseId}
                         findCourseById={courseService.findCourseById}
                         hideEditor={this.hideEditor}/>
                 }/>
          <Route
              path="/course-editor/:courseId/module/:moduleId/lesson/:lessonId"
              exact={true}
              render={(props) =>
                  <CourseEditorComponent
                      {...props}
                      lessonId={props.match.params.lessonId}
                      moduleId={props.match.params.moduleId}
                      courseId={props.match.params.courseId}
                      hideEditor={this.hideEditor}/>
              }/>
        </Router>
    )
  }
}

export default CourseManagerContainer;