import {LESSONS_TOPICS_API_URL} from "../common/constants";

export const findTopicForCourse = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/lessons/${lessonId}/topics`)
    .then(response => response.json());

export const createTopic = (topicId, topic) =>
    fetch(LESSONS_TOPICS_API_URL(topicId), {
      method: 'POST',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const deleteTopic = (topicId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/topics/${topicId}`, {
      method: 'DELETE'
    })
    .then(response => response.json());

export const updateTopic = (topicId, topic) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/topics/${topicId}`, {
      method: 'PUT',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export default {
  findTopicForCourse, createTopic, deleteTopic, updateTopic
}