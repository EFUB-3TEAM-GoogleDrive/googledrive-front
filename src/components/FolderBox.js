import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 40px;
  border: 1px solid black;
  cursor: pointer;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const FolderBox = () => {
  const [folder, setFolder] = useState([
    { id: 1, content: "folder1", order: 1 },
    { id: 2, content: "folder2", order: 2 },
    { id: 3, content: "folder3", order: 3 },
    { id: 4, content: "folder4", order: 4 },
    { id: 5, content: "folder5", order: 5 },
  ]);
  const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    setDragId(Number(ev.currentTarget.id));
  };

  const handleDrop = (ev) => {
    console.log(folder.find((box) => box.id === dragId));
    const dragBox = folder.find((box) => box.id === dragId);
    const dropBox = folder.find(
      (box) => box.id === Number(ev.currentTarget.id)
    );

    const dragBoxOrder = dragBox?.order;
    const dropBoxOrder = dropBox?.order;

    const newBoxState = folder.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });
    setFolder(newBoxState);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {folder
        .sort((a, b) => a.order - b.order)
        .map((folderBox) => (
          <div>
            <Box
              id={folderBox.id}
              draggable={true}
              onDragOver={(ev) => ev.preventDefault()}
              onDragStart={handleDrag}
              onDrop={handleDrop}
            >
              {folderBox.content}
            </Box>
          </div>
        ))}
    </div>
  );
};
export default FolderBox;
