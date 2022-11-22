import React, { useState } from "react";
import { randomStrGenerator } from "../utilities/utilis";

export const FormField = ({ addTask }) => {
  // we are using Usestate to store the value from onchange to the state memory. So the vlaue doesn't disapper when the compenet re-renders.

  //   and initial vlaue for the use state is given as an object with key and value pair. so that we know

  //   {} used in the useState enters the data as a object. However if we use [] that data is send as an array
  const [captureInput, setCaptureInput] = useState({ type: "entry" });

  const handleOnClick = (e) => {
    e.preventDefault();
    const _id = randomStrGenerator();
    addTask({ ...captureInput, _id });
  };

  const onChangeListener = (e) => {
    // destructuring is spreading the properties of e.target and capturing them
    const { value, name } = e.target;

    // addind the input data into the useState.
    setCaptureInput({
      ...captureInput,
      [name]: value,
    });

    console.log(captureInput);
  };

  return (
    <div>
      <form action="" onSubmit={handleOnClick}>
        <div className="row mt-5">
          <div className="col-8">
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Enter the task"
                //   name="task"
                name="task"
                onChange={onChangeListener}
              />
            </form>
          </div>
          <div className="col-2">
            <form>
              <input
                name="hour"
                className="form-control"
                type="number"
                placeholder="Enter the hours"
                //   name="hour"
                onChange={onChangeListener}
              />
            </form>
          </div>
          <div className="col-2">
            <button className="btn btn-primary" type="submit">
              Enter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
