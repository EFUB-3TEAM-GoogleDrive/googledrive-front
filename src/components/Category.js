import React from "react";
import styled from "styled-components";
import add from "../assets/add.png";
import arrow from "../assets/arrow.png";
import drive from "../assets/drive.png";
import computer from "../assets/computer.png";
import shared from "../assets/shared.png";
import recent from "../assets/recent.png";
import star from "../assets/star.png";
import trash from "../assets/trash.png";
import cloud from "../assets/cloud.png";
import storage from "../assets/storage.png";

const Button = styled.button`
  margin-left: 10px;
  margin-bottom: 10px;
  width: 150px;
  height: 50px;
  background-color: white;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 1px 1px 1px #cccccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  width: 230px;
  height: 40px;
  justify-items: center;
  align-items: center;
  text-align: center;
  line-height: 40px;
  font-size: 13px;
  border-radius: 0px 20px 20px 0px;
  :hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

const Icon = styled.img`
  cursor: pointer;
  margin-right: 5px;
  width: 20px;
  height: 20px;
`;

const Category = () => {
  return (
    <div style={{ width: "250px", paddingTop: "10px", marginRight: "15px" }}>
      <Button>
        <img
          src={add}
          alt="+"
          style={{ cursor: "pointer", marginRight: "10px", width: "30px" }}
        ></img>
        새로 만들기
      </Button>
      <List style={{ backgroundColor: "#E8F0FE" }}>
        <Icon src={arrow} alt="->"></Icon>
        <Icon src={drive} alt="drive"></Icon>
        <p style={{ marginLeft: "10px" }}>내 드라이브</p>
      </List>
      <List>
        <Icon src={arrow} alt="->"></Icon>
        <Icon src={computer} alt="computer"></Icon>
        <p style={{ marginLeft: "10px" }}>컴퓨터</p>
      </List>
      <List>
        <Icon style={{ visibility: "hidden" }}></Icon>
        <Icon src={shared} alt="shared"></Icon>
        <p style={{ marginLeft: "10px" }}>공유 문서함</p>
      </List>
      <List>
        <Icon style={{ visibility: "hidden" }}></Icon>
        <Icon src={recent} alt="recent"></Icon>
        <p style={{ marginLeft: "10px" }}>최근 문서함</p>
      </List>
      <List>
        <Icon style={{ visibility: "hidden" }}></Icon>
        <Icon src={star} alt="star"></Icon>
        <p style={{ marginLeft: "10px" }}>중요 문서함</p>
      </List>
      <List>
        <Icon style={{ visibility: "hidden" }}></Icon>
        <Icon src={trash} alt="trash"></Icon>
        <p style={{ marginLeft: "10px" }}>휴지통</p>
      </List>
      <div
        style={{
          borderBottom: "0.1px solid #DADCE0",
          backgroundColor: "#DADCE0",
          margin: "10px 0px",
          width: "90%",
        }}
      ></div>
      <List>
        <Icon style={{ visibility: "hidden" }}></Icon>
        <Icon src={cloud} alt="cloud"></Icon>
        <p style={{ marginLeft: "10px" }}>저장용량</p>
      </List>
      <div style={{ paddingLeft: "15px" }}>
        <img src={storage} alt="storage" style={{ width: "80%" }}></img>
        <p style={{ fontSize: "14px", marginLeft: "8px", marginTop: "-3px" }}>
          15GB 중 10.32GB 사용
        </p>
        <button
          style={{
            background: "none",
            width: "130px",
            height: "35px",
            color: "#1A73e8",
            fontSize: "14px",
            marginLeft: "8px",
            border: "1px solid #e0e0e0",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          저장용량 구매
        </button>
      </div>
    </div>
  );
};
export default Category;
