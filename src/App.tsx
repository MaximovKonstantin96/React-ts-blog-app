import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import { getIsAuthorized } from './redux/auth/selectors';
import { useSelector } from 'react-redux';

function App() {
  const isAuthorized = useSelector(getIsAuthorized);

  return (
    <BrowserRouter>
      {!isAuthorized && (
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="*" exact component={NotFoundPage} />
        </Switch>
      )}

      {isAuthorized && (
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="*" exact component={NotFoundPage} />
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
