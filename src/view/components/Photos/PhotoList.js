import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";

function PhotoList({ data }) {
  return (
    <Container>
      <ul>
        {data.map((item, idx) => (
          <PhotoCard item={item} key={idx} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 12px;

    li {
      width: 25%;
      padding: 0 12px;
    }
  }
`;

export default PhotoList;
