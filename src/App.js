import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Students from "./pages/students";
import Student from "./pages/students/Student";
import NotFound from "./pages/NotFound";
import Layout from "./Layout"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  function getAuthState(){
    return localStorage.getItem("accessToken");
  }
  function LayoutWrapper() {
    let auth = getAuthState();
    if (!auth) {
      return <Navigate to="/login" />;
    }

    return <Layout />;
  }
  function LoginWrapper(){
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
            <Route path="students" element={<LayoutWrapper/>}>
              <Route path=":rollNo" element={<Student />} />
              <Route index element={<Students />} />
            </Route>
            <Route path="login" element={<LoginWrapper/>} />
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
