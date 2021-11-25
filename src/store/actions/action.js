export const SWITCH_RECOMMEND = "SWITCH_RECOMMEND";
export const SWITCH_FILE = "SWITCH_FILE";
export const SWITCH_FOLDER = "SWITCH_FOLDER";
export const DELETE_RECOMMEND = "DELETE_RECOMMEND";
export const DELETE_FILE = "DELETE_FILE";
export const DELETE_FOLDER = "DELETE_FOLDER";

export const switchRecommend = (dispatch, dragId, targetId) => {
  dispatch({
    type: SWITCH_RECOMMEND,
    dragId,
    targetId,
  });
};

export const switchFile = (dispatch, dragId, targetId) => {
  dispatch({
    type: SWITCH_FILE,
    dragId,
    targetId,
  });
};

export const switchFolder = (dispatch, dragId, targetId) => {
  dispatch({
    type: SWITCH_FOLDER,
    dragId,
    targetId,
  });
};

export const deleteRecommend = (dispatch, id) => {
  dispatch({
    type: DELETE_RECOMMEND,
    id,
  });
};

export const deleteFile = (dispatch, id) => {
  dispatch({
    type: DELETE_FILE,
    id,
  });
};

export const deleteFolder = (dispatch, id) => {
  dispatch({
    type: DELETE_FOLDER,
    id,
  });
};
