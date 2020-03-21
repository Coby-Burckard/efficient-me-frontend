import React from "react";
import Headline from "./Headline";
import GoalsDescription from "./GoalsDescription";
import Smart from "./Smart";

const HomePage = () => {
  return (
    <div className="content-container--s">
      <Headline />
      <GoalsDescription />
      <Smart />
    </div>
  );
};

export default HomePage;
