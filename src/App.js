import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound';

function App() {
  return (    
     <BrowserRouter>
     <div>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About us</Link>
           </li>
           <li>
             <Link to="/contact">Contact</Link>
           </li>
         </ul>
       </nav>
       <hr/>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
         <Route component={NotFound}/>
       </Switch>
     </div>
     
     </BrowserRouter>
     
    
  );
}

export default App;
