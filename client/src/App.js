import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SimpleMenu from './components/menu/Menu';
import Menu from './components/menu/Menu';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Alert from './components/layout/Alert'

// Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';


function App() {

  return (
    <Provider store={store}>
      <Router>
        <Alert/>
        <Switch>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
    </Provider>
 
  );
}

export default App;
