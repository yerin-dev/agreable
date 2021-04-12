import React from "react";
import styled from "styled-components";
import { URL } from "../../../../constants/Consts";
import PropTypes from "prop-types";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

function Visual({ data }) {
  SwiperCore.use([Pagination]);

  const params = {
    slidesPerView: 1,
    pagination: { clickable: true }
  };

  return (
    <Container>
      <Swiper {...params}>
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={URL.VISUAL_BASE_URL + item.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

Visual.propTypes = {
  data: PropTypes.shape({
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
  padding: 0 12px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;

  .swiper-container {
    margin: 0 auto;
    max-width: 1600px;
    background: #e5e5e5;
  }
  .swiper-slide {
    text-align: center;

    img {
      width: 100%;
    }
  }
`;

export default Visual;
