import React from "react";
import { Table, Button } from "react-bootstrap";

// try using the

export const GoodTaskDisplay = ({ fromData, swithTask, onChangeListener }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>S.N</th>
            <th>Task Entered</th>
            <th>Hours Entered</th>
            <th>Move To Not To Do</th>
            <th>Delete Task</th>
          </tr>
        </thead>
        <tbody>
          {/* what is this called  */}
          {fromData.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>
                  {" "}
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={item._id}
                    onChange={onChangeListener}
                  ></input>{" "}
                </td>
                <td> {index + 1}</td>
                <td>{item.task}</td>
                <td>{item.hour}</td>
                <td>
                  <Button onClick={() => swithTask(item._id)}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Button>
                </td>
                <td>
                  <Button className="btn-danger">
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
