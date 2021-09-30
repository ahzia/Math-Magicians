import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Calculator from './components/Calculator';
import Home from './Pages/Home';
import Quote from './Pages/Quote';
import CalculatorPage from './Pages/CalculatorPage';
import './App.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
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
