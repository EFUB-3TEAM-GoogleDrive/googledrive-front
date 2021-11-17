import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 200px;
  border: 1px solid black;
  cursor: pointer;
`

const RecommendBox = ({id, content, handleDrag, handleDrop}) => {
  return (
    <Box
        id = {id}
        draggable = {true}
        onDragOver = {(ev) => ev.preventDefault()}
        onDragStart = {handleDrag}
        onDrop = {handleDrop}
    >
      {content}
    </Box>
  )
};
export default RecommendBox;
