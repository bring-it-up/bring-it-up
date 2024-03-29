import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Home from './components/Home';
import { ReactElement } from 'react';
import FullServicePage from './components/FullServicePage';

// TODO: unimplemented app routes for phase 1
const AppRoutes = (): ReactElement => {
	return (
		<>
		<Route exact path='/about' component={About} />
		<Route exact path='/services' component={Services} />
		</>
	);
};

function App(): ReactElement {
	return (
		<div>
			<Router>
				<Navigation />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/services/:ServiceID' component={FullServicePage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
