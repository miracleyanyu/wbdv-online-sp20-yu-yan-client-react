import React from 'react'

class CourseGridCardComponentStateful extends React.Component {

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
    <div className="card"
         style={{width: '16.5rem', margin: '8px', padding: '10px'}}>
      <img src="https://i.ibb.co/SxYsFKM/Screen-Shot-2020-02-03-at-14-38-00.png"
           className="card-img-top border"
           alt="..."/>
      {
        !this.state.input &&
        <div className="font-weight-bold"
             style={{margin: '8px', padding: '10px'}}>
          {this.props.course.title}
        </div>
      }
      {
        this.state.input &&
        <div className="font-weight-bold"
             style={{margin: '8px', padding: '10px'}}>
          <input value={this.props.course.title}
                 onChange={(e) => this.props.editCourse(this.props.course, e.target.value)}/>
        </div>
      }
      {
        !this.state.input &&
        <div className="dropdown text-right">
          <i className="fas fa-ellipsis-v"
             data-toggle="dropdown"/>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item"
               onClick={this.showInputField}>Edit</a>
            <a className="dropdown-item"
               onClick={(event) => this.props.deleteCourse(
                   this.props.course)}>Delete</a>
          </div>
        </div>
      }
      {
        this.state.input &&
        <div className="text-right">
          <span>
            <i className="fas fa-save"
               onClick={(event) => this.saveCourse()}/>
          </span>
        </div>
      }
    </div>
    )
  }
}

export default CourseGridCardComponentStateful;