import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  width: 300px;
  border: 1px solid black;
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
`;

/**
 * 파일/폴더 우클릭 시 나오는 메뉴 구현해주시면 됩니다.
 */
const FileRightClick = ({ x, y }) => {
  return (
    <Menu x={x} y={y}>
      파일 우클릭
    </Menu>
  );
};

export default FileRightClick;
