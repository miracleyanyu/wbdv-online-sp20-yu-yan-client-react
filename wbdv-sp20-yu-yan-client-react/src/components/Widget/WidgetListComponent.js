import React from "react";
import WidgetListItem from "./WidgetListItem";
import HeadingWidgetComponent from "./HeadingWidgetComponent";
import ParagraphWidgetComponent from "./ParagraphWidgetComponent";
import ImageWidgetComponent from "./ImageWidgetComponent";
import ListWidgetComponent from "./ListWidgetComponent";

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
            this.props.widgets && this.props.widgets.sort((a, b) => a.widgetOrder - b.widgetOrder).map(widget =>
              widget.type === 'Heading' &&
              <HeadingWidgetComponent
                  preview={this.props.preview}
                  widget={widget}
                  topicId={this.props.topicId}
                  edit={() => {
                    const widgetId = widget.id;
                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`);
                    this.setState({
                      editingWidgetId: widget.id
                    })
                  }}
                  save={() => this.setState({
                    editingWidgetId: ''
                  })}
                  deleteWidget={this.props.deleteWidget}
                  updateWidget={this.props.updateWidget}
                  editing={widget.id === this.state.editingWidgetId}
                  active={widget.id === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/> ||
              widget.type === 'Paragraph' &&
              <ParagraphWidgetComponent
                  preview={this.props.preview}
                  widget={widget}
                  topicId={this.props.topicId}
                  edit={() => {
                    const widgetId = widget.id;
                    this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`);
                    this.setState({
                      editingWidgetId: widget.id
                    })
                  }}
                  save={() => this.setState({
                    editingWidgetId: ''
                  })}
                  deleteWidget={this.props.deleteWidget}
                  updateWidget={this.props.updateWidget}
                  editing={widget.id === this.state.editingWidgetId}
                  active={widget.id === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/> ||
                widget.type === 'Image' &&
                <ImageWidgetComponent
                    preview={this.props.preview}
                    widget={widget}
                    topicId={this.props.topicId}
                    edit={() => {
                      const widgetId = widget.id;
                      this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`);
                      this.setState({
                        editingWidgetId: widget.id
                      })
                    }}
                    save={() => this.setState({
                      editingWidgetId: ''
                    })}
                    deleteWidget={this.props.deleteWidget}
                    updateWidget={this.props.updateWidget}
                    editing={widget.id === this.state.editingWidgetId}
                    active={widget.id === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/> ||
                widget.type === 'List' &&
                <ListWidgetComponent
                    preview={this.props.preview}
                    widget={widget}
                    topicId={this.props.topicId}
                    edit={() => {
                      const widgetId = widget.id;
                      this.props.history.push(`/course-editor/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`);
                      this.setState({
                        editingWidgetId: widget.id
                      })
                    }}
                    save={() => this.setState({
                      editingWidgetId: ''
                    })}
                    deleteWidget={this.props.deleteWidget}
                    updateWidget={this.props.updateWidget}
                    editing={widget.id === this.state.editingWidgetId}
                    active={widget.id === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
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
                       'type': 'Heading',
                       'size': 1,
                       'style': 'Unordered'
                     })}/>
              </a>
            }
        </div>
    )
  }
}

export default WidgetListComponent;