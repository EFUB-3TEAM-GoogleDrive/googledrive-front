import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.PNG";

const HeaderDiv = styled.div`
  display: flex;
  height: 65px;
  border-bottom: 1px solid #dddddd;
  align-items: center;
  padding: 0px 10px;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <img src={logo} alt="로고" style={{ width: "10%" }}></img>
    </HeaderDiv>
  );
};
export default Header;
