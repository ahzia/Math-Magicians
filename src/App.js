import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Pages/Home';
import Quote from './Pages/Quote';
import CalculatorPage from './Pages/CalculatorPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
        <h3 className="text-first">Math Magicianss</h3>
        <nav>
          <ul>
            <li>
              <Link to="/" className="text-first">Home</Link>
            </li>
            <li>
              <Link to="/quote" className="text-first">Quote</Link>
            </li>
            <li>
              <Link to="/calculator" className="text-first">Calculator</Link>
            </li>
          </ul>
        </nav>
      </header>
        <Switch>
          <Route path="/calculator">
            <CalculatorPage />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
