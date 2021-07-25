import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { getTodos } from "./api/todos";
import App from "./App";
import { store } from "./store";

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  createServer({
    routes() {
      this.get("/api/users", () => ({
        users: [],
      }));
      this.get("/api/todos", () => ({
        todos: getTodos(100),
      }));
    },
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
