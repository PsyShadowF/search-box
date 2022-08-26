import React from "react";
import SearchBox from "./SearchBox.js";
import data from "./Data.json";
import "./App.css";

function App() {
  return (
    <SearchBox
      placeholder="Insira o nome de um animal..."
      data={data}
    />
  )
}

export default App
