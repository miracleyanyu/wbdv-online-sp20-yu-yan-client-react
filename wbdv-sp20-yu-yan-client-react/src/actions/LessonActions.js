export const FIND_LESSONS_FOR_COURSE = "FIND_LESSONS_FOR_COURSE";

export const findLessonsForCourse = (lessons) => ({
  lessons: lessons,
  type: FIND_LESSONS_FOR_COURSE
});

export const CREATE_LESSON = "CREATE_LESSON";

export const createLesson = (lesson) => ({
  type: CREATE_LESSON,
  lesson: lesson
});

export const editLesson = () => ({
  type: "EDIT_LESSON"
});