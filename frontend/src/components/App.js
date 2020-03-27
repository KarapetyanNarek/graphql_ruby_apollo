import React from 'react';
import './App.css';
import Header from './header/Header';
import { Route } from 'react-router-dom';
import Home from './home/Home';
import Employees from './employees/Employees';
import Companies from './companies/Companies';
import AddCompany from './companies/addCompany';
import ShowCompany from './companies/showCompany';
import EditCompany from './companies/editCompany';
import ShowEmployee from './employees/showEmployee';
import AddEmployee from './employees/addEmployee';
import EditEmployee from './employees/editEmployee';



function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/companies' render={() => <Companies />} />
      <Route exact path='/companies/addcompany' render={() => <AddCompany />} />
      <Route path='/companies/show/:id' render={props => <ShowCompany {...props}/>} />
      <Route path='/companies/edit/:id' render={props => <EditCompany {...props}/>} />
      <Route exact path='/employees' render={() => <Employees />} />
      <Route exact path='/addemployee' render={() => <AddEmployee />} />
      <Route path='/employees/show/:id' render={props => <ShowEmployee {...props}/>} />
      <Route path='/employees/edit/:id' render={props => <EditEmployee {...props}/>} />
    </div>
  );
}

export default App;
