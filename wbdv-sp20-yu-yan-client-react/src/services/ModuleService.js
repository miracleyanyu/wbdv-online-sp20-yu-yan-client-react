import {COURSES_MODULES_API_URL} from "../common/constants";

export const findModulesForCourse = (courseId) =>
    fetch(COURSES_MODULES_API_URL(courseId))
      .then(response => response.json());

export const createModule = (courseId, module) =>
    fetch(COURSES_MODULES_API_URL(courseId), {
      method: 'POST',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const deleteModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/modules/${moduleId}`, {
      method: 'DELETE'
    })
    .then(response => response.json());

export const updateModule = (moduleId, module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/modules/${moduleId}`, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json());

export default {
  findModulesForCourse, createModule, deleteModule, updateModule
}