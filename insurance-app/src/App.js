import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <>
        <Router>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </Router>
      </>
  );
}

export default App;
