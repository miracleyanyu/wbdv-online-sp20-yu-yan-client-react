import React from "react";
import {connect} from "react-redux"
import {MODULES_API_URL} from "../common/constants";

const ModuleListItem = ({module, courseId, edit, save, editing, deleteModule, updateModule, active}) =>
      <li className={`list-item ${active ? 'active':''}`}
          style={{margin: '10px', padding: '10px'}}>
        <button type="button"
                className="btn btn-secondary btn-lg col-md-12">
          <div className="container">
            <div className="row">
              {
                !editing &&
                <i className="offset-1 col col-8 align-middle">
                {
                  module.title
                }
                </i>
              }
              {
                editing &&
                <td className="col">
                  <input value={module.title}
                         onChange={(e) => updateModule(courseId, module._id, e.target.value)}/>
                </td>
              }
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
                  <i className="fas fa-save col-md-auto"
                     onClick={save}/>
                  <i className="far fa-trash-alt col-md-auto"
                     onClick={() => deleteModule(module._id)}/>
                </span>
              }
            </div>
          </div>
        </button>
      </li>;

const stateToPropertyMapper = (state) => ({
    modules: state.modules.modules
});

const dispatchToPropertyMapper = (dispatch) => ({
  deleteModule: (moduleId) => {
    fetch(`${MODULES_API_URL}/${moduleId}`, {
      method: 'DELETE'
    }).then(response => response.json())
    .then(status => dispatch({
      type: 'DELETE_MODULE',
      moduleId: moduleId
    }))
  }
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(ModuleListItem);