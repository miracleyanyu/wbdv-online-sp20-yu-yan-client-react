import React from "react";
import ModuleListItem from "./ModuleListItem";

class ModuleListComponent extends React.Component {

  constructor(props) {
    super(props)
  };

  state = {
    activeModuleId: this.props.moduleId,
    editingModuleId: ''
  };

  componentDidMount() {
    this.props.findModulesForCourse(this.props.courseId)
  }

  render() {
    return (
        <div className="text-center">
          {
            this.props.modules && this.props.modules.map(module =>
                <ModuleListItem
                    module={module}
                    courseId={this.props.courseId}
                    refresh={() => {
                      const moduleId = module._id;
                      this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`);
                      window.location.reload();
                      this.setState({
                        activeModuleId: module._id
                      })
                    }}
                    edit={() => {
                      const moduleId = module._id;
                      this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`);
                      this.setState({
                        editingModuleId: module._id
                      })
                    }}
                    select={() => {
                      const moduleId = module._id
                      this.props.history.push(`/course-editor/${this.props.courseId}/module/${moduleId}`);
                      this.setState({
                        activeModuleId: module._id
                      })
                    }}
                    save={() => this.setState({
                      editingModuleId: ''
                    })}
                    deleteModule={this.props.deleteModule}
                    updateModule={this.props.updateModule}
                    editing={module._id === this.state.editingModuleId}
                    active={module._id === window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)}/>
            )
          }
          <i className="fas fa-plus fa-2x"
             style={{color: "#ffffff", margin: "10px"}}
             onClick={() => this.props.createModule(this.props.courseId, {
               'title': 'New Module'
             })}/>
        </div>
    )
  }
}

export default ModuleListComponent;