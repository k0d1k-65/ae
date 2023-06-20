import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const MainWrap = styled.div`
  overflow: auto;
  flex: auto;

  /* Firefox */
  scrollbar-width: auto;
  scrollbar-color: #a8a8a8 #e1e1e1;

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #e1e1e166;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #a8a8a8;
    border-radius: 8px;
    border: 1px solid #ddd

    /* スクロールバーのホバー時の色 */
    &:hover {
      background-color: #808080;
    }
  }
`;

const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;
  @media (min-width: 1200px) {
    width: 960px;
  }
  @media (min-width: 1440px) {
    width: 1140px;
  }
  @media (min-width: 1680px) {
    width: 1300px;
  }
  @media (min-width: 1920px) {
    width: 1460px;
  }
  @media (min-width: 2160px) {
    width: 1620px;
  }
`;

type MyComponentProps = {
  header?: JSX.Element;
  children: ReactNode;
};

const MainContentComponent: React.FC<MyComponentProps> = ({ children, header }) => {
  return (
    <Wrapper>
      <Main style={{ flex: 0 }}>{header}</Main>

      <MainWrap>
        <Main>{children}</Main>
      </MainWrap>
    </Wrapper>
  );
};

export default MainContentComponent;
