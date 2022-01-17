import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
function App() {
  function CommonDashboard() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }
  function getAuthState(){
    return localStorage.getItem("accessToken");
  }
  function RequireAuth() {
    let auth = getAuthState();
    if (!auth) {
      return <Navigate to="/login" />;
    }

    return <CommonDashboard />;
  }
  function LoginState(){
    let auth = getAuthState();
    if (!auth) {
      return <Login />;
    }

    return <Navigate to="/students" />;
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route path="students" element={<RequireAuth />}>
              <Route path=":id" element={<Dashboard />} />
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="login" element={<LoginState />} />
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
