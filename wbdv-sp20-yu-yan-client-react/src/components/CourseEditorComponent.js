import React from "react";
import CourseEditorNavComponent from "./CourseEditorNavComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import ModuleListContainer from "../containers/ModuleListContainer";
import {combineReducers, createStore} from "redux";
import modules from '../reducers/Modules'
import lessons from '../reducers/Lessons'
import {Provider} from "react-redux"

const reducers = combineReducers({
  modules, lessons
});

const store = createStore(reducers);

const CourseEditorComponent = ({course, courseId, closeCourseEditor, findCourseById, history}) =>
    <Provider store={store}>
      <body style={{height: '100000px'}}>
        <CourseEditorNavComponent
          course={course}
          courseId={courseId}
          closeCourseEditor={closeCourseEditor}
          findCourseById={findCourseById}/>
          <div className="container-fluid">
            <div className="row">
              <nav className="col-md-3 d-none d-md-block bg-dark sidebar"
                   style={{height: '100000px'}}>
                <div className="sidebar-sticky">
                  <ul className="nav flex-column">
                    <div className="container">
                      <ModuleListContainer
                          courseId={courseId}
                          history={history}/>
                    </div>
                  </ul>
                </div>
              </nav>
              <div className="row col-md-9">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col">
                      <label className="row"/>
                      <i className="col col-md-1"/>
                      <i className="col col-md-1"/>
                      <i className="col col-md-1"/>
                      <i className="col col-md-1"/>
                      <TopicPillsComponent/>
                      <i className="far fa-plus-square fa-2x align-middle wbdv-topic-add-btn"
                         style={{margin: '10px', padding: '10px'}}/>
                      <div className="row">
                        <div className="col">
                          <form className="form-inline">
                            <button type="button"
                                    className="form-control offset-8 col-md-auto btn btn-success">Success
                            </button>
                            <label
                                className="form-check-label bg-white col-md-auto font-weight-bold">Preview</label>
                            <i className="fas fa-toggle-off fa-2x col-md-auto"/>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label className="row"/>
                  <label className="row"/>
                  <div className="row">
                    <div className="col col-10 offset-1 border border-light bg-light">
                      <form className="form-inline">
                        <h3 className="form-check-label bg-light col-md-auto font-weight-bold">Heading
                          Widget</h3>
                        <i className="fas fa-arrow-circle-up offset-7 fa-2x col-md-auto"
                           style={{color: '#FFAA1D'}}/>
                        <i className="fas fa-arrow-circle-down fa-2x col-md-auto"
                           style={{color: '#FFAA1D'}}/>
                        <div className="dropdown">
                          <button
                              className="btn btn-secondary dropdown-toggle bg-light border-white text-dark"
                              type="button" id="dropdownMenuButton"
                              data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                            Heading
                          </button>
                          <div className="dropdown-menu"
                               aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Paragraph</a>
                            <a className="dropdown-item" href="#">List</a>
                            <a className="dropdown-item" href="#">Image</a>
                          </div>
                        </div>
                        <i className="fas fa-window-close fa-2x col-md-auto"
                           style={{color: '#FF0000'}}/>
                      </form>
                      <label className="row"/>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                      <span className="input-group-text"
                            id="basic-addon1">Heading Text</span>
                        </div>
                        <input type="text" className="form-control"
                               aria-label="HeadingText"
                               aria-describedby="basic-addon1"/>
                      </div>
                      <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle bg-light border-dark text-dark col-md-12"
                            type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                          Heading 1
                        </button>
                        <div className="dropdown-menu"
                             aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">Heading 2</a>
                          <a className="dropdown-item" href="#">Heading 3</a>
                          <a className="dropdown-item" href="#">Heading 4</a>
                        </div>
                      </div>
                      <label className="row"/>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                      <span className="input-group-text"
                            id="basic-addon1">Widge Name</span>
                        </div>
                        <input type="text" className="form-control"
                               aria-label="HeadingText"
                               aria-describedby="basic-addon1"/>
                      </div>
                      <label className="row"/>
                      <label className="row"/>
                      <h3>
                        Preview
                      </h3>
                      <h1>
                        Heading Text
                      </h1>
                    </div>
                  </div>
                  <label className="row"/>
                  <label className="row"/>
                  <div className="col col-11 text-right"
                       style={{height: '200px'}}>
                    <a href="#">
                      <i className="fas fa-plus-circle fa-3x"
                         style={{color: '#F51B00'}}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </body>
    </Provider>;

export default CourseEditorComponent;