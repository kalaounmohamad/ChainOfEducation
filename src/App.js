import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import TopBar from "./Components/TopBar/TopBar";
import Biology from "./Components/biology";
import Chemistry from "./Components/chemistry";
import Math from "./Components/math";
import Physics from "./Components/physics";
import Economics from "./Components/economics";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/biology" element={<Biology />} />
          <Route path="/chemistry" element={<Chemistry />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/math" element={<Math />} />
          <Route path="/economics" element={<Economics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
