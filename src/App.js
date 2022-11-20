import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Header from "./components/Header";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Favoris from "./pages/Favoris";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [favoris, setFavoris] = useState([]);
  const newFavoris = [...favoris];

  const handleFavoris = (favoris) => {
    Cookies.set("favoris", JSON.stringify(newFavoris), { expires: 7 });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/comics"
          element={
            <Comics
              favoris={favoris}
              setFavoris={setFavoris}
              newFavoris={newFavoris}
              handleFavoris={handleFavoris}
            />
          }
        />
        <Route
          path="/characters"
          element={
            <Characters
              favoris={favoris}
              setFavoris={setFavoris}
              newFavoris={newFavoris}
              handleFavoris={handleFavoris}
            />
          }
        />
        <Route
          path="/comics/:characterId"
          element={
            <Character
              favoris={favoris}
              setFavoris={setFavoris}
              newFavoris={newFavoris}
              handleFavoris={handleFavoris}
            />
          }
        />
        <Route
          path="/favoris"
          element={
            <Favoris
              setFavoris={setFavoris}
              newFavoris={newFavoris}
              favoris={favoris}
              handleFavoris={handleFavoris}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
