import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Showbooks from './pages/Showbooks';
import Createbooks from './pages/Createbooks';
import Deletebooks from './pages/Deletebooks';
import Editbooks from './pages/Editbooks';
import Header from './pages/Header';

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/books/details/:id' Component={Showbooks}/>
        <Route path='/books/create' Component={Createbooks}/>
        <Route path='/books/delete/:id' Component={Deletebooks}/>
        <Route path='/books/update/:id' Component={Editbooks}/>
      </Routes>
    </Router>
  );
}

export default App;
