import React from "react";

function PreLoader({ load }: any) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

export default PreLoader;
