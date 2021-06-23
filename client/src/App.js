import './App.css';
import {Switch, Route} from 'react-router-dom'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Instructors from './pages/Instructors';
import Membership from './pages/Membership';
import Members from './pages/Members';
import GlobalStyle from './GlobalStyle';
import AuthRoute from './AuthRouter';

function App() {
  return (
    <div className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/login" exact component={Auth}/>
          <AuthRoute path="/" exact component={Dashboard} />
          <AuthRoute path="/instructors" exact component={Instructors} />
          <AuthRoute path="/membership" exact component={Membership} />
          <AuthRoute path="/members" exact component={Members} />
        </Switch>
    </div>
  );
}

export default App;
