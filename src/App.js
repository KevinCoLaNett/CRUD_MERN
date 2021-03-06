import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import {TodoList} from './components/TodoList';
import {CreateTodo} from './components/CreateTodo';
import {EditTodo} from './components/EditTodo';
import {DeleteTodo} from './components/DeleteTodo';

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Todo</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={TodoList}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/delete/:id" component={DeleteTodo}/>
        <Route path="/create" component={CreateTodo}/>
      </Switch>
    </div>
    
  );
}

export default App;
