import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import navSettings from '../../config/nav-settings.json';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import propTypes from 'prop-types';

const publicUrl = process.env.PUBLIC_URL;

const styles = {
  root: {
    flexGrow: 1,
    color: 'white'
  },
  menuItem: {
    textDecoration: 'none',
    color: 'white'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Nav extends Component {

  render(){
    const { classes } = this.props as any;

    return (
      <AppBar className = {classes.root} >
        <Toolbar>
        <MenuItem className ={classes.menuItem}>
          <Menu />
        </MenuItem>

        {navSettings.topNav.map((nav) => (
          <Link key={nav.path} title ={nav.title} to={nav.path} className ={classes.menuItem} >
            <MenuItem key={nav.path} className ={classes.menuItem}  >
            {nav.text}
            </MenuItem>
          </Link>
        ))}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Nav);
