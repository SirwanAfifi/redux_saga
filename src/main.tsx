import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { getTodos } from "./api/todos";
import App from "./App";

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  createServer({
    routes() {
      this.get("/api/todos", () => ({
        todos: getTodos(100),
      }));
    },
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
