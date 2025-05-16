import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNone from "../components/HeaderNone";

function NoneLayout() {
  return (
    <>
      <HeaderNone />
      <Outlet />
    </>
  );
}

export default NoneLayout;
