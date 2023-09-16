import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Button from "./Components/Button";
import Grid from "./Components/Grid";
import Search from "./Components/Search";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => {
        console.log(res.data);
        setPhotos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Search />
      <Routes>
        <Route path="/" exact element={<Grid photos={photos} />} />
      </Routes>
      <Button />
    </div>
  );
};

export default App;
