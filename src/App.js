import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (    
     <div>
       <BrowserRouter>

       <Route exact path='/' component={Home}/>

       <Route path = '/about' component={About}/>

       <Route path = '/contact' component={Contact}/>
       
       
       </BrowserRouter>

     </div>
     
    
  );
}

export default App;
