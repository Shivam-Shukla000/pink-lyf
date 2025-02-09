import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Magazines from "./views/Magazines";
import About from "./views/About";

import Layouts from "./Layouts";
import Video from "./views/Video";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="magazines" element={<Magazines />} />
          <Route path="about" element={<About />} />
          <Route path="video" element={<Video />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
