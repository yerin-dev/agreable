import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { productActions } from "../../redux/ActionCreators";
import PhotoList from "./../components/Photos/PhotoList";

function PhotoListContainer() {
  const { item = [] } = useSelector(state => state.product);

  useEffect(() => {
    productActions.getProductItems({
      page: 1
    });
  }, []);

  return (
    <Container>
      <PhotoList data={item} />
    </Container>
  );
}

const Container = styled.div``;

export default PhotoListContainer;
