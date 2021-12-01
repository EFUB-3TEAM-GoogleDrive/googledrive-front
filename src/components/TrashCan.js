import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import trashcan from "../assets/trashcan.png";

const Warning = styled.div`
  padding: 5px 15px 5px 15px;
  display: flex;
  background-color: #f1f3f4;
  height: 45px;
  font-size: 15px;
  width: 97%;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 210px;
  border: 1px solid black;
  cursor: pointer;
  margin-right: 15px;
  background-color: #f1f3f4;
  align-items: center;
  border: 1px solid #cccccc;
  border-radius: 5px;
`;

const Image = styled.div`
  width: 220px;
  height: 185px;
  background-color: white;
  border-bottom: none;
  border-radius: 5px 5px 0 0;
  background-image: url(${(props) => props.url});
  background-size: 100%;
`;

const Title = styled.div`
  width: 200px;
  background-color: white;
  border-bottom: none;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div`
  background-image: url(${(props) => props.url});
  background-size: 100%;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  margin-top: 2px;
`;

const TrashCan = ({ onRightFileClick }) => {
  const dispatch = useDispatch();
  const deletedRecommend = useSelector((state) => state?.recommend.trash) || [];
  const deletedFile = useSelector((state) => state?.file.trash) || [];
  const deletedFolder = useSelector((state) => state?.folder.trash) || [];
  const deleted = deletedRecommend.concat(deletedFile).concat(deletedFolder);

  const onBoxClick = (e, id) => {
    e.preventDefault();
    onRightFileClick(e, "trash", id);
  };

  return (
    <div>
      <Warning>
        <p>휴지통에 있는 항목이 30일 후 완전히 삭제됩니다.</p>
        <p>휴지통 비우기</p>
      </Warning>
      {deleted.length === 0 ? (
        <div
          style={{ paddingTop: "10%", textAlign: "center", fontSize: "14px" }}
        >
          <img style={{ width: "200px" }} alt="쓰레기통" src={trashcan} />
          <p style={{ fontSize: "18px" }}>항목 없음</p>
          <p>휴지통으로 이동한 항목이 여기에 표시됩니다.</p>
          <p style={{ color: "#1A73e8" }}>자세히 알아보기</p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {deleted
            .sort((a, b) => a.order - b.order)
            .map((deletedBox) => (
              <div onContextMenu={(e) => onBoxClick(e, deletedBox.id)}>
                <Box id={deletedBox.id}>
                  <Image url={deletedBox.thumbnail} />
                  <Title>
                    <Icon url={deletedBox.icon} />
                    {deletedBox.content}
                  </Title>
                </Box>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default TrashCan;
