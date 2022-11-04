import React from "react";
import styled from "styled-components";
import {
  Animator,
  batch,
  Fade,
  MoveIn,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
 const ExplainText = styled.div`
    z-index: 99;
    font-size: 45px;
    font-weight: bold;
    text-align: center;
    color: #37527b;
    @media screen and (max-width:768px) {
      font-size: 25px;
    }
  `;
  const ProgramingIcon = styled.img`
    z-index: 1;
    width: 150px;
    @media screen and (max-width:768px) {
      width: 100px;
    }
  `;
export const ExplainContainer = () => {
 
  return (
    <>
        <Animator animation={batch(Fade(), StickyIn(12, 20), MoveIn(-320, -200))}>
          <ProgramingIcon src="./img/html5-logo.svg" />
        </Animator>
        <Animator animation={batch(Fade(), StickyIn(52, 36), MoveIn(0, -500))}>
          <ProgramingIcon src="./img/angular-logo.svg" />
        </Animator>
        <Animator animation={batch(Fade(), StickyIn(83, 30), MoveIn(320, -200))}>
          <ProgramingIcon src="./img/tailwind-logo.svg" />
        </Animator>
        <Animator animation={batch(Fade(), StickyIn(27, 79), MoveIn(-140, 200))}>
          <ProgramingIcon src="./img/ts-logo.svg" />
        </Animator>
        <Animator animation={batch(Fade(), StickyIn(63, 73), MoveIn(240, 420))}>
          <ProgramingIcon src="./img/css3.svg" />
        </Animator>
        <Animator animation={batch(Fade(), StickyIn(16, 54), MoveIn(-240, 320))}>
          <ProgramingIcon src="./img/vue-logo.svg" />
        </Animator>
        <Animator animation={batch(Fade(), StickyIn(89, 81), MoveIn(240, 220))}>
          <ProgramingIcon src="./img/js-logo.svg" />
        </Animator>
        <Animator animation={batch(Fade(), StickyIn(34, 24), MoveIn(-240, -220))}>
          <ProgramingIcon src="./img/react-logo.svg" />
        </Animator>
        <Animator animation={batch(Fade(), StickyIn(45, 63), MoveIn(-0, 320))}>
          <ProgramingIcon src="./img/next-logo.svg" />
        </Animator>
        <Animator animation={batch(Fade(), StickyIn(69, 15), MoveIn(240, -420))}>
          <ProgramingIcon src="./img/svelte-logo.svg" />
        </Animator>
        <Animator animation={batch(StickyIn(), Fade(), ZoomIn())}>
          <ExplainText>
            현존하는 언어, 프레임워크의 기본 구조를 한눈에 쉽게
            보여줍니다.
          </ExplainText>
        </Animator>
    </>
  );
};
