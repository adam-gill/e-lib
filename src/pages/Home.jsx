import React from "react";
import Discounted from "../components/Discounted";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import Explore from "../components/Explore";

const Home = () => {
  return (
    <div>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </div>
  );
};

export default Home;
