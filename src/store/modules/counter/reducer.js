import { COUNTER_ADD, COUNTER_SUB } from "./actionTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case COUNTER_ADD:
      return state + action.payload;

    case COUNTER_SUB:
      return state - action.payload;

    default:
      return state;
  }
};

export default counterReducer;
