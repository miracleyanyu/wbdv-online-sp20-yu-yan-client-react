class CourseService {

  createCourse = (course) => {
    console.log(course);
    return fetch("https://wbdv-generic-server.herokuapp.com/api/yuyan/courses", {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  };

  findAllCourses = () => {
    return fetch("https://wbdv-generic-server.herokuapp.com/api/yuyan/courses")
            .then(response => response.json())
  };

  findCourseById = (courseId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/courses/${courseId}`)
    .then(response => response.json())
  };

  deleteCourse = (courseId) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/courses/${courseId}`, {
      method: 'DELETE'
    }).then(response => response.json())
  };

  editCourse = (courseId, course) => {
    return fetch(`https://wbdv-generic-server.herokuapp.com/api/yuyan/courses/${courseId}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
  }
}

export default CourseService;