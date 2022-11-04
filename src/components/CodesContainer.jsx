import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { langinfo } from "./langinfo";

export const CodesContainer = () => {
  const WrapContent = styled.div`
    padding: 12px;
  `;
  const LangsContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
  `;
  const LangTitle = styled.span`
    z-index: 1;
    position: relative;
    color: gray;
    display: inline-block;
    font-weight: bold;
    font-size: 29px;
  `;
  const LangHeader = styled.div`
    z-index: 99;
    position: sticky;
    top: 0;
    display: flex;
    width: auto;
    height: auto;
    padding-top: 20px;
    overflow-y: hidden;
    background-color: #ffffff;
    &::-webkit-scrollbar {
      display: none;
    }
  `;
  const LangButton = styled.button`
    width: 130px;
    height: 38px;
    display: flex;
    font-size: 15px;
    font-weight: bold;
    background: none;
    color: gray;
    outline: 0;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    &.active {
      border-bottom: 3px solid skyblue;
      color: skyblue;
      font-size: 18px;
    }
  `;
  const CodeSandBox = styled.iframe`
    width: 80%;
    height: 500px;
    margin: auto;
    display: block;
    border: 2px solid black;
    border-radius: 9px;
    overflow: hidden;
  `;

  const [btnActive, setBtnActive] = useState("");

  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    console.log("render..");
  }, [btnActive]);

  const toggleActive = (e) => {
    setBtnActive(() => {
      return e.target.value;
    });
  };

  return (
    <>
      <LangHeader>
        {langinfo.map((item, idx) => (
          <LangButton
            value={idx}
            className={idx == btnActive ? "active" : ""}
            onClick={toggleActive}
          >
            {item.name}
          </LangButton>
        ))}
      </LangHeader>
      {langinfo.map((item) => (
        <WrapContent ref={buttonRef}>
          <LangTitle>{item.name}</LangTitle>
          <LangsContainer key={item.name}>
            <CodeSandBox src={item.src}></CodeSandBox>
          </LangsContainer>
        </WrapContent>
      ))}
    </>
  );
};
