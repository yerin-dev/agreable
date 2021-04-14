import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { URL } from "../../../../constants/Consts";
import PropTypes from "prop-types";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Virtual, Autoplay } from "swiper/core";
import _ from "lodash";
import { media } from "../../../../styled/Responsive";

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
              <img src={URL.VISUAL_BASE_URL + item.image} alt="" className="pc_image" />
              <img src={URL.VISUAL_BASE_URL + item.mobileImage} alt="" className="mobile_image" />
            </SwiperSlide>
          ))}
        </Swiper>
        <PlaceHolderImage src="https://via.placeholder.com/1200x400.png/f5f5f5/f5f5f5%20?text=no%20image" className="pc_image" />
        <PlaceHolderImage src="https://via.placeholder.com/1080x648.png/f5f5f5/f5f5f5%20?text=no%20image" className="mobile_image" />
      </Contents>
    </Container>
  );
}

Visual.propTypes = {
  data: PropTypes.array,
  item: PropTypes.shape({
    image: PropTypes.string,
    mobileImage: PropTypes.string
  })
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
`;

const Contents = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  background: #f5f5f5;
  position: relative;

  .mobile_image {
    display: none;

    ${media.lessThan("sm")`
      display: block;
    `};
  }

  .pc_image {
    ${media.lessThan("sm")`
      display: none;
    `};
  }

  .swiper-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

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

const PlaceHolderImage = styled.img`
  width: 1600px;
  max-width: 100%;
  opacity: 0;
`;

export default Visual;
