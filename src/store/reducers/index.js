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

export const initialState = {
  recommend: [
    { id: 1, content: "file1", order: 1, icon: excel, thumbnail: colabImg },
    { id: 2, content: "file2", order: 2, icon: document, thumbnail: colabImg },
    { id: 3, content: "file3", order: 3, icon: pdf, thumbnail: colabImg },
    { id: 4, content: "file4", order: 4, icon: video, thumbnail: colabImg },
    { id: 5, content: "file5", order: 5, icon: table, thumbnail: colabImg },
  ],
  file: [
    { id: 1, content: "file1", order: 1 },
    { id: 2, content: "file2", order: 2 },
    { id: 3, content: "file3", order: 3 },
    { id: 4, content: "file4", order: 4 },
    { id: 5, content: "file5", order: 5 },
    { id: 6, content: "file6", order: 6 },
    { id: 7, content: "file7", order: 7 },
    { id: 8, content: "file8", order: 8 },
    { id: 9, content: "file9", order: 9 },
    { id: 10, content: "file10", order: 10 },
  ],
  folder: [
    { id: 1, content: "folder1", order: 1 },
    { id: 2, content: "folder2", order: 2 },
    { id: 3, content: "folder3", order: 3 },
    { id: 4, content: "folder4", order: 4 },
    { id: 5, content: "folder5", order: 5 },
  ],
  trash: [],
};

const rootReducer = combineReducers({
  recommend: recommendReducer,
  file: fileReducer,
  folder: folderReducer,
});

export default rootReducer;
