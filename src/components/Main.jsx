import React from "react";
import styled from "styled-components";
import {
  ScrollContainer,
  ScrollPage
} from "react-scroll-motion";
import { ExplainContainer } from "./ExplainContainer";
import { TitleContainer } from "./TitleContainer";
import { CodesContainer } from "./CodesContainer";

const SecondContainer = styled.div`
    margin-bottom: 132px;
  `;
const Main = () => {
  
  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <TitleContainer />
        </ScrollPage>
        <SecondContainer>
          <ScrollPage page={1}>
            <ExplainContainer />
          </ScrollPage>
        </SecondContainer>
      </ScrollContainer>
      <CodesContainer />
    </>
  );
};

export default Main;
