import React, {useState, createContext} from "react";
import "./App.css";
import Button from './Button';
import Users from './Users';
import UserDetails from './UserDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const ApiContext = createContext();

function App() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);


  return( 
  <div className='App'>
    <h1 style={{color: '#9B2335'}}>Random Users App</h1>
    
    <Router>
      <ApiContext.Provider value={{ setUsersData, setLoading, setError, usersData }}>
        <Switch>

          <Route path='/:uuid'>
            <UserDetails />
          </Route>

          <Route path='/'>
            <Button />
            {isLoading && <p>...loading</p>}
            {hasError && <p>Something went wrong!!!</p>}
            <div className='user-list'>
            {usersData.map(user => <Users user={user} key={user.login.uuid}/>)}
            </div>
          </Route>

        </Switch>
      </ApiContext.Provider>
    </Router>
  </div>
  )
}

export default App;
