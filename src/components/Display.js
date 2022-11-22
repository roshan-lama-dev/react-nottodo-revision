import React from "react";
import { BadTaskDisplay } from "./BadTaskDisplay";
import { GoodTaskDisplay } from "./GoodTaskDisplay";

export const Display = ({
  fromData,
  swithTask,
  swithBack,
  onChangeListener,
}) => {
  const entryListArray = fromData.filter((item) => item.type === "entry");
  const badListArray = fromData.filter((item) => item.type === "bad");
  return (
    <div>
      <div className="row mt-5">
        <div className="col">
          {" "}
          <h1>Good Task </h1>
          <GoodTaskDisplay
            fromData={entryListArray}
            swithTask={swithTask}
            onChangeListener={onChangeListener}
            // entryListArray={entryListArray}
          />
        </div>

        <div className="col">
          <h1>Bad Task </h1>{" "}
          <BadTaskDisplay
            badListArray={badListArray}
            swithBack={swithBack}
            onChangeListener={onChangeListener}
          />
        </div>
      </div>
    </div>
  );
};
