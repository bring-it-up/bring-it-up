import './App.css';
import Navigation from "./components/Navigation";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';
import { ReactElement } from 'react';

function App(): ReactElement {
  return (
    <div>
    <div>
      {/* for navbar */}
      <Router>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/services' component={Services} />
        </Switch>
      </Router>
      {/* end navbar */} 
      </div>
  </div>
  );
}

export default App;
