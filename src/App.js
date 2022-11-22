import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { FormField } from "./components/FormField";
import { Title } from "./components/Title";

function App() {
  const [fromData, setFormData] = useState([]);

  const addTask = (data) => {
    // However, while we are adding the data into the useState we are adding it as an array

    // how are we spreading and entering the data into the useState
    setFormData([...fromData, data]);

    console.log(fromData);
  };

  // if you pass the type from the onclick this function can be made dynmaic

  const swithTask = (_id) => {
    const tempArg = fromData.map((item, index) => {
      if (item._id === _id) {
        // eslint-disable-next-line no-unused-expressions
        item.type = "bad";
        console.log(item);
      }
      // why are we returning item
      return item;
    });
    setFormData(tempArg);
    console.log(tempArg);
  };

  const swithBack = (_id) => {
    const tempArg = fromData.map((item, index) => {
      if (item._id === _id) {
        item.type = "entry";
      }
      return item;
    });
    setFormData(tempArg);
  };

  const onChangeListener = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    checked ? console.log(true) : console.log(false);
  };
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container">
          <Title />

          <FormField addTask={addTask} />
          <Display
            fromData={fromData}
            swithTask={swithTask}
            swithBack={swithBack}
            onChangeListener={onChangeListener}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
