import React from "react";
import CourseManagerNavComponentStateful from "./CourseManagerNavComponentStateful"

const CourseManagerNavComponent = ({toggle, state, updateFormState, addCourse}) =>
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <label
            className="col-form-lable col-2 text-white h4">
          Courser Manager
        </label>
        <div className="dropdown ustify-content-end">
          <button className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
            Explore
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div className="container">
          <input type="text"
                 className="form-control col col-8 font-italic d-none d-xl-block"
                 placeholder="New Course"
                 onChange={(e) => updateFormState(e)}/>
          <div className="input-group-append col col-4">
            <button
                className="btn btn-outline-success my-2 my-sm-0 d-none d-xl-block"
                type="submit"
                onClick={addCourse}>Add Course
            </button>
          </div>
        </div>
      </nav>
      <CourseManagerNavComponentStateful
        toggle={toggle}
        state={state}/>
    </div>;

export default CourseManagerNavComponent;