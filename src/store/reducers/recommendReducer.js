import { SWITCH_RECOMMEND, DELETE_RECOMMEND } from "../actions/action";
import { initialState } from "./index";

export default function recommendReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_RECOMMEND:
      const dragBox = state.recommend.find((box) => box.id === action.dragId);
      const dropBox = state.recommend.find(
        (box) => box.id === Number(action.targetId)
      );

      const dragBoxOrder = dragBox?.order;
      const dropBoxOrder = dropBox?.order;

      const newBoxState = state.recommend.map((box) => {
        if (box.id === action.dragId) {
          box.order = dropBoxOrder;
        }
        if (box.id === action.targetId) {
          box.order = dragBoxOrder;
        }
        return box;
      });
      return { ...state, recommend: newBoxState };
    case DELETE_RECOMMEND:
      return state;
    default:
      return state;
  }
}
