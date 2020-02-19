import React from "react";
import WidgetListItem from "./WidgetListItem";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";

class WidgetListComponent extends React.Component {

  constructor(props) {
    super(props)
  };

  state = {
    activeWidgetId: this.props.widgetId,
    editingWidgetId: ''
  };

  componentDidMount() {
    this.props.findWidgetsForTopic(this.props.topicId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.topicId !== prevProps.topicId) {
      this.props.findWidgetsForTopic(this.props.topicId)
    }
  }

  render() {
    return (
        <div className="row">
          {
            this.props.widgets && this.props.widgets.map(widget =>
              widget.type === 'Heading' &&
              <HeadingWidgetComponent
                  widget={widget}
                  topicId={this.props.topicId}
                  edit={() => {
                    const widgetId = widget._id;
                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`);
                    this.setState({
                      editingWidgetId: widget._id
                    })
                  }}
                  save={() => this.setState({
                    editingWidgetId: ''
                  })}
                  changeType={() => {
                    const newType = widget.type === 'Heading' ? 'Paragraph' : 'Heading';
                    widget.type = newType.toString();
                  }}
                  deleteWidget={this.props.deleteWidget}
                  updateWidget={this.props.updateWidget}
                  editing={widget._id === this.state.editingWidgetId}
                  active={widget._id === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/> ||
              widget.type === 'Paragraph' &&
              <ParagraphWidgetComponent
                  widget={widget}
                  topicId={this.props.topicId}
                  edit={() => {
                    const widgetId = widget._id;
                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`);
                    this.setState({
                      editingWidgetId: widget._id
                    })
                  }}
                  save={() => this.setState({
                    editingWidgetId: ''
                  })}
                  changeType={() => {
                    const newType = widget.type === 'Heading' ? 'Paragraph' : 'Heading';
                    widget.type = newType.toString();
                  }}
                  deleteWidget={this.props.deleteWidget}
                  updateWidget={this.props.updateWidget}
                  editing={widget._id === this.state.editingWidgetId}
                  active={widget._id === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>

                // <WidgetListItem
                //     widget={widget}
                //     topicId={this.props.topicId}
                //     edit={() => {
                //       const widgetId = widget._id;
                //       this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`);
                //       this.setState({
                //         editingWidgetId: widget._id
                //       })
                //     }}
                //     save={() => this.setState({
                //       editingWidgetId: ''
                //     })}
                //     changeType={() => {
                //       const newType = widget.type === 'Heading' ? 'Paragraph' : 'Heading';
                //       widget.type = newType.toString();
                //     }}
                //     deleteWidget={this.props.deleteWidget}
                //     updateWidget={this.props.updateWidget}
                //     editing={widget._id === this.state.editingWidgetId}
                //     active={widget._id === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
            )
          }
          {
              window.location.pathname.indexOf('topic') !== -1 &&
              <a href="#"
                 style={{margin: "50px"}}>
                  <i className="fas fa-plus-circle fa-3x"
                     style={{color: '#F51B00'}}
                     onClick={() => this.props.createWidget(this.props.topicId, {
                       'name': 'New Widget',
                       'type': 'Heading'
                     })}/>
              </a>
            }
        </div>
    )
  }
}

export default WidgetListComponent;