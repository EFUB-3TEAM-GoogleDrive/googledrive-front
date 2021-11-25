import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { switchRecommend } from "../store/actions/action";

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
  background-image: url(${(props) => props.url});
`;

const Title = styled.div`
  width: 200px;
  height: 55px;
  background-color: white;
  border: 1px solid #cccccc;
  border-bottom: none;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div`
  background-image: url(${(props) => props.url});
  width: 19px;
  height: 19px;
  margin-right: 10px;
  margin-top: 2px;
`;

const RecommendBox = ({ onRightFileClick }) => {
  const dispatch = useDispatch();
  const recommend = useSelector((state) => state?.recommend.recommend) || [];
  const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    setDragId(Number(ev.currentTarget.id));
  };

  const onBoxClick = (e, id) => {
    e.preventDefault();
    onRightFileClick(e, "recommend", id);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {recommend
        .sort((a, b) => a.order - b.order)
        .map((recommendBox) => (
          <div onContextMenu={(e) => onBoxClick(e, recommendBox.id)}>
            <Box
              id={recommendBox.id}
              draggable={true}
              onDragOver={(ev) => ev.preventDefault()}
              onDragStart={handleDrag}
              onDrop={(e) =>
                switchRecommend(dispatch, dragId, e.currentTarget.id)
              }
            >
              <Image url={recommendBox.thumbnail} />
              <Title>
                <Icon url={recommendBox.icon} />
                {recommendBox.content}
              </Title>
            </Box>
          </div>
        ))}
    </div>
  );
};
export default RecommendBox;
