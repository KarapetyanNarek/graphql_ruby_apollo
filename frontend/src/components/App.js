import React from 'react';
import './App.css';
import Header from './header/Header';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import Employees from './employees/Employees';
import Companies from './companies/Companies';
import AddCompany from './companies/addCompany';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/companies' render={() => <Companies />} />
      <Route exact path='/companies/addcompany' render={() => <AddCompany />} />
      <Route exact path='/employees' render={() => <Employees />} />
    </div>
  );
}

export default App;
