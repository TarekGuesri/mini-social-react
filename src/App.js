import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

import setAuthToken from 'src/utils/setAuthToken';

// Pages
import Home from 'src/pages/Home';
import Posts from 'src/pages/Posts';
import Post from 'src/pages/Post';
import PostCreate from 'src/pages/PostCreate';
import Login from 'src/pages/Login';
import Register from 'src/pages/Register';
import NotFound from 'src/pages/NotFound';

// Components
import Navbar from 'src/components/Layout/Navbar';
import MainLayout from 'src/components/Layout/MainLayout';
import Footer from 'src/components/Layout/Footer';
import PrivateRoute from 'src/components/routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import { LOGOUT } from './actions/types';

import './App.css';

// Setting Axios' base settings
axios.defaults.baseURL = 'http://localhost:5000/rest';
axios.defaults.headers.post['Content-Type'] = 'application/json';

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
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              {/* <Route path="/posts/create" component={PostCreate} /> */}
              <PrivateRoute exact path="/posts/create" component={PostCreate} />
              <Route path="/posts" component={Posts} />
              <Route path="/post/:id" component={Post} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Register} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
