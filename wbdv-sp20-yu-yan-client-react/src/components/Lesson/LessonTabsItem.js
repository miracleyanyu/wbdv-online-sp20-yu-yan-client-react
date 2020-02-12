import React from "react";
import {connect} from "react-redux"
import {LESSONS_API_URL} from "../../common/constants";

const LessonTabsItem = ({lesson, moduleId, edit, save, refresh, editing, deleteLesson, updateLesson, active}) =>
    <li className={`nav-item col-3`}
        style={{margin: '10px', padding: '10px'}}>
      <a className={`nav-link bg-secondary text-white-50 font-weight-bold ${active ? 'bg-dark':''}`}>
        <div className="container">
          <div className="col-8">
            {
              !editing &&
              <a className=""
                 onClick={refresh}>
                {
                  lesson.title
                }
              </a>
            }
            {
              editing &&
              <i className="">
                <input value={lesson.title}
                       onChange={(e) => updateLesson(moduleId, lesson._id, e.target.value)}/>
              </i>
            }
          </div>
          <div className="col-4">
            {
              !editing &&
              <div className="col">
                <i className="fas fa-pencil-alt col-md-auto"
                   onClick={edit}/>
              </div>
            }
            {
              editing &&
              <span>
                  <i className="fas fa-save col-md-1"
                     onClick={save}/>
                  <i className="far fa-trash-alt col-md-1"
                     onClick={() => deleteLesson(lesson._id)}/>
              </span>
            }
          </div>
          </div>
      </a>
    </li>;

const stateToPropertyMapper = (state) => ({
  lessons: state.lessons.lessons
});

const dispatchToPropertyMapper = (dispatch) => ({
  deleteLesson: (lessonId) => {
    fetch(`${LESSONS_API_URL}/${lessonId}`, {
      method: 'DELETE'
    }).then(response => response.json())
    .then(status => dispatch({
      type: 'DELETE_LESSON',
      lessonId: lessonId
    }))
  }
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LessonTabsItem);