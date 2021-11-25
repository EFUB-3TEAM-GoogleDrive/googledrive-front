import { SWITCH_FOLDER, DELETE_FOLDER } from "../actions/action";
import { initialState } from "./index";

export default function folderReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_FOLDER:
      const dragBox = state.folder.find((box) => box.id === action.dragId);
      const dropBox = state.folder.find(
        (box) => box.id === Number(action.targetId)
      );

      const dragBoxOrder = dragBox?.order;
      const dropBoxOrder = dropBox?.order;

      const newBoxState = state.folder.map((box) => {
        if (box.id === action.dragId) {
          box.order = dropBoxOrder;
        }
        if (box.id === action.targetId) {
          box.order = dragBoxOrder;
        }
        return box;
      });
      return { ...state, folder: newBoxState };
    case DELETE_FOLDER:
      const deletedFolder = state.folder.find((box) => box.id === action.id);
      const newFolderState = state.folder.filter((box) => box.id !== action.id);
      const newTrashState = state.trash.concat(deletedFolder);
      return { ...state, folder: newFolderState, trash: newTrashState };
    default:
      return state;
  }
}
