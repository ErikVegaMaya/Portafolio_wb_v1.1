import React from "react";

const ProgresBar = ({ bgColor, progress, height }: any) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 0,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgColor,
    borderRadius: 30,
    textAlign: "center" as "center",
  };

  const progresstext = {
    padding: 10,
    color: "white",
    fontWeight: 500,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgresBar;
