import React, { useState, useRef } from "react";
import Category from "./components/Category";
import FileBox from "./components/FileBox";
import FolderBox from "./components/FolderBox";
import Header from "./components/Header";
import RecommendBox from "./components/RecommendBox";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import BlankRightClick from "./components/BlankRightClick";
import FileRightClick from "./components/FileRightClick";

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const FileWrapper = styled.div`
  max-height: 81vh;
  overflow-y: scroll;
  z-index: 0;
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
  const [toggle, setToggle] = useState(false);
  // const [blankMenu, setBlankMenu] = useState(false);
  // const [fileMenu, setFileMenu] = useState(false);
  const blankMenu = useRef(false);
  const fileMenu = useRef(false);
  const x = useRef(0);
  const y = useRef(0);
  let isSameTime = false;

  const onRightBlankClick = (e) => {
    if (fileMenu.current) {
      blankMenu.current = false;
      return;
    }
    e.preventDefault();
    blankMenu.current = true;
    setToggle(!toggle);
    x.current = e.nativeEvent.clientX;
    y.current = e.nativeEvent.clientY;
  };

  const onRightFileClick = (e) => {
    e.preventDefault();
    fileMenu.current = true;
    setToggle(!toggle);
    x.current = e.nativeEvent.clientX;
    y.current = e.nativeEvent.clientY;
  };

  const onClick = (e) => {
    blankMenu.current = false;
    fileMenu.current = false;
    setToggle(!toggle);
  };

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
            <FileWrapper onContextMenu={onRightBlankClick} onClick={onClick}>
              <Title>추천</Title>
              <RecommendBox onRightFileClick={onRightFileClick} />
              <br />
              <Title>폴더</Title>
              <FolderBox />
              <br />
              <Title> 파일</Title>
              <FileBox />
            </FileWrapper>
            {blankMenu.current ? (
              <BlankRightClick x={x.current} y={y.current} />
            ) : (
              <></>
            )}
            {fileMenu.current ? (
              <FileRightClick x={x.current} y={y.current} />
            ) : (
              <></>
            )}
          </div>
          <Sidebar />
        </Content>
      </div>
    </div>
  );
}

export default App;
