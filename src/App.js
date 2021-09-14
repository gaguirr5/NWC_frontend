import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Custom.css';
import Footer from "./Components/Footer/Footer";
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import WhyTheNWCMatters from "./Pages/WhyTheNWCMatters/WhyTheNWCMatters";
import MappingNWC from "./MappingNWC/MappingNWC";
import DiscoverNWCStories from "./DiscoverNWCStories/DiscoverNWCStories";
import HowToContribute from "./HowToContribute/HowToContribute";
import About from "./Pages/AboutProject/About";

function App() {
  return (
    <Router className="App">
      <Navigation/>

      <Switch>
        <Route path = "/MappingNWC">
          <MappingNWC/>
        </Route>
        <Route path = "/DiscoverNWCStories">
          <DiscoverNWCStories/>
        </Route>
        <Route path = "/HowToContribute">
          <HowToContribute/>
        </Route>
        <Route path = "/WhyTheNWCMatters">
          <WhyTheNWCMatters/>
        </Route>
        <Route path = "/About">
          <About></About>
        </Route>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>

      <Footer/>
    </Router> 
  );
}

export default App;