import { combineReducers } from "redux";
import recommendReducer from "./recommendReducer";
import fileReducer from "./fileReducer";
import folderReducer from "./folderReducer";
import colabImg from "../../assets/colabImg.png";
import document from "../../assets/doc.svg";
import pdf from "../../assets/pdf.svg";
import excel from "../../assets/excel.svg";
import video from "../../assets/video.svg";
import table from "../../assets/table.svg";
import videothumbnail from "../../assets/videothumbnail.PNG";
import documentthumbnail from "../../assets/documentthumbnail.PNG";
import documentthumbnail2 from "../../assets/documentthumbnail2.PNG";
import tablethumbnail1 from "../../assets/tablethumbnail1.PNG";
import tablethumbnail2 from "../../assets/tablethumbnail2.PNG";
import excelthumbnail from "../../assets/excelthumbnail.png";
import pdfthumbnail from "../../assets/pdfthumbnail.PNG";
import foldericon from "../../assets/folder.png";
import folderthumbnail from "../../assets/deletedfolderthumbnail.PNG";

export const initialState = {
  recommend: [
    {
      id: 1,
      content: "지출",
      order: 1,
      icon: excel,
      thumbnail: excelthumbnail,
    },
    {
      id: 2,
      content: "회의록",
      order: 2,
      icon: document,
      thumbnail: documentthumbnail2,
    },
    { id: 3, content: "성적표", order: 3, icon: pdf, thumbnail: pdfthumbnail },
    {
      id: 4,
      content: "발표영상",
      order: 4,
      icon: video,
      thumbnail: videothumbnail,
    },
    {
      id: 5,
      content: "데이터",
      order: 5,
      icon: table,
      thumbnail: tablethumbnail2,
    },
  ],
  file: [
    {
      id: 1,
      content: "발표영상",
      order: 1,
      icon: video,
      thumbnail: videothumbnail,
    },
    {
      id: 2,
      content: "통합 자료",
      order: 2,
      icon: excel,
      thumbnail: excelthumbnail,
    },
    {
      id: 3,
      content: "11/29 회의록",
      order: 3,
      icon: document,
      thumbnail: documentthumbnail2,
    },
    {
      id: 4,
      content: "abc 자료 최종본",
      order: 4,
      icon: excel,
      thumbnail: excelthumbnail,
    },
    {
      id: 5,
      content: "테이블 데이터",
      order: 5,
      icon: table,
      thumbnail: tablethumbnail2,
    },
    {
      id: 6,
      content: "매뉴얼",
      order: 6,
      icon: pdf,
      thumbnail: pdfthumbnail,
    },
    {
      id: 7,
      content: "감상문",
      order: 7,
      icon: document,
      thumbnail: documentthumbnail,
    },
    {
      id: 8,
      content: "file8",
      order: 8,
      icon: excel,
      thumbnail: excelthumbnail,
    },
    {
      id: 9,
      content: "file9",
      order: 9,
      icon: table,
      thumbnail: tablethumbnail1,
    },
    {
      id: 10,
      content: "2학기 과제 제출",
      order: 10,
      icon: document,
      thumbnail: documentthumbnail,
    },
  ],
  folder: [
    {
      id: 1,
      content: "Classroom",
      order: 1,
      thumbnail: folderthumbnail,
      icon: foldericon,
    },
    {
      id: 2,
      content: "machineLearning",
      order: 2,
      thumbnail: folderthumbnail,
      icon: foldericon,
    },
    {
      id: 3,
      content: "content",
      order: 3,
      thumbnail: folderthumbnail,
      icon: foldericon,
    },
    {
      id: 4,
      content: "movies",
      order: 4,
      thumbnail: folderthumbnail,
      icon: foldericon,
    },
    {
      id: 5,
      content: "photo",
      order: 5,
      thumbnail: folderthumbnail,
      icon: foldericon,
    },
  ],
  trash: [],
};

const rootReducer = combineReducers({
  recommend: recommendReducer,
  file: fileReducer,
  folder: folderReducer,
});

export default rootReducer;
