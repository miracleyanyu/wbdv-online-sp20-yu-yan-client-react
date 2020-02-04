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
      active: !prevState.active
    }))
  };

  editCourse = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  };

  saveCourse = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  };

  showInputField = () => {
    this.setState({
      input: true,
      active: true
    })
  };

  saveCourse = () => {
    this.setState(prevState => ({
      active: false,
      input: false
    }))
  };

  updateForm = (e) => {};

  render() {
    return (
        <tr className={`${this.state.active?'active':''}`}
            onClick={() => this.activeCourse()}>
          <th scope="row"
              style={{width: '15%'}}/>
          {
            !this.state.input &&
            <td style={{width: '25%'}}>
              {
                this.props.course.title
              }
            </td>
          }
          {
            this.state.input &&
            <td style={{width: '25%'}}>
              <input value={this.props.course.title}
                     onChange={(e) => this.props.editCourse(this.props.course, e.target.value)}/>
            </td>
          }
          <td className="text-center"
              style={{width: '15%'}}>
            me
          </td>
          <td className="text-center"
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
                <button onClick={() => this.showInputField()}>Edit</button>
                <button onClick={(event) => this.props.deleteCourse(
                    this.props.course)}>Delete</button>
              </span>
            </td>
          }
          {
            this.state.input &&
            <td>
              <span>
                <button onClick={(event) => this.saveCourse()}>Save</button>
              </span>
            </td>
          }
        </tr>
    )
  }
}

export default CourseRowComponentStateful;