import React from "react";
import timeLine from "../Data/timeLine";
import TimeLineItem from "./TimeLineItem";
import Title from "./Title";
const TimeLine = () => {
  return (
    <div className="mx-auto px-2 flex flex-col md:flex-row justify-center my-20  ">
      <div className=" w-full md:w-7/12 ">
        <Title>Education</Title>
        {timeLine.map((item) => {
          return (
            <TimeLineItem
              title={item.title}
              stream={item.stream}
              institution={item.institution}
              duration={item.duration}
              percentage={item.percentage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
