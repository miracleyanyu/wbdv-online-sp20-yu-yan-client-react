export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC";

export const findWidgetsForTopic = (widgets) => ({
  widgets: widgets,
  type: FIND_WIDGETS_FOR_TOPIC
});

export const CREATE_WIDGET = "CREATE_WIDGET";

export const createWidget = (widget) => ({
  type: CREATE_WIDGET,
  widget: widget
});

export const editWidget = () => ({
  type: "EDIT_WIDGET"
});