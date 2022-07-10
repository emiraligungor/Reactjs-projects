import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { Navigate } from "react-router-dom";
//components
import Navbar from './components/Navbar'

//routes
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const {authIsReady, user} = useAuthContext();
  return (
    <Router>
      {authIsReady && (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />}/>
          <Route path="login" element={!user ? <Login /> : <Navigate to="/" />}/>
          <Route path="signup" element={!user ? <Signup /> : <Navigate to="/" />}/>
          
        </Routes>
      </div> )}
    </Router>
  );
}

export default App;
