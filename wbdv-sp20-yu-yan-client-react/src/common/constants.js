export const COURSES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/yuyan/courses"
export const MODULES_API_URL = "https://wbdv-generic-server.herokuapp.com/api/yuyan/modules"
export const LESSONS_API_URL = "https://wbdv-generic-server.herokuapp.com/api/yuyan/lessons"
export const TOPICS_API_URL = "http://cs5610-sp20-yyan-a6-server.herokuapp.com/api/topics"
export const WIDGETS_API_URL = "http://cs5610-sp20-yyan-a6-server.herokuapp.com/api/widgets"
export const COURSES_MODULES_API_URL = (courseId) => `https://wbdv-generic-server.herokuapp.com/api/yuyan/courses/${courseId}/modules`;
export const MODULES_LESSONS_API_URL = (moduleId) => `https://wbdv-generic-server.herokuapp.com/api/yuyan/modules/${moduleId}/lessons`;
export const LESSONS_TOPICS_API_URL = (lessonId) => `http://cs5610-sp20-yyan-a6-server.herokuapp.com/api/lessons/${lessonId}/topics`;
export const TOPICS_WIDGETS_API_URL = (topicId) => `http://cs5610-sp20-yyan-a6-server.herokuapp.com/api/topics/${topicId}/widgets`;
