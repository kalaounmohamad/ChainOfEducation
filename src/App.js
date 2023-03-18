import logo from "./logo.svg";
import "./App.css";
import{BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Calculator from "./Components/Calculator";
import ColorButton from "./Components/ColorButton";
import { Car } from "./Components/Car";
import Home from "./Components/Home";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar/>

        <h1>Fixed header here</h1>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/colorbtn' element={<ColorButton/>}/>
          <Route path='/calculator' element={<Calculator number={13}/>}/>
          <Route path='/car' element={<Car color='Black'/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
