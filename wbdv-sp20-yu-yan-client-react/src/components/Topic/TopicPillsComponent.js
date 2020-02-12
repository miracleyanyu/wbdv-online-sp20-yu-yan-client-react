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
                    edit={() => {
                      const topicId = topic._id;
                      console.log(topicId);
                      this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`);
                      this.setState({
                        editingTopicId: topic._id
                      })
                    }}
                    save={() => this.setState({
                      editingTopicId: ''
                    })}
                    deleteTopic={this.props.deleteTopic}
                    updateTopic={this.props.updateTopic}
                    editing={topic._id === this.state.editingTopicId}
                    active={topic._id === this.state.activeTopicId}/>
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