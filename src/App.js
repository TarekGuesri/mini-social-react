import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

// Pages
import Home from 'src/pages/Home';
import Posts from 'src/pages/Posts';
import NotFound from 'src/pages/NotFound';

// Components
import Navbar from 'src/components/layout/Navbar';
import MainLayout from 'src/components/layout/MainLayout';
import Footer from 'src/components/layout/Footer';

import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={Posts} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
