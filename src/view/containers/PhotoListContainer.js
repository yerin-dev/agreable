import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productActions } from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import InfiniteScroll from "../../InfiniteScroll/index";

function PhotoListContainer({ match }) {
  const { item = [], isLoading } = useSelector(state => state.product);
  const [page, setPage] = useState(1);

  useEffect(() => {
    productActions.getProductItems({
      page
    });
  }, [page]);

  useEffect(() => {
    return () => {
      productActions.deleteHistory();
      setPage(1);
    };
  }, [match.url]);

  const getMoreItems = () => {
    if (6 <= page) return;
    setPage(prevPage => prevPage + 1);
  };

  const options = {
    rootMargin: "25%"
  };

  return (
    <InfiniteScroll getMoreItems={getMoreItems} options={options} isLoading={isLoading}>
      <PhotoList data={item} />
    </InfiniteScroll>
  );
}

export default PhotoListContainer;
