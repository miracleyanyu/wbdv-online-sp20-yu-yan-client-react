import React from "react";

class CourseRowComponentStateful extends React.Component {

  constructor(props) {
    super(props)
  };

  state = {
    active: false,
    input: false
  };

  activeCourse = () => {
    this.setState(prevState => ({
      active: !prevState.input? !prevState.active:false
    }))
  };

  editCourse = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  };

  showInputField = () => {
    this.setState({
      input: true,
      active: false
    })
  };

  saveCourse = () => {
    this.setState(prevState => ({
      active: false,
      input: false
    }))
  };

  render() {
    return (
        <tr className={`${this.state.active?'bg-secondary':''}`}
            onClick={() => this.activeCourse()}>
          <th scope="row"
              style={{width: '15%'}}
              className="text-right">
            <i className="far fa-file-alt col-md-auto text-primary wbdv-row wbdv-icon"/>
          </th>
          {
            !this.state.input &&
            <td style={{width: '25%'}}>
              <a href="#"
                 className="font-weight-bold"
                 onClick={() => this.props.activateCourseEditor(this.props.course)}>
                {
                  this.props.course.title
                }
              </a>
            </td>
          }
          {
            this.state.input &&
            <td style={{width: '25%'}}>
              <input value={this.props.course.title}
                     onChange={(e) => this.props.editCourse(this.props.course, e.target.value)}/>
            </td>
          }
          <td className="text-center  d-none d-lg-table-cell"
              style={{width: '15%'}}>
            me
          </td>
          <td className="text-center  d-none d-lg-table-cell"
              style={{width: '15%'}}>
            6:45 PM
          </td>
          <td style={{width: '10%'}}/>
          <td style={{width: '10%'}}/>
          {
            !this.state.active &&
            <td/>
          }
          {
            this.state.active && !this.state.input &&
            <td>
              <span>
                <i className="fas fa-pencil-alt col-md-auto"
                   onClick={() => this.showInputField()}/>
                <i className="far fa-trash-alt col-md-auto"
                   onClick={(event) => this.props.deleteCourse(
                    this.props.course)}/>
              </span>
            </td>
          }
          {
            this.state.input &&
            <td>
              <span>
                <i className="fas fa-save"
                   onClick={(event) => this.saveCourse()}/>
              </span>
            </td>
          }
        </tr>
    )
  }
}

export default CourseRowComponentStateful;