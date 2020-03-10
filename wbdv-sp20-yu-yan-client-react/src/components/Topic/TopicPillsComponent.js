import React from "react";
import TopicPillsItem from "./TopicPillsItem";

class TopicPillsComponent extends React.Component {

  constructor(props) {
    super(props)
  };

  state = {
    activeTopicId: this.props.topicId,
    editingTopicId: ''
  };

  componentDidMount() {
    this.props.findTopicsForCourse(this.props.lessonId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.lessonId !== prevProps.lessonId) {
      this.props.findTopicsForCourse(this.props.lessonId)
    }
  }

  render() {
    return (
        <ul className="nav nav-pills nav-fill col-md-8 text-left align-middle">
          {
            this.props.topics && this.props.topics.map(topic =>
                <TopicPillsItem
                    topic={topic}
                    lessonId={this.props.lessonId}
                    refresh={() => {
                      const topicId = topic.id;
                      this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topicId}`);
                      window.location.reload();
                    }}
                    edit={() => {
                      const topicId = topic.id;
                      this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topicId}`);
                      this.setState({
                        editingTopicId: topic.id
                      })
                    }}
                    save={() => this.setState({
                      editingTopicId: ''
                    })}
                    deleteTopic={this.props.deleteTopic}
                    updateTopic={this.props.updateTopic}
                    editing={topic.id === this.state.editingTopicId}
                    active={topic.id === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
            )
          }
          {
            window.location.pathname.indexOf('lesson') !== -1 &&
            <i className="far fa-plus-square fa-2x"
               style={{color: "#000000", margin: "35px"}}
               onClick={() => this.props.createTopic(this.props.lessonId, {
                 'title': 'New Topic'
               })}/>
          }
        </ul>
    )
  }
}

export default TopicPillsComponent;