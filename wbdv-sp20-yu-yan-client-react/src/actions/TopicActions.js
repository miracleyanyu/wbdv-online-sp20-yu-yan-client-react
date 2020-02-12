export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON";

export const findTopicsForLesson = (topics) => ({
  topics: topics,
  type: FIND_TOPICS_FOR_LESSON
});

export const CREATE_TOPIC = "CREATE_TOPIC";

export const createTopic = (topic) => ({
  type: CREATE_TOPIC,
  topic: topic
});

export const editTopic = () => ({
  type: "EDIT_TOPIC"
});