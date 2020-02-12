import React from "react";
import {connect} from "react-redux";
import service from "../services/LessonService";
import {
  findLessonsForCourse,
  createLesson
} from "../actions/LessonActions";
import LessonTabsComponent from "../components/Lesson/LessonTabsComponent";

const stateToPropertyMapper = (state) => ({
  lessons: state.lessons.lessons
});

const dispatchToPropertyMapper = (dispatch) => ({
  createLesson: (moduleId, lesson) =>
      service.createLesson(moduleId, lesson)
      .then(actualLesson =>
          dispatch(createLesson(actualLesson))),
  findLessonsForCourse: (moduleId) =>
      service.findLessonForCourse(moduleId)
      .then(lessons =>
          dispatch(findLessonsForCourse(lessons))),
  updateLesson: (moduleId, lessonId, value) => {
      service.updateLesson(lessonId, {
        title: value
      })
      .then(status => {
        return service.findLessonForCourse(moduleId)
      })
      .then(lessons =>
          dispatch(findLessonsForCourse(lessons)))
  }
});

const LessonTabsContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(LessonTabsComponent);

export default LessonTabsContainer;