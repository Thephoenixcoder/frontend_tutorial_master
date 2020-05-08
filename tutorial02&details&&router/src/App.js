import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Posts from './components/Post'
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Navbar/>
       {/* it mean i can only used one of them not all in same time  does it match thins one yes/no when yes get out from route */}
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/:post_id" component={Posts}/>
       </Switch>
      

      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
