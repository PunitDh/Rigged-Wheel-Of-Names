import React, { useRef } from "react";
import styled from "@emotion/styled";

const WheelContainer = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "80vh",
});

const wheelRadius = 300;

const SpinnerWheel = styled.div({
  border: "1px solid black",
  borderRadius: "50%",
  width: `${wheelRadius * 2}px`,
  height: `${wheelRadius * 2}px`,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function Wheel({ names }) {
  return (
    <WheelContainer>
      <SpinnerWheel>index</SpinnerWheel>
    </WheelContainer>
  );
}

export default Wheel;
