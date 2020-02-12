import {CREATE_LESSON, FIND_LESSONS_FOR_COURSE} from "../actions/LessonActions";

const lessonReducer = (
    state = {
      lessons: []
    },
    action) => {
  switch(action.type) {
    case CREATE_LESSON:
      return {
        lessons: [
          ...state.lessons,
          action.lesson
        ]
      };
    case FIND_LESSONS_FOR_COURSE:
      return {
        lessons: action.lessons
      };
    case "DELETE_LESSON":
      return {
        lessons: state.lessons.filter(lesson =>
            lesson._id !== action.lessonId
        )
      };
    case "UPDATE_LESSON":
      return {
        lessons: action.lessons
      };
    default:
      return state
  }
};

export default lessonReducer;