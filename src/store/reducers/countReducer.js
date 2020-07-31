import { ACTIONS } from "../actions/countActions";

const initialState = {
  count: 0,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        count: state.count + 1,
      };

    case ACTIONS.DECREMENT:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};
