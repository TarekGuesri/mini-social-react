import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { logout } from 'src/actions/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ isAuthenticated, loading, logoutAction }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    logoutAction();
  };

  if (loading) {
    return <></>;
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.navbarButton}>
            <Button
              color="secondary"
              className={classes.navbarButton + ' ' + classes.active}
            >
              <Typography variant="h4" style={{ marginRight: '2rem' }}>
                M-Social
              </Typography>
            </Button>
          </Link>

          <Link to="/" className={classes.navbarButton}>
            <Button color="secondary">Home</Button>
          </Link>

          <Link to="/posts" className={classes.navbarButton}>
            <Button color="secondary">Posts</Button>
          </Link>

          <div className={classes.title}></div>

          {isAuthenticated ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
              </Menu>
            </div>
          ) : (
            <>
              <Link to="/login" className={classes.navbarButton}>
                <Button color="secondary">Sign in</Button>
              </Link>
              |
              <Link to="/signup" className={classes.navbarButton}>
                <Button color="secondary">Sign up</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const constDispatchToProps = (dispatch) => ({
  logoutAction: bindActionCreators(logout, dispatch),
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, constDispatchToProps)(NavBar);
