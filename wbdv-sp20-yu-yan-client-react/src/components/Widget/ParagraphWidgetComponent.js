import React from "react";
import {WIDGETS_API_URL} from "../../common/constants";
import {connect} from "react-redux";

const ParagraphWidgetComponent = ({widget, topicId, preview, edit, save, refresh, editing, deleteWidget, updateWidget, changeType, active}) =>
    <div className="container-fluid"
         style={{padding: "10px"}}>
      <div className="col col-10 offset-1 border border-light bg-light">
        {
          !preview &&
        <form className="form-inline">
          <h3 className="form-check-label bg-light col-md-auto font-weight-bold">Paragraph
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
                            id="basic-addon1">Paragraph Text</span>
            </div>
            <input type="text" className="form-control"
                   aria-label="HeadingText"
                   aria-describedby="basic-addon1"
                   placeholder="Paragraph Text"
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
        {
          !preview &&
          <label className="row"/>
        }
        {
          !preview &&
          <label className="row"/>
        }
        {
          !preview &&
          <h3>
            Preview
          </h3>
        }
        <h4>
          {widget.text}
        </h4>
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
)(ParagraphWidgetComponent);