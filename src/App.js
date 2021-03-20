import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (    
     <div>
       <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/about' >About</Link>
            </li>
            <li>
              <Link to='/contact' >Contact</Link>
            </li>
          </ul>
        </nav>
        <hr/>
       <Route exact path='/' component={Home}/>

       <Route path = '/about' component={About}/>

       <Route path = '/contact' component={Contact}/>
       
       
       </BrowserRouter>

     </div>
     
    
  );
}

export default App;
