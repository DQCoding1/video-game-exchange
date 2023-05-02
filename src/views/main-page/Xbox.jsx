import React from "react";
import MainPage from "../../components/MainPage";
import { consoleTypes } from "../../consts/consoleTypes";

const Xbox = () => {
  return <MainPage consoleType={consoleTypes.xbox} />;
};

export default Xbox;
