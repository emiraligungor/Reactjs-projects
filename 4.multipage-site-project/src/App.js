import './App.css';
import {BrowserRouter as Router, Routes,Route, NavLink, Navigate} from 'react-router-dom'
//routes

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Article from "./pages/Article";


function App() {
  return (
    
    <Router>
      <div className="App">
      <nav>
        <h1>My Articles</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path='/' element = {<Home />}>Home</Route>
        <Route path='/about'element = {<About />}>About</Route>
        <Route path='/contact'element = {<Contact />}>Contact</Route>
        <Route path='/articles/:id'element = {<Article />}>Article</Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
