import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productActions } from "../../redux/ActionCreators";
import PhotoList from "../components/Photos/PhotoList";
import InfiniteScroll from "../../InfiniteScroll/index";
import { PropTypes } from "prop-types";

function PhotoListContainer({ match }) {
  const { item = [], isLoading } = useSelector(state => state.product);
  const [page, setPage] = useState(1);

  // item api 가져오기
  useEffect(() => {
    productActions.getProductItems({
      page
    });
  }, [page]);

  // 페이지 이동시 item 초기화
  useEffect(() => {
    return () => {
      productActions.deleteHistory();
      setPage(1);
    };
  }, [match.url]);

  // item pagenation
  const getMoreItems = () => {
    if (6 <= page) return;
    setPage(prevPage => prevPage + 1);
  };

  // infiniteScroll 옵션
  const options = {
    rootMargin: "25%"
  };

  return (
    <InfiniteScroll getMoreItems={getMoreItems} options={options} isLoading={isLoading}>
      <PhotoList data={item} />
    </InfiniteScroll>
  );
}

PhotoListContainer.propTypes = {
  item: PropTypes.array,
  match: PropTypes.shape({
    url: PropTypes.string
  })
};

export default PhotoListContainer;
