import React from "react";
import styled from "styled-components";
import PhotoCard from "./PhotoCard";
import _ from "lodash";
import PhotoListSkeleton from "./../Loader/PhotoListSkeleton";
import { media } from "../../../styled/Responsive";

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

    ${media.lessThan("sm")`
      margin-top: -24px;
      padding: 0 6px;
    `};

    li {
      width: 25%;
      padding: 36px 12px 0;

      ${media.lessThan("lg")`
        width: 33.3333%;
      `};

      ${media.lessThan("sm")`
        padding: 24px 6px 0;
        width: 50%;
      `};
    }
  }
`;

export default PhotoList;
