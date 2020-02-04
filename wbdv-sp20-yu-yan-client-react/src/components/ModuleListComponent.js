import React from "react";

class ModuleListComponent extends React.Component {

  state = {
    active: false,
    modules: ['Module 1 - JQuery', 'Module 2 - React', 'Module 3 - Redux',
           'Module 4 - Native', 'Module 5 - Anguler', 'Module 6 - Node']
  };

  render() {
    return (
        this.state.modules.map(module =>
            <li className="nav-item"
                style={{margin: '10px', padding: '10px'}}>
              <button type="button"
                      className="btn btn-secondary btn-lg col-md-12">
                <div className="container">
                  <div className="row">
                    <i className="offset-1 col col-8 align-middle">
                      {
                        module
                      }
                    </i>
                    <div className="col">
                      <i className="col-md-auto fas fa-times"/>
                    </div>
                  </div>
                </div>
              </button>
            </li>
        )
    )
  }
}

export default ModuleListComponent;