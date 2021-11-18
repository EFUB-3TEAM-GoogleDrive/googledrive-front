import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 220px;
  height: 200px;
  border: 1px solid black;
  cursor: pointer;
  margin-right: 15px;
  margin-bottom: 10px;
  background-color: #f1f3f4;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const Image = styled.div`
  width: 220px;
  height: 145px;
  background-color: white;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
`;

const Title = styled.div`
  width: 200px;
  height: 45px;
  background-color: white;
  border: 1px solid #cccccc;
  border-bottom: none;
  border-radius: 0 0 5px 5px;
  padding: 10px;
`;

const FileBox = () => {
  const [file, setFile] = useState([
    { id: 1, content: "file1", order: 1 },
    { id: 2, content: "file2", order: 2 },
    { id: 3, content: "file3", order: 3 },
    { id: 4, content: "file4", order: 4 },
    { id: 5, content: "file5", order: 5 },
    { id: 6, content: "file6", order: 6 },
    { id: 7, content: "file7", order: 7 },
    { id: 8, content: "file8", order: 8 },
    { id: 9, content: "file9", order: 9 },
    { id: 10, content: "file10", order: 10 },
  ]);
  const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    setDragId(Number(ev.currentTarget.id));
  };

  const handleDrop = (ev) => {
    console.log(file.find((box) => box.id === dragId));
    const dragBox = file.find((box) => box.id === dragId);
    const dropBox = file.find((box) => box.id === Number(ev.currentTarget.id));

    const dragBoxOrder = dragBox?.order;
    const dropBoxOrder = dropBox?.order;

    const newBoxState = file.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });
    setFile(newBoxState);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {file
        .sort((a, b) => a.order - b.order)
        .map((fileBox) => (
          <div>
            <Box
              id={fileBox.id}
              draggable={true}
              onDragOver={(ev) => ev.preventDefault()}
              onDragStart={handleDrag}
              onDrop={handleDrop}
            >
              <Image>dd</Image>
              <Title>{fileBox.content}</Title>
            </Box>
          </div>
        ))}
    </div>
  );
};

export default FileBox;
