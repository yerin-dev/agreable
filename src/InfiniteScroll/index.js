import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useOnViewport } from "../hooks/useOnViewport";
import PropTypes from "prop-types";

function InfiniteScroll({ children, getMoreItems, options, isLoading }) {
  const ref = useRef();

  const { inView } = useOnViewport(ref, isLoading, { options });

  useEffect(() => {
    inView && getMoreItems();
  }, [inView]);

  return (
    <Container>
      {children}
      <Sentinel ref={ref} />
    </Container>
  );
}

InfiniteScroll.propTypes = {
  getMoreItems: PropTypes.func,
  isLoading: PropTypes.bool,
  inView: PropTypes.bool
};

const Container = styled.div`
  position: relative;
`;

const Sentinel = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
`;

export default InfiniteScroll;
