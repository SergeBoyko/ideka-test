import * as actionTypes from "../store/actionType";

const initialState = {
  tweetAbout: "Donald Trump"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_PERSON:
      return {
        ...state,
        tweetAbout: action.payload.person
      };
    default:
      return state;
  }
};

export default reducer;
