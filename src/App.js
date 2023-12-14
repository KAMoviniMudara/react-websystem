import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import AdminLogin from './Pages/AdminLogin';
import Reports from './Pages/Reports';
import Issues from './Pages/Issues';
import Categories from './Pages/Categories';
import UserLogin from './Pages/UserLogin';
import AddIssues from './Pages/AddIssues';
import ResolvedIssues from './Pages/ResolvedIssues';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/AdminLogin">
            <AdminLogin />
          </Route>
          <Route path="/UserLogin">
            <UserLogin />
          </Route>
          <Route path="/Reports">
            <Reports />
          </Route>
          <Route path="/Issues">
            <Issues />
          </Route>
          <Route path="/Categories">
            <Categories />
         </Route>
          <Route path="/AddIssues">
            <AddIssues/>
          </Route>
          <Route path="/ResolvedIssues">
            <ResolvedIssues/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
