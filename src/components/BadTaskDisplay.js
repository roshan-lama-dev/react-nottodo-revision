import React from "react";
import { Table, Button } from "react-bootstrap";

// why do we desructure the props
export const BadTaskDisplay = ({ badListArray, swithBack }) => {
  return (
    <div>
      {" "}
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.N</th>
              <th>Task Entered</th>
              <th>Hours Entered</th>
              <th>Move To Do</th>
              <th>Delete Task</th>
            </tr>
          </thead>
          <tbody>
            {badListArray.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.task}</td>
                  <td>{item.hour}</td>
                  <td>
                    <Button onClick={() => swithBack(item._id)}>
                      <i className="fa-solid fa-arrow-left"></i>
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
    </div>
  );
};
