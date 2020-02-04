import React from "react";

class CourseManagerNavComponentStateful extends React.Component {

  constructor(props) {
    super(props)
  };

  render() {
    return (
        <div>
          {
            this.props.state.layout ==='table' &&
            <nav className="navbar navbar-expand-lg bg-light sticky-top"
                 style={{margin: 0, padding: 0}}>
              <div className="container-fluid">
                <div className="col-8 mx-auto">
                  <table className="table table-hover"
                         style={{padding: '0', margin: '0'}}>
                    <thead>
                    <tr>
                      <th style={{width: '15%'}}/>
                      <th scope="col"
                          className="font-weight-bold"
                          style={{color: '#929292', width: '25%', fontSize: '20px'}}>Title
                      </th>
                      <th scope="col"
                          className="text-center d-none d-lg-table-cell"
                          style={{color: '#929292', width: '15%'}}>Owned By
                      </th>
                      <th scope="col"
                          className="text-center d-none d-lg-table-cell"
                          style={{color: '#929292', width: '15%'}}>Last modified by me
                      </th>
                      <th style={{width: '10%'}}
                          className="text-center"
                          scope="col">
                        <a href="#"
                           onClick={() => this.props.toggle()}>
                          <i className="fas fa-grip-horizontal col col-1"/>
                        </a>
                      </th>
                      <th style={{width: '10%'}}
                          className="text-center"
                          scope="col">
                        <a href="#">
                          <i className="fas fa-sort-alpha-down"/>
                        </a>
                      </th>
                      <th/>
                    </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </nav>
          }
          {
            this.props.state.layout ==='grid' &&
            <nav className="navbar navbar-expand-lg bg-light sticky-top"
                 style={{margin: 0, padding: 0}}>
              <div className="container-fluid">
                <div className="col-8 mx-auto">
                  <table className="table table-hover"
                         style={{padding: '0', margin: '0'}}>
                    <thead>
                    <tr>
                      <th style={{width: '10%'}}/>
                      <th scope="col"
                          className="font-weight-bold"
                          style={{color: '#929292', width: '30%', fontSize: '20px'}}>Recent Documents
                      </th>
                      <th scope="col"
                          className="text-center d-none d-lg-table-cell"
                          style={{color: '#929292', width: '15%'}}>Owned By Me
                      </th>
                      <th scope="col"
                          className="text-center d-none d-lg-table-cell"
                          style={{color: '#929292', width: '15%'}}>
                      </th>
                      <th style={{width: '10%'}}
                          className="text-center"
                          scope="col">
                        <a href="#"
                           onClick={() => this.props.toggle()}>
                          <i className="fas fa-list col col-1"/>
                        </a>
                      </th>
                      <th style={{width: '10%'}}
                          className="text-center"
                          scope="col">
                        <a href="#">
                          <i className="fas fa-sort-alpha-down"/>
                        </a>
                      </th>
                      <th/>
                    </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </nav>
          }
        </div>
    )
  }
}

export default CourseManagerNavComponentStateful;