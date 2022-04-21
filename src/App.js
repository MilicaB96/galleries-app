import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "./store/auth/selectors";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { getMyProfile, logout, setUser } from "./store/auth/slice";
import Register from "./pages/Register";
import MyGalleries from "./pages/MyGalleries";
import UserGalleries from "./pages/UserGalleries";
import ViewGallery from "./components/ViewGallery";
import CreateNewGallery from "./pages/CreateNewGallery";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  useEffect(() => {
    if (isAuthenticated) dispatch(getMyProfile());
    else dispatch(setUser(""));
  }, [isAuthenticated]);
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
                  Create New Gallery
                </Link>
              </li>
            )}
            {isAuthenticated && (
              <li className='nav-item'>
                <button className='btn' onClick={() => dispatch(logout())}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <PublicRoute path='/login'>
            <Login />
          </PublicRoute>
          <PublicRoute path='/register'>
            <Register />
          </PublicRoute>
          <PrivateRoute exact path='/my-galleries'>
            <MyGalleries />
          </PrivateRoute>
          <Route exact path='/authors/:id'>
            <UserGalleries />
          </Route>
          <Route exact path='/galleries/:id'>
            <ViewGallery />
          </Route>
          <PrivateRoute exact path='/create'>
            <CreateNewGallery />
          </PrivateRoute>
          <PrivateRoute path='/edit-gallery/:id'>
            <CreateNewGallery />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
