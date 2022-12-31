import React from "react";

import "./App.css";
import AddComment from "./components/AddComment";
import CommentsList from "./components/CommentsList";

import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <div className="container">
        <CommentsList data={data} />
        <AddComment />
      </div>
    </div>
  );
}

export default App;
