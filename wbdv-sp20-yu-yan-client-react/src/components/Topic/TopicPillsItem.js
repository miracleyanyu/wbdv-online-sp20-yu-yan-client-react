import React from "react";
import {connect} from "react-redux"
import {TOPICS_API_URL} from "../../common/constants";

const TopicPillsItem = ({topic, lessonId, edit, save, refresh, editing, deleteTopic, updateTopic, active}) =>
    <li className={`list-item col-3 ${active ? 'active':''}`}
        style={{margin: '10px', padding: '10px'}}>
      <a className="nav-link bg-secondary text-white-50 font-weight-bold">
        <div className="container">
          <div className="col-8">
            {
              !editing &&
              <a className=""
                 onClick={refresh}>
                {
                  topic.title
                }
              </a>
            }
            {
              editing &&
              <i className="">
                <input value={topic.title}
                       onChange={(e) => updateTopic(lessonId, topic.id, e.target.value)}/>
              </i>
            }
          </div>
          <div className="col-2">
            {
              !editing &&
              <i className="fas fa-pencil-alt col-md-auto"
                 onClick={edit}/>
            }
            {
              editing &&
              <span>
                  <i className="fas fa-save col-md-1"
                     onClick={save}/>
                  <i className="far fa-trash-alt col-md-1"
                     onClick={() => deleteTopic(topic.id)}/>
                </span>
            }
          </div>
        </div>
      </a>
    </li>;

const stateToPropertyMapper = (state) => ({
  topics: state.topics.topics
});

const dispatchToPropertyMapper = (dispatch) => ({
  deleteTopic: (topicId) => {
    fetch(`${TOPICS_API_URL}/${topicId}`, {
      method: 'DELETE'
    }).then(response => response.json())
    .then(status => dispatch({
      type: 'DELETE_TOPIC',
      topicId: topicId
    }))
  }
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicPillsItem);