import React from "react";
import LessonTabItem from "./LessonTabItem";

class LessonTabsComponent extends React.Component {

  constructor(props) {
    super(props)
  };

  state = {
    activeLessonId: this.props.lessonId,
    editingLessonId: ''
  };

  componentDidMount() {
    this.props.findLessonsForCourse(this.props.moduleId)
  }

  render() {
    return (
        <ul className="nav nav-pills nav-fill col-md-8 text-left align-middle">
          {
            this.props.lessons && this.props.lessons.map(lesson =>
                <LessonTabItem
                    lesson={lesson}
                    moduleId={this.props.moduleId}
                    edit={() => {
                      const lessonId = lesson._id;
                      this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}`);
                      this.setState({
                        editingLessonId: lesson._id
                      })
                    }}
                    save={() => this.setState({
                      editingLessonId: ''
                    })}
                    deleteLesson={this.props.deleteLesson}
                    updateLesson={this.props.updateLesson}
                    editing={lesson._id === this.state.editingLessonId}
                    active={lesson._id === this.state.activeLessonId}/>
            )
          }
          {
            this.props.lessons &&
            <i className="fas fa-plus fa-2x col-md-auto"
               style={{color: "#ffffff", margin: "20px"}}
               onClick={() => this.props.createLesson(this.props.moduleId, {
                 'title': 'New Lesson'
               })}/>
          }
        </ul>
    )
  }
}

export default LessonTabsComponent;