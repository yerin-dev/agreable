import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";
import Skeleton from "react-loading-skeleton";
import { media } from "../../../styled/Responsive";

function PhotoListSkeleton() {
  const arr = _.range(24);

  return (
    <Container>
      <Row>
        {arr.map(i => (
          <Col key={i}>
            <Thumb />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

PhotoListSkeleton.propTypes = {
  arr: PropTypes.array
};

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 12px;
  margin-top: -36px;

  ${media.lessThan("sm")`
    margin-top: -24px;
    padding: 0 6px;
  `};
`;

const Col = styled.div`
  padding: 36px 12px 0;
  width: 25%;

  ${media.lessThan("lg")`
    width: 33.3333%;
  `};

  ${media.lessThan("sm")`
    padding: 24px 6px 0;
    width: 50%;
  `};

  > span {
    height: 0;
    padding-bottom: 100%;
    position: relative;
    display: block;
    border-radius: 15px;
    overflow: hidden;
  }
`;

const Thumb = styled(Skeleton)`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default PhotoListSkeleton;
