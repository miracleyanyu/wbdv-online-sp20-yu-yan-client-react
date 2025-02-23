import {CREATE_TOPIC, FIND_TOPICS_FOR_LESSON} from "../actions/TopicActions";

const topicReducer = (
    state = {
      topics: []
    },
    action) => {
  switch(action.type) {
    case CREATE_TOPIC:
      return {
        topics: [
          ...state.topics,
          action.topic
        ]
      };
    case FIND_TOPICS_FOR_LESSON:
      return {
        topics: action.topics
      };
    case "DELETE_TOPIC":
      return {
        topics: state.topics.filter(topic =>
            topic.id !== action.topicId
        )
      };
    case "UPDATE_TOPIC":
      return {
        topics: action.topics
      };
    default:
      return state
  }
};

export default topicReducer;