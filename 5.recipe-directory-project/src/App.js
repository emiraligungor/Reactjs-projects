import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'


//page components
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

//styles
import './App.css';



function App() {

  const {mode} = useTheme()

  return (
    <Router>
    <div className= {`App ${mode}`} >
      
    <Navbar/>
    <ThemeSelector/>
    <Routes>

    <Route path='/' element = {<Home />}>Home</Route>
    <Route path='/create' element = {<Create />}>Create</Route>
    <Route path='/search' element = {<Search />}>Search</Route>
    <Route path='/recipes/:id' element = {<Recipe />}>Recipe</Route>

    </Routes>
    </div>
    </Router>
    
  );
}

export default App;
