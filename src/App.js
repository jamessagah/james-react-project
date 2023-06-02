import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contacts from './components/pages/Contacts';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    
   <Router>
    <Navbar/>
     <Routes><Route path='/'exact Component={Home}/>
     <Route path='/services' Component={Services}/>
     <Route path='/contacts' Component={Contacts}/>
     <Route path='/sign-up' Component={SignUp}/>
     </Routes>
    </Router>   
  );
}
export default App;
