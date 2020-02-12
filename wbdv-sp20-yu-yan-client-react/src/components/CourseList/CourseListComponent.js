import CourseManagerNavComponent from "./CourseManagerNavComponent";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseEditorComponent from "../CourseEditor/CourseEditorComponent";
import React from "react";

const CourseListComponent =
    ({
        state,
        toggle,
        updateFormState,
        addCourse,
        layout,
        activateCourseEditor,
        editCourse,
        deleteCourse,
        courses
    }) =>

  <div>
    {
      <div>
        <CourseManagerNavComponent
            toggle={toggle}
            updateFormState={updateFormState}
            addCourse={addCourse}
            state={state}/>
        {
          layout === "table" &&
          <div className="bg-light">
            <div className="container-fluid">
              <div className="col-8 mx-auto">
                {
                  layout === "table" &&
                  <CourseTableComponent
                      activateCourseEditor={activateCourseEditor}
                      editCourse={editCourse}
                      deleteCourse={deleteCourse}
                      courses={courses}/>
                }
              </div>
            </div>
          </div>
        }
        {
          layout === "grid" &&
          <div className="bg-light">
            <div className="container-fluid">
              <div className="col-8 mx-auto">
                <table className="table table-hover">
                  <tbody>
                  {
                    layout === "grid" &&
                    <CourseGridComponent
                        activateCourseEditor={activateCourseEditor}
                        editCourse={editCourse}
                        deleteCourse={deleteCourse}
                        courses={courses}/>
                  }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
      </div>
    }
  </div>;

export default CourseListComponent;