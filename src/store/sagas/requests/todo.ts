import axios from "axios";

export function requestGetTodos() {
  return axios.request({
    method: "GET",
    url: "/api/todos",
  });
}
