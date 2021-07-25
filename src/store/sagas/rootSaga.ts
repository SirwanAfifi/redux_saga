import { takeLatest } from "redux-saga/effects";
import { GET_TODOS } from "../actions/types";
import { handleGetTodos } from "./handlers/todo";

export function* watcherSaga() {
  yield takeLatest(GET_TODOS, handleGetTodos);
}
