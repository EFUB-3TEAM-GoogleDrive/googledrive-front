import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ico_folder_location from "../ico/ico_folder_location.svg";
import ico_shortcut from "../ico/ico_shortcut.svg";
import ico_move from "../ico/ico_move.svg";
import ico_special from "../ico/ico_special.svg";
import ico_arrow_right_g from "../ico/ico_arrow_right_g.svg";
import ico_download from "../ico/ico_download.svg";
import ico_duplicate from "../ico/ico_duplicate.png";
import ico_contact_app from "../ico/ico_contact_app.png";
import ico_offline from "../ico/ico_offline.png";
import ico_preview from "../ico/ico_preview.png";
import ico_plus from "../ico/ico_plus.png";
import ico_link from "../ico/ico_link.svg";
import ico_share from "../ico/ico_share.svg";
import ico_rename from "../ico/ico_rename.svg";
import ico_delete from "../ico/ico_delete.svg";
import ico_help from "../ico/ico_help.svg";
import ico_bad from "../ico/ico_bad.png";
import { useDispatch } from "react-redux";
import {
  deleteFile,
  deleteFolder,
  deleteRecommend,
} from "../store/actions/action";

const Menu = styled.div`
  width: 380px;
  position: absolute;
  top: ${(props) =>
    window.innerHeight - props.y < 450 ? props.y - 450 : props.y}px;
  left: ${(props) =>
    window.innerWidth - props.x <= 380 ? props.x - 380 : props.x}px;

  font-size: 17px;
`;

const Icon = styled.img`
  cursor: pointer;
  margin-right: 22px;
  width: 18px;
  height: 18px;
`;
const IconArrow = styled.img`
  transition: 300ms;
  margin-left: 17px;
  padding: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  :hover {
    background-color: #ccc;
  }
`;

const OptionList = styled.ul`
  margin: 0px;
  padding: 20px 0px;
  list-style: none;
  border-radius: 7px;
  box-shadow: 1px 1px 20px -10px #000;
  background-color: #ffffff;
`;
const OptionItem = styled.li`
  cursor: pointer;
  padding: 8px 40px 8px 35px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: #f1f1f1;
  }
`;
const SubOptionList = styled.ul`
  width: 380px;
  position: absolute;
  top: 0px;
  right: -380px;
  margin: 0px;
  padding: 20px 0px;
  list-style: none;
  border-radius: 7px;
  box-shadow: 1px 1px 20px -10px #000;
  background-color: #ffffff;
`;
const Line = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0px;
  width: 100%;
  border-bottom: 1px solid #cccccc;
`;

const borderLeft = {
  borderLeft: "1px solid #cccccc",
};

const optionMain = [
  { id: 1, title: "????????????", img: ico_preview, link: "" },
  {
    id: 2,
    title: "?????? ???",
    img: ico_contact_app,
    link: "",
    slice_h: true,
    subId: 1,
  },
  { id: 3, title: "??????", img: ico_share, link: "" },
  { id: 4, title: "?????? ??????", img: ico_link, link: "" },
  {
    id: 5,
    title: "?????? ?????? ??????",
    img: ico_folder_location,
    link: "",
  },
  {
    id: 6,
    title: "??????????????? ???????????? ??????",
    img: ico_shortcut,
    link: "",
    subId: 2,
    func: ico_help,
  },
  {
    id: 7,
    title: "??????",
    img: ico_move,
    link: "",
  },
  {
    id: 8,
    title: "?????? ???????????? ??????",
    img: ico_special,
    link: "",
  },
  {
    id: 9,
    title: "?????????????????? ?????? ??????",
    img: ico_offline,
    link: "",
  },
  { id: 10, title: "?????? ?????????", img: ico_rename, link: "", slice_h: true },
  { id: 11, title: "???????????????", img: ico_duplicate, link: "" },
  { id: 12, title: "????????????", img: ico_download, link: "", slice_h: true },
  { id: 13, title: "??????", img: ico_delete, link: "" },
  { id: 14, title: "????????? ????????? ??????", img: ico_bad, link: "" },
];
const optionSub = {
  1: [{ id: 1, title: "????????? ??? ?????????", img: ico_plus, link: "" }],
  2: [
    {
      id: 1,
      text: "???????????? ???????????? ??????????????? ???????????? 1??? ????????? ????????? ????????? ??? ????????????.",
      subTitle: "????????? ????????????",
      link: "",
    },
  ],
};

const FileRightClick = ({ x, y, selectedType, selectedId, close }) => {
  const [mainId, setMainId] = useState(-1);
  const [subId, setSubId] = useState(-1);
  const boundary = window.innerWidth - x <= 680;
  useEffect(() => {
    setMainId(-1);
    setSubId(-1);
  }, [x, y]);

  const onClickMain = (_mainId, _subId = -1) => {
    setMainId(_mainId);
    setSubId(_subId);
    if (_mainId === 13) {
      handleDelete(selectedType, selectedId);
    }
  };
  const delayAppear = (_mainId, _subId) =>
    setTimeout(() => {
      setMainId(_mainId);
      setSubId(_subId);
    }, 600);

  const onMouseOverArrow = (_mainId, _subId) => {
    delayAppear(_mainId, _subId);
  };

  const dispatch = useDispatch();
  const handleDelete = (type, id) => {
    if (type === "recommend") {
      deleteRecommend(dispatch, id);
    } else if (type === "folder") {
      deleteFolder(dispatch, id);
    } else {
      deleteFile(dispatch, id);
    }
    close();
  };

  return (
    <Menu x={x} y={y}>
      <OptionList>
        {optionMain.map((main, midx) => (
          // <li> main items

          <OptionItem
            key={midx}
            onClick={() => onClickMain(main.id, main.subId)}
            style={main.slice_h ? { marginBottom: "20px" } : null}
          >
            {/* main items left contents */}

            <div style={{ display: "flex", alignItems: "center" }}>
              <Icon
                alt=""
                style={main.img ? null : { opacity: 0 }}
                src={main.img}
              />
              {main.title}
            </div>

            {main.slice_h && <Line></Line>}
            {/* main items right contents */}

            {main.subId && (
              <div style={main.slice_v ? borderLeft : null}>
                {main.subId !== 2 ? (
                  <IconArrow
                    alt="arrow"
                    src={ico_arrow_right_g}
                    onMouseOver={() => onMouseOverArrow(main.id, main.subId)}
                  />
                ) : (
                  <Icon
                    src={main.func}
                    style={{ margin: "0px 0px 0px 17px" }}
                    onMouseOver={() => onMouseOverArrow(main.id, main.subId)}
                  />
                )}
              </div>
            )}
            {main.id === mainId && main.subId && main.subId === subId && (
              // <li> sub items

              <SubOptionList style={boundary ? { left: "-380px" } : null}>
                {optionSub[main.subId].map((sub, sidx) => (
                  <OptionItem
                    key={sidx}
                    style={
                      sub.slice_h
                        ? { display: "block", marginBottom: "20px" }
                        : { display: "block" }
                    }
                  >
                    <Icon
                      alt=""
                      style={sub.img ? null : { display: "none" }}
                      src={sub.img}
                    />
                    {sub.title}
                    {main.func && (
                      <>
                        <div
                          style={{
                            height: "110px",
                            fontSize: "16px",
                            color: "#666",
                          }}
                        >
                          {sub.text}
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            bottom: "5px",
                            right: "20px",
                            color: "#0000ee",
                          }}
                        >
                          {sub.subTitle}
                        </div>
                      </>
                    )}
                  </OptionItem>
                ))}
              </SubOptionList>

              // </li> sub items
            )}
          </OptionItem>
          //  </li> main items
        ))}
      </OptionList>
    </Menu>
  );

  // /**
  //  * ??????/?????? ????????? ??? ????????? ?????? ?????????????????? ?????????.
  //  */
  // const FileRightClick = ({ x, y, selectedType, selectedId }) => {
  //   const dispatch = useDispatch();
  //   const handleDelete = (type, id) => {
  //     if (type === "recommend") {
  //       deleteRecommend(dispatch, id);
  //     } else if (type === "folder") {
  //       deleteFolder(dispatch, id);
  //     } else {
  //       deleteFile(dispatch, id);
  //     }
  //   };

  //   return (
  //     <Menu x={x} y={y} onClick={() => handleDelete(selectedType, selectedId)}>
  //       ?????? ?????????
  //     </Menu>
  //   );
  // >>>>>>> Stashed changes
};

export default FileRightClick;
