import './App.css';
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';
import FirstDropdown from "./components/FirstDropdown";
import { ReactElement } from 'react';
import ServiceCard from './components/ServiceCard';
import Service from './Service';
import SearchBar from './components/SearchBar';
import TestService from "./components/TestService";

// var tags: string[] = ["a", "b", "c"];
// var arr: string[] = ["a", "b", "c"];

// let serv = new Service("UBC Student Assistance Program (SAP)", "Vancouver, BC", "UBC", "a", "a", "a", arr, true, "a", arr, false, arr, "a", "a");


function App(): ReactElement {
  return (
    <div>
      {/* for navbar */}
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route path='/services/:ServiceID' component={TestService} />
        </Switch>
      </Router>
      {/* end navbar */}
      <FirstDropdown str="category 1" options={["1", "2", "3"]}></FirstDropdown>
    </div>
  );
}

export default App;
