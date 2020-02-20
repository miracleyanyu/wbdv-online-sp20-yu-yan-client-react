import React from "react";
import CourseEditorNavComponent from "./CourseEditorNavComponent";
import TopicPillsContainer from "../../containers/TopicPillsContainer";
import ModuleListContainer from "../../containers/ModuleListContainer";
import {combineReducers, createStore} from "redux";
import modules from '../../reducers/ModuleReducer'
import lessons from '../../reducers/LessonReducer'
import topics from '../../reducers/TopicReducer'
import widgets from '../../reducers/WidgetReducer'
import {Provider} from "react-redux"
import WidgetListContainer from "../../containers/WidgetListContainer";

const reducers = combineReducers({
  modules, lessons, topics, widgets
});

const store = createStore(reducers);

const CourseEditorComponent = ({course, courseId, moduleId, lessonId, topicId, closeCourseEditor, findCourseById, history, togglePreview, preview}) =>
    <Provider store={store}>
      <body style={{height: '100000px'}}>
        <CourseEditorNavComponent
          course={course}
          moduleId={moduleId}
          courseId={courseId}
          history={history}
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
                      <TopicPillsContainer
                          lessonId={lessonId}
                          courseId={courseId}
                          moduleId={moduleId}
                          history={history}/>
                      <div className="row">
                        <div className="col">
                          <form className="form-inline">
                            <button type="button"
                                    className="form-control offset-9 col-md-auto btn btn-success col-md-1">Save
                            </button>
                            <label className="form-check-label bg-white col-md-auto font-weight-bold">Preview</label>
                            {
                              !preview &&
                              <i className="fas fa-toggle-off fa-2x col-md-auto"
                                 onClick={() => togglePreview()}/>
                            }
                            {
                              preview &&
                              <i className="fas fa-toggle-on fa-2x col-md-auto"
                                 onClick={() => togglePreview()}/>
                            }
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <label className="row"/>
                  <label className="row"/>
                  <WidgetListContainer
                      lessonId={lessonId}
                      courseId={courseId}
                      moduleId={moduleId}
                      history={history}
                      topicId={topicId}
                      preview={preview}/>
                </div>
              </div>
            </div>
          </div>
      </body>
    </Provider>;

export default CourseEditorComponent;