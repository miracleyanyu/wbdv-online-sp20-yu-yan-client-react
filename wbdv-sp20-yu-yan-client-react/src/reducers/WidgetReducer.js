import {CREATE_WIDGET, FIND_WIDGETS_FOR_TOPIC} from "../actions/WidgetActions";

const widgetReducer = (
    state = {
      widgets: []
    },
    action) => {
  switch(action.type) {
    case CREATE_WIDGET:
      return {
        widgets: [
          ...state.widgets,
          action.widget
        ]
      };
    case FIND_WIDGETS_FOR_TOPIC:
      return {
        widgets: action.widgets
      };
    case "DELETE_WIDGET":
      return {
        widgets: state.widgets.filter(widget =>
            widget.id !== action.widgetId
        )
      };
    case "UPDATE_WIDGET":
      return {
        widgets: action.widgets
      };
    default:
      return state
  }
};

export default widgetReducer;