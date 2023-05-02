import React from "react";
import MainPage from "../../components/MainPage";
import { consoleTypes } from "../../consts/consoleTypes";

const PlayStation = () => {
  return <MainPage consoleType={consoleTypes.playStation} />;
};

export default PlayStation;
