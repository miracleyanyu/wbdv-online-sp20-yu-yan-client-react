import {MODULES_LESSONS_API_URL} from "../common/constants";

export const findLessonForCourse = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/modules/${moduleId}/lessons`)
    .then(response => response.json());

export const createLesson = (moduleId, Lesson) =>
    fetch(MODULES_LESSONS_API_URL(moduleId), {
      method: 'POST',
      body: JSON.stringify(Lesson),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const deleteLesson = (lessonId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/lessons/${lessonId}`, {
      method: 'DELETE'
    })
    .then(response => response.json());

export const updateLesson = (lessonId, lesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/lessons/${lessonId}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export default {
  findLessonForCourse, createLesson, deleteLesson, updateLesson
}