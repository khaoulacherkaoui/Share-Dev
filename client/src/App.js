import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Alert from './components/layout/Alert'

// Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';


function App() {

  return (
<<<<<<< HEAD
    <Provider store={store}>
      <Router>
        <Alert/>
        <Switch>
          <Route exact path='/' component={Login}/>
        </Switch>
      </Router>
    </Provider>
=======
    <Router>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </Router>
>>>>>>> a24d7b69ae0019f2922f1e0e3b0e66d34022c6fa
 
  );
}

export default App;
