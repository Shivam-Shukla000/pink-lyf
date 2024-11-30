import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Magazines from "./views/Magazines";
import About from "./views/About";

import Layouts from "./Layouts";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="magazines" element={<Magazines />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
