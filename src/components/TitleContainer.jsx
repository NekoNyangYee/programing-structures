import React from "react";
import styled from "styled-components";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
  FadeOut,
  StickyOut,
} from "react-scroll-motion";
const MainTitle = styled.h1`
  z-index: 999;
  position: relative;
  font-size: 43px;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-size: 35px;
  }
`;
const TabletImg = styled.img`
  width: 520px;
  position: relative;
  display: inline-block;
  top: -20px;
  left: 70px;
  transform: rotate(34deg);
  @media screen and (max-width: 480px) {
    width: 330px;
    left: -30px;
  }
  @media screen and (min-width:768px) {
    width: 430px;
    left: 30px;
  }
`;
const PhoneImg = styled.img`
  position: relative;
  width: 220px;
  top: 490px;
  right: 290px;
  display: inline-block;
  transform: rotate(42deg);
  @media screen and (max-width: 480px) {
    width: 130px;
    left: -30px;
    top: 350px;
  }
  @media screen and (min-width:768px) {
    width: 230px;
    left: -120px;
    top: 430px;
  }
`;
const FoldableImg = styled.img`
  position: relative;
  width: 390px;
  top: 490px;
  right: 290px;
  display: inline-block;
  transform: rotate(232deg);
  @media screen and (max-width: 480px) {
    width: 180px;
    left: -30px;
    top: 550px;
    transform: rotate(232deg);
  }
  @media screen and (min-width:768px) {
    width: 250px;
    left: -120px;
    top: 790px;
  }
`;
const PcImg = styled.img`
  position: relative;
  width: 620px;
  float: right;
  top: 220px;
  display: inline-block;
  @media screen and (max-width: 480px) {
    width: 330px;
    left: 54px;
    top: 250px;
    
  }
  @media screen and (min-width:768px) {
    width:550px;
    left: 20px;
    top: 310px;
  }
`;
export const TitleContainer = () => {
  return (
    <>
      <Animator animation={batch(Fade(), Sticky(12, 13), MoveOut(-420, -500))}>
        <TabletImg src="./img/tablet.png" />
      </Animator>
      <Animator animation={batch(Fade(), Sticky(32, 25), MoveOut(-720, 500))}>
        <PhoneImg src="./img/phone.png" />
      </Animator>
      <Animator animation={batch(Fade(), Sticky(96, -34), MoveOut(590, -500))}>
        <FoldableImg src="./img/foldable.svg" />
      </Animator>
      <Animator animation={batch(Fade(), Sticky(84, 56), MoveOut(620, 500))}>
        <PcImg src="./img/pc.png" />
      </Animator>
      <Animator animation={batch(Fade(), Sticky(50, 45), MoveOut(0, -400))}>
        <MainTitle>
          <p style={{ color: "#B67272", margin: 0 }}>Web </p>
          <p style={{ color: "#37527B", margin: 0 }}>"Programing"</p>
          <p style={{ color: "#B67272", margin: 0 }}>Structures</p>
        </MainTitle>
      </Animator>
    </>
  );
};
