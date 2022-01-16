import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

      {/* <Header/> */}
      {/* <Header/>
      <Content/> */}
      {/* <Login/> */}
      {/* <Content/> */}
      {/* <StudentInformation/> */}
    </div>
  );
}

export default App;
