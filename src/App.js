import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "./store/auth/selectors";
import Home from "./pages/Home";

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispath = useDispatch();
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand bg-light'>
          <ul className='navbar-nav'>
            <span className='navbar-brand'>Galleries </span>
            <li className='nav-item'>
              <Link className='nav-link text-dark' to='/'>
                All Galleries
              </Link>
            </li>
            {!isAuthenticated && (
              <li className='nav-item'>
                <Link className='nav-link text-dark' to='/login'>
                  Login
                </Link>
              </li>
            )}
            {!isAuthenticated && (
              <li className='nav-item'>
                <Link className='nav-link text-dark' to='/register'>
                  Register
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className='nav-item'>
                <Link className='nav-link text-dark' to='/my-galleries'>
                  My Galleries
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className='nav-item'>
                <Link className='nav-link text-dark' to='/create'>
                  Create new Gallery
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className='nav-item'>
                <Link className='nav-link text-dark' to='/logout'>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
