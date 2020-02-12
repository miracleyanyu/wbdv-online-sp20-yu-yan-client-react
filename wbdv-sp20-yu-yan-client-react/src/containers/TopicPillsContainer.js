import React from "react";
import {connect} from "react-redux";
import service from "../services/TopicService";
import {
  findTopicsForLesson,
  createTopic
} from "../actions/TopicActions";
import TopicPillsComponent from "../components/Topic/TopicPillsComponent";

const stateToPropertyMapper = (state) => ({
  topics: state.topics.topics
});

const dispatchToPropertyMapper = (dispatch) => ({
  createTopic: (lessonId, topic) =>
      service.createTopic(lessonId, topic)
      .then(actualTopic =>
          dispatch(createTopic(actualTopic))),
  findTopicsForCourse: (lessonId) =>
      service.findTopicForCourse(lessonId)
      .then(topics =>
          dispatch(findTopicsForLesson(topics))),
  updateTopic: (lessonId, topicId, value) => {
    service.updateTopic(topicId, {
      title: value
    })
    .then(status => {
      return service.findTopicForCourse(lessonId)
    })
    .then(topics =>
        dispatch(findTopicsForLesson(topics)))
  }
});

const TopicPillsContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(TopicPillsComponent);

export default TopicPillsContainer;