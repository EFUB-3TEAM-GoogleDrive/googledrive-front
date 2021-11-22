import React, { useState } from "react";
import styled from "styled-components";
import FileRightClick from "./FileRightClick";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 150px;
  border: 1px solid black;
  cursor: pointer;
  margin-right: 15px;
  padding-top: 12px;
  background-color: #f1f3f4;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const Image = styled.div`
  width: 195px;
  height: 85px;
  background-color: white;
  border-bottom: none;
  box-shadow: 0 0 3px 1px #cccccc;
`;

const Title = styled.div`
  width: 200px;
  height: 55px;
  background-color: white;
  border: 1px solid #cccccc;
  border-bottom: none;
  border-radius: 0 0 5px 5px;
  padding: 10px;
`;

const RecommendBox = ({ onRightFileClick }) => {
  const [recommend, setRecommend] = useState([
    { id: 1, content: "file1", order: 1 },
    { id: 2, content: "file2", order: 2 },
    { id: 3, content: "file3", order: 3 },
    { id: 4, content: "file4", order: 4 },
    { id: 5, content: "file5", order: 5 },
  ]);
  const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    setDragId(Number(ev.currentTarget.id));
  };

  const handleDrop = (ev) => {
    console.log(recommend.find((box) => box.id === dragId));
    const dragBox = recommend.find((box) => box.id === dragId);
    const dropBox = recommend.find(
      (box) => box.id === Number(ev.currentTarget.id)
    );

    const dragBoxOrder = dragBox?.order;
    const dropBoxOrder = dropBox?.order;

    const newBoxState = recommend.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });
    setRecommend(newBoxState);
  };

  const onBoxClick = (e) => {
    e.preventDefault();
    onRightFileClick(e);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {recommend
        .sort((a, b) => a.order - b.order)
        .map((recommendBox) => (
          <div onContextMenu={onBoxClick}>
            <Box
              id={recommendBox.id}
              draggable={true}
              onDragOver={(ev) => ev.preventDefault()}
              onDragStart={handleDrag}
              onDrop={handleDrop}
            >
              <Image>dd</Image>
              <Title>{recommendBox.content}</Title>
            </Box>
          </div>
        ))}
    </div>
  );
};
export default RecommendBox;
