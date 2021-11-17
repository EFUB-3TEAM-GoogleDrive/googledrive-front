import React, {useState} from "react";
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
  const [recommend, setRecommend] = useState([
      {id:1, content:"file1", order:1},
    {id:2, content:"file2", order:2},
    {id:3, content:"file3", order:3},
    {id:4, content:"file4", order:4},
    {id:5, content:"file5", order:5}
  ]);
  const [dragId, setDragId] = useState();

  const handleDrag = ev => {
    setDragId(Number(ev.currentTarget.id));
  }

  const handleDrop = (ev) => {
    console.log(recommend.find((box) => box.id === dragId))
    const dragBox = recommend.find((box) => box.id === dragId);
    const dropBox = recommend.find((box) => box.id === Number(ev.currentTarget.id))

    const dragBoxOrder = dragBox?.order;
    const dropBoxOrder = dropBox?.order;

    const newBoxState = recommend.map((box) => {
      if(box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if(box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder
      }
      return box;
    })
    setRecommend(newBoxState);
  }

  return (
    <div>
      <Header />
      <div>
        <Content>
          <Category />
          <div>
            추천
            <div style={{ display: "flex", flexDirection: "row"}}>
              {recommend
                .sort((a, b) => a.order - b.order)
                .map((recommendBox) => (
                  <RecommendBox id = {recommendBox.id} content={recommendBox.content} handleDrag = {handleDrag} handleDrop={handleDrop}/>
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
