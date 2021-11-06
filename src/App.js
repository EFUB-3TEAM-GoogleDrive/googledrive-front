import React from "react";
import Category from "./components/Category";
import FileBox from "./components/FileBox";
import FolderBox from "./components/FolderBox";
import Header from "./components/Header";
import RecommendBox from "./components/RecommendBox";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <div>
      <Header />
      <div>
        <Content>
          <Category />
          <div>
            추천
            <div style={{ display: "flex", flexDirection: "row" }}>
              {Array(5)
                .fill()
                .map((recommendBox) => (
                  <RecommendBox />
                ))}
            </div>
            폴더
            <div style={{ display: "flex", flexDirection: "row" }}>
              {Array(5)
                .fill()
                .map((folderBox) => (
                  <FolderBox />
                ))}
            </div>
            파일
            <div style={{ display: "flex", flexDirection: "row" }}>
              {Array(5)
                .fill()
                .map((fileBox) => (
                  <FileBox />
                ))}
            </div>
          </div>
        </Content>
      </div>
    </div>
  );
}

export default App;
