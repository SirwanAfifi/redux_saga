import { call, put, delay } from "redux-saga/effects";
import { ActionWithPayload } from "../../../type/todo";
import { setTodos } from "../../actions/todo";
import { requestGetTodos } from "../requests/todo";

export function* handleGetTodos(action: ActionWithPayload) {
  try {
    // yield delay(10000);
    const response: {
      data?: any;
    } = yield call(requestGetTodos);
    const {
      data: { todos },
    } = response;
    yield put(setTodos(todos));
  } catch (error) {
    console.log(error);
  }
}
