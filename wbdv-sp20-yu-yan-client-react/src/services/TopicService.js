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
    fetch(`http://localhost:8080/api/lessons/${topicId}`, {
      method: 'DELETE'
    })
    .then(response => response.json());

export const updateTopic = (topicId, topic) =>
    fetch(`http://localhost:8080/api/lessons/${topicId}`, {
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