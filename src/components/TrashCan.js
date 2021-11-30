import React from "react";
import styled from "styled-components";
import trashcan from "../assets/trashcan.png"

const Warning = styled.div`
  padding:5px 15px 5px 15px;
  display: flex;
  background-color: #f1f3f4;
  height:45px;
  font-size: 15px;
  width: 97%;
  flex-direction:row;
  justify-content: space-between;
  border-radius: 10px;
`

const TrashCan = () => {
  return <div>
    <Warning>
      <p>휴지통에 있는 항목이 30일 후  완전히 삭제됩니다.</p>
      <p>휴지통  비우기</p>
    </Warning>
    <div style={{paddingTop:"10%", textAlign:"center", fontSize:"14px"}}>
    <img style={{width:"200px"}} alt="쓰레기통" src={trashcan}/>
    <p style={{fontSize: "18px"}}>항목 없음</p>
    <p>휴지통으로 이동한 항목이 여기에 표시됩니다.</p>
    <p style={{color:"#1A73e8"}}>자세히 알아보기</p>
    </div>
  </div>;
};

export default TrashCan;
