import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.PNG";
import search from "../assets/search.png";
import option from "../assets/option.png";
import close from "../assets/close.png";
import offline from "../assets/offline.png";
import help from "../assets/help.png";
import setting from "../assets/setting.png";
import apps from "../assets/apps.png";
import profile from "../assets/profile.png";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 65px;
  border-bottom: 1px solid #dddddd;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
`;

const Search = styled.div`
  width: 90%;
  background-color: #f1f3f4;
  border: none;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 20px;
`;

const Input = styled.input`
  width: 90%;
  font-size: 16px;
  background: none;
  border: none;
  margin-left: 12px;
  outline: none;
`;

const Header = () => {
  const [content, setContent] = useState("");

  const onContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <HeaderDiv>
      <div style={{ display: "flex", flexDirection: "row", width: "1000px" }}>
        <div style={{ width: "30%" }}>
          <img
            src={logo}
            alt="로고"
            style={{ width: "65%", cursor: "pointer" }}
          ></img>
        </div>
        <Search>
          <img src={search} alt="검색" style={{ cursor: "pointer" }}></img>
          <Input
            placeholder="드라이브에서 검색"
            value={content}
            onChange={onContentChange}
          ></Input>
          {content !== "" ? (
            <img
              src={close}
              alt="지우기"
              style={{ cursor: "pointer", marginRight: "20px" }}
              onClick={() => setContent("")}
            ></img>
          ) : (
            <img
              src={close}
              alt="지우기"
              style={{
                cursor: "pointer",
                marginRight: "20px",
                visibility: "hidden",
              }}
            ></img>
          )}
          <img src={option} alt="옵션" style={{ cursor: "pointer" }}></img>
        </Search>
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div style={{ marginRight: "30px" }}>
          <img
            src={offline}
            alt="오프라인"
            style={{ cursor: "pointer", marginRight: "15px" }}
          ></img>
          <img
            src={help}
            alt="지원"
            style={{ cursor: "pointer", marginRight: "15px" }}
          ></img>
          <img
            src={setting}
            alt="설정"
            style={{ cursor: "pointer", marginRight: "15px" }}
          ></img>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src={apps}
            alt="앱"
            style={{
              cursor: "pointer",
              marginRight: "15px",
              width: "30px",
              height: "30px",
            }}
          ></img>
          <img
            src={profile}
            alt="프로필"
            style={{ cursor: "pointer", width: "35px" }}
          ></img>
        </div>
      </div>
    </HeaderDiv>
  );
};
export default Header;
