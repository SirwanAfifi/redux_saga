import { Todo } from "../../type/todo";
import { GET_TODOS, SET_TODOS } from "./types";

export const getTodos = () => ({ type: GET_TODOS });
export const setTodos = (todos: Todo[]) => ({ type: SET_TODOS, todos });
