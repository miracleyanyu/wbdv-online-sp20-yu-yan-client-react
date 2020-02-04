import React from "react";

class LessonTabsComponent extends React.Component {

  state = {
    active: false,
    tabs: ['Build', 'Pages', 'Theme', 'Store', 'Apps', 'Settings']
  };

  render() {
    return (
        this.state.tabs.map(tab =>
          <li className="nav-item">
            <a className="nav-link bg-dark text-white-50 font-weight-bold wbdv-page-tab"
               href="#">
              {
                tab
              }
            </a>
          </li>
        )
    )
  }
}

export default LessonTabsComponent;