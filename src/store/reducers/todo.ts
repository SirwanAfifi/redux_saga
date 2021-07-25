import { ActionWithPayload } from "../../type/todo";
import { SET_TODOS } from "../actions/types";

export const todoReducer = (state = [], action: ActionWithPayload) => {
  switch (action.type) {
    case SET_TODOS:
      return [...state, ...action.todos];
    default:
      return state;
  }
};
