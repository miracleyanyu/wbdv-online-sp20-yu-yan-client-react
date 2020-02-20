import React from "react";
import {WIDGETS_API_URL} from "../../common/constants";
import {connect} from "react-redux";

const HeadingWidgetComponent = ({widget, topicId, preview, edit, save, refresh, editing, deleteWidget, updateWidget, changeType, active}) =>
    <div className="container-fluid"
         style={{padding: "10px"}}>
      <div className="col col-10 offset-1 border border-light bg-light">
        {
          !preview &&
          <form className="form-inline">
            <h3 className="form-check-label bg-light col-md-auto font-weight-bold">Heading
              Widget</h3>
            {
              widget.order !== 0 &&
              <i className="fas fa-arrow-circle-up offset-7 fa-2x col-md-auto"
                 style={{color: '#FFAA1D'}}
                 onClick={() => updateWidget(topicId, widget.id, {
                   "id": widget.id,
                   "topicId": widget.topicId,
                   "name": widget.name,
                   "type": widget.type,
                   "text": widget.text,
                   "size": widget.size,
                   "order": widget.order - 1
                 })}/>
            }
            {
              widget.order === 0 &&
              <i className="offset-7"/>
            }
            <i className="fas fa-arrow-circle-down fa-2x col-md-auto"
               style={{color: '#FFAA1D'}}
               onClick={() => updateWidget(topicId, widget.id, {
                 "id": widget.id,
                 "topicId": widget.topicId,
                 "name": widget.name,
                 "type": widget.type,
                 "text": widget.text,
                 "size": widget.size,
                 "order": widget.order + 1
               })}/>
            <select value={widget.type}
                    onChange={(e) => updateWidget(topicId, widget.id, {
                      "id": widget.id,
                      "topicId": widget.topicId,
                      "name": widget.name,
                      "type": e.target.value,
                      "text": widget.text,
                      "size": widget.size,
                      "order": widget.order
                    })}>
              <option>Heading</option>
              <option>Paragraph</option>
            </select>
            <i className="fas fa-window-close fa-2x col-md-auto"
               style={{color: '#FF0000'}}
               onClick={() => deleteWidget(widget.id)}/>
          </form>
        }
        {
          !preview &&
          <label className="row"/>
        }
        {
          !preview &&
          <div className="input-group mb-3">
            <div className="input-group-prepend">
                      <span className="input-group-text"
                            id="basic-addon1">Heading Text</span>
            </div>
            <input type="text" className="form-control"
                   aria-label="HeadingText"
                   aria-describedby="basic-addon1"
                   placeholder="Heading Text"
                   value={widget.text}
                   onChange={(e) => updateWidget(topicId, widget.id, {
                     "id": widget.id,
                     "topicId": widget.topicId,
                     "name": widget.name,
                     "type": widget.type,
                     "text": e.target.value,
                     "size": widget.size,
                     "order": widget.order
                   })}/>
          </div>
        }
        {
          !preview &&
          <select className="col-md-12"
                  value={widget.size}
                  onChange={(e) => updateWidget(topicId, widget.id, {
                    "id": widget.id,
                    "topicId": widget.topicId,
                    "name": widget.name,
                    "type": widget.type,
                    "text": widget.text,
                    "size": e.target.value,
                    "order": widget.order
                  })}>
            <option value={1}>Heading 1</option>
            <option value={2}>Heading 2</option>
            <option value={3}>Heading 3</option>
            <option value={4}>Heading 4</option>
          </select>
        }
        {
          !preview &&
          <label className="row"/>
        }
        {
          !preview &&
          <div className="input-group mb-3">
            <div className="input-group-prepend">
                      <span className="input-group-text"
                            id="basic-addon1">Widget Name</span>
            </div>
            <input type="text" className="form-control"
                   aria-label="HeadingText"
                   aria-describedby="basic-addon1"
                   value={widget.name}
                   onChange={(e) => updateWidget(topicId, widget.id, {
                     "id": widget.id,
                     "topicId": widget.topicId,
                     "name": e.target.value,
                     "type": widget.type,
                     "text": widget.text,
                     "size": widget.size,
                     "order": widget.order
                   })}/>
          </div>
        }
        <label className="row"/>
        <label className="row"/>
        <h3>
          Preview
        </h3>
        {
          widget.size === 1 && <h1>{widget.text}</h1> ||
          widget.size === 2 && <h2>{widget.text}</h2> ||
          widget.size === 3 && <h3>{widget.text}</h3> ||
          widget.size === 4 && <h4>{widget.text}</h4>
        }
      </div>
    </div>;

const stateToPropertyMapper = (state) => ({
  widgets: state.widgets.widgets
});

const dispatchToPropertyMapper = (dispatch) => ({
  deleteWidget: (widgetId) => {
    fetch(`${WIDGETS_API_URL}/${widgetId}`, {
      method: 'DELETE'
    }).then(response => response.json())
    .then(status => dispatch({
      type: 'DELETE_WIDGET',
      widgetId: widgetId
    }))
  }
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(HeadingWidgetComponent);