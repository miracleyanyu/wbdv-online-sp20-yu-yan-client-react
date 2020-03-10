import {LESSONS_TOPICS_API_URL} from "../common/constants";

export const findTopicsForLesson = (lessonId) =>
    fetch(LESSONS_TOPICS_API_URL(lessonId))
    .then(response => response.json());

export const createTopic = (lessonId, topic) =>
    fetch(LESSONS_TOPICS_API_URL(lessonId), {
      method: 'POST',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`http://cs5610-sp20-yyan-a6-server.herokuapp.com/api/topics/${topicId}`, {
      method: 'DELETE'
    })
    .then(response => response.json());

export const updateTopic = (topicId, topic) =>
    fetch(`http://cs5610-sp20-yyan-a6-server.herokuapp.com/api/topics/${topicId}`, {
      method: 'PUT',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export default {
  findTopicsForLesson, createTopic, deleteTopic, updateTopic
}