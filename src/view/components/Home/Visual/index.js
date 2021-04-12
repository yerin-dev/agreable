import React from "react";
import styled from "styled-components";

function Visual() {
  return <Container></Container>;
}

const Container = styled.div`
  height: 560px;
  background: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  padding: 0 12px;
  box-sizing: border-box;
`;

export default Visual;
