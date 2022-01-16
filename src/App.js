import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route,Outlet,Navigate } from "react-router-dom";
function App() {
  function RequireAuth() {
    let auth = localStorage.getItem('accessToken');
    if (!auth) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/"  />;
    }
  
    return <Outlet />;
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/student" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
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
