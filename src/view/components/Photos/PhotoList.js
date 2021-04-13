import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import _ from "lodash";
import PhotoListSkeleton from "./../Loader/PhotoListSkeleton";

function PhotoList({ data }) {
  if (_.isEmpty(data)) return <PhotoListSkeleton />;

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
    margin-top: -36px;

    li {
      width: 25%;
      padding: 36px 12px 0;
    }
  }
`;

export default PhotoList;
