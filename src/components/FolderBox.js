import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchFolder } from "../store/actions/action";
import foldericon from "../assets/folder.png";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 220px;
  height: 40px;
  border: 1px solid black;
  cursor: pointer;
  margin-right: 15px;
  justify-content: left;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const FolderBox = ({ onRightFileClick }) => {
  const dispatch = useDispatch();
  const folder = useSelector((state) => state?.folder.folder) || [];
  const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    setDragId(Number(ev.currentTarget.id));
  };

  const onBoxClick = (e, id) => {
    e.preventDefault();
    onRightFileClick(e, "folder", id);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {folder
        .sort((a, b) => a.order - b.order)
        .map((folderBox) => (
          <div onContextMenu={(e) => onBoxClick(e, folderBox.id)}>
            <Box
              id={folderBox.id}
              draggable={true}
              onDragOver={(ev) => ev.preventDefault()}
              onDragStart={handleDrag}
              onDrop={(e) => switchFolder(dispatch, dragId, e.currentTarget.id)}
            >
              <img
                src={foldericon}
                alt="folder"
                style={{
                  width: "15%",
                  marginRight: "10px",
                  marginLeft: "10px",
                }}
              />
              {folderBox.content}
            </Box>
          </div>
        ))}
    </div>
  );
};
export default FolderBox;
