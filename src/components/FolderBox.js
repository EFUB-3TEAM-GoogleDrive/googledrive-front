import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchFolder } from "../store/actions/action";

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

const FolderBox = ({ onRightFileClick }) => {
  const dispatch = useDispatch();
  const [folder, setFolder] = useState(
    useSelector((state) => state?.folder.folder) || []
  );
  const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    setDragId(Number(ev.currentTarget.id));
  };

  const onBoxClick = (e) => {
    e.preventDefault();
    onRightFileClick(e);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {folder
        .sort((a, b) => a.order - b.order)
        .map((folderBox) => (
          <div onContextMenu={onBoxClick}>
            <Box
              id={folderBox.id}
              draggable={true}
              onDragOver={(ev) => ev.preventDefault()}
              onDragStart={handleDrag}
              onDrop={(e) => switchFolder(dispatch, dragId, e.currentTarget.id)}
            >
              {folderBox.content}
            </Box>
          </div>
        ))}
    </div>
  );
};
export default FolderBox;
