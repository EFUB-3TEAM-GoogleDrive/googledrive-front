import React, { useState } from "react";
import Category from "./components/Category";
import FileBox from "./components/FileBox";
import FolderBox from "./components/FolderBox";
import Header from "./components/Header";
import RecommendBox from "./components/RecommendBox";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const FileWrapper = styled.div`
  max-height: 81vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background-color: white;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ceced2;
    :hover {
      background: #919191;
    }
  }
`;

const Title = styled.p`
  font-size: 15px;
  margin: 20px 0;
`;

function App() {
  return (
    <div>
      <Header />
      <div>
        <Content>
          <Category />
          <div>
            <div stlye={{ position: "absolute" }}>
              <p style={{ fontSize: "18px", lineHeight: "2vh" }}>내 드라이브</p>
              <div
                style={{
                  borderBottom: "0.1px solid #DADCE0",
                  backgroundColor: "#DADCE0",
                  margin: "10px 0px",
                }}
              ></div>
            </div>
            <FileWrapper>
              <Title>추천</Title>
              <RecommendBox />
              <br />
              <Title>폴더</Title>
              <FolderBox />
              <br />
              <Title> 파일</Title>
              <FileBox />
            </FileWrapper>
          </div>
          <Sidebar />
        </Content>
      </div>
    </div>
  );
}

export default App;
