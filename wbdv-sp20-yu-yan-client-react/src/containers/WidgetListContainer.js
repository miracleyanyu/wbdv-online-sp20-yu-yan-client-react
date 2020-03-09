import React from "react";
import {connect} from "react-redux";
import service from "../services/WidgetService";
import {
  findWidgetsForTopic,
  createWidget
} from "../actions/WidgetActions";
import WidgetListComponent from "../components/Widget/WidgetListComponent";

const stateToPropertyMapper = (state) => ({
  widgets: state.widgets.widgets
});

const dispatchToPropertyMapper = (dispatch) => ({
  createWidget: (topicId, widget) =>
      service.createWidget(topicId, widget)
      .then(actualWidget =>
          dispatch(createWidget(actualWidget))),
  findWidgetsForTopic: (topicId) =>
      service.findWidgetsForTopic(topicId)
      .then(widgets =>
          dispatch(findWidgetsForTopic(widgets))),
  updateWidget: (topicId, widgetId, widget) => {
    // console.log(widget);
    service.updateWidget(widgetId, widget)
    .then(status => {
      return service.findWidgetsForTopic(topicId)
    })
    .then(widgets =>
        dispatch(findWidgetsForTopic(widgets)))
  }
});

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetListComponent);

export default WidgetListContainer;