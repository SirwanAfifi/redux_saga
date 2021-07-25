import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "./store/actions/todo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return <>Hello</>;
}

export default App;
