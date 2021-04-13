import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { URL } from "../../../../constants/Consts";
import PropTypes from "prop-types";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Virtual, Autoplay } from "swiper/core";
import _ from "lodash";

function Visual({ data }) {
  const ref = useRef();
  SwiperCore.use([Pagination, Virtual, Autoplay]);

  const settings = {
    slidesPerView: 1,
    pagination: { clickable: true },
    virtual: true,
    autoplay: true
  };

  useLayoutEffect(() => {
    let timerId;
    if (!_.isEmpty(data)) {
      timerId = setTimeout(() => {
        ref?.current.swiper.update();
      }, 0);
    }
    return () => clearTimeout(timerId);
  }, [data]);

  return (
    <Container>
      <Contents>
        <Swiper {...settings} ref={ref}>
          {data.map((item, idx) => (
            <SwiperSlide key={idx} virtualIndex={idx}>
              <img src={URL.VISUAL_BASE_URL + item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Contents>
    </Container>
  );
}

Visual.propTypes = {
  data: PropTypes.array,
  image: PropTypes.string,
  mobileImage: PropTypes.string
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  padding: 0 12px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
`;

const Contents = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  background: #f5f5f5;

  .swiper-container {
    height: 0;
    overflow: hidden;
    padding-bottom: 33.3333%;

    .swiper-slide {
      text-align: center;

      img {
        width: 100%;
      }
    }
    .swiper-pagination {
      display: flex;
      justify-content: flex-end;
      padding: 8px 15px;

      .swiper-pagination-bullet {
        margin: 0 8px;
      }
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background: #777;
        opacity: 1;

        &.swiper-pagination-bullet-active {
          background: #000;
        }
      }
    }
  }
`;

export default Visual;
