import React from "react";
import {connect} from "react-redux"
import {WIDGETS_API_URL} from "../../common/constants";
import {deleteWidget} from "../../services/WidgetService";
import HeadingWidgetComponent from "./HeadingWidgetComponent";

const WidgetListItem = ({widget, topicId, edit, save, refresh, editing, deleteWidget, updateWidget, changeType, active}) =>
    <HeadingWidgetComponent/>;

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
)(WidgetListItem);