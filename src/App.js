import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <Router>
      <SideBar />
      <NavBar />
    </Router>
  );
}

export default App;
