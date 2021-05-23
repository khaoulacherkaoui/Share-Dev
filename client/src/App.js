import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home';

import Register from '../src/components/registrationForm/RegistrationForm';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Login from './pages/login/Login';
import Post from './components/post/Post';
import Messenger from "./pages/messenger/Messenger";
import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  
  return (
      
    <Provider store={store}>
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/landing" component={Landing} />
          <Route exact path='/' component={Home}/>
          <Route exact path='/post' component={Post}/>
          <Route exact path='/messenger' component={Messenger}/>
          <Route component={Routes} />
          <Route exact path='/post' component={Post}/>
        </Switch>
      </Fragment>
    </Router>
  </Provider>
 
  );
}

export default App;
