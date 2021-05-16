import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Alert from './components/layout/Alert'
import Profile from './pages/profile/Profile';
import Messenger from "./pages/messenger/Messenger";

// Redux
import { Provider } from 'react-redux';
import store from './store';
import {loadUser}from './actions/auth'
import './App.css';
import setAuthToken from './utils/setAuthToken'


if(localStorage.token){
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  },[]);
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/messenger' component={Messenger}/>
        <section>
          <Alert/>
          <Route exact path='/login' component={Login}/>
        </section>
       
      </Switch>
    </Router>
    </Provider>
 
  );
}

export default App;
