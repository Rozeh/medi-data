import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const ImageUrl = "/images/ai_banner.png";

const SlickBlock = styled.div``;

const SlickSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }
`;

const items = [
  { id: 1, label: "의료 데이터 센터", url: "" },
  { id: 2, url: ImageUrl },
  { id: 3, url: ImageUrl },
];

const ImageContainer = styled.div`
  width: 720px;
  height: 430px;
  z-index: 4;

  .wrapper {
    width: 720px;
    height: 430px;
    overflow: hidden;
    border-radius: 12px;
  }
  .Carousel {
    height: 430px;
    padding: 2rem 2rem;
    font-size: 2.4rem;
    font-weight: 600;
    background-image: url("/images/ai_banner.png"), url("/images/ai_bg.png");
    background-repeat: no-repeat, no-repeat;
    background-position: 350px 210px, 480px 280px;
    border-radius: 12px;
  }

  .sub-title {
    font-size: 1.2rem;
    color: grey;
    margin-top: 3px;
  }
  .intro-sentence {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: grey;
  }
  .detail-button {
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 2rem;
    width: 130px;
    height: 50px;
    color: #8fc31f;
    background-color: white;
    border: 2px solid #8fc31f;
    border-radius: 9px;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: #8fc31f;
    }
  }
`;

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <>
      <SlickSlider {...settings}>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <ImageContainer>
                <div className="wrapper">
                  <div className="Carousel">
                    의료 데이터 센터
                    <div className="sub-title">Medical Data Center</div>
                    <div className="intro-sentence">
                      나의 의료데이터를 간편하게 모아보고 <br />
                      블록체인으로 가명화 처리하여 <br />
                      보상까지 받는 서비스
                    </div>
                    <button className="detail-button">상세보기</button>
                  </div>
                </div>
              </ImageContainer>
            </div>
          );
        })}
      </SlickSlider>
    </>
  );
};
