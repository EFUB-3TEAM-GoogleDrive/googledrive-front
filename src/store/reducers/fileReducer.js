import { SWITCH_FILE, DELETE_FILE } from "../actions/action";
import { initialState } from "./index";

export default function fileReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_FILE:
      const dragBox = state.file.find((box) => box.id === action.dragId);
      const dropBox = state.file.find(
        (box) => box.id === Number(action.targetId)
      );

      const dragBoxOrder = dragBox?.order;
      const dropBoxOrder = dropBox?.order;

      const newBoxState = state.file.map((box) => {
        if (box.id === action.dragId) {
          box.order = dropBoxOrder;
        }
        if (box.id === action.targetId) {
          box.order = dragBoxOrder;
        }
        return box;
      });
      return newBoxState;
    case DELETE_FILE:
      return { ...state, file: newBoxState };
    default:
      return state;
  }
}
