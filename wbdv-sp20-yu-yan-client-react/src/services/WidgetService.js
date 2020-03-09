import {TOPICS_WIDGETS_API_URL} from "../common/constants";

export const findWidgetsForTopic = (topicId) =>
    fetch(TOPICS_WIDGETS_API_URL(topicId))
      .then(response => response.json());

export const findWidgetById = (widgetId) =>
    fetch(`http://localhost:8080/api/widgets/${widgetId}`)
    .then(response => response.json());

export const createWidget = (topicId, widget) =>
    fetch(TOPICS_WIDGETS_API_URL(topicId), {
      method: 'POST',
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const deleteWidget = (widgetId) =>
    fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
      method: 'DELETE'
    })
    .then(response => response.json());

export const updateWidget = (widgetId, widget) =>
    fetch(`http://localhost:8080/api/widgets/${widgetId}`, {
      method: 'PUT',
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export default {
  findWidgetsForTopic, createWidget, deleteWidget, updateWidget
}