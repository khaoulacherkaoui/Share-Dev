import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SimpleMenu from './components/menu/Menu';
import Menu from './components/menu/Menu';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Router>
 
  );
}

export default App;
