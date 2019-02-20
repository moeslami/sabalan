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
import siteSettings from '../../config/site-settings.json';

const publicUrl = process.env.PUBLIC_URL;

const styles = {
  root: {
    flexGrow: 1,
    color: 'white'
  },
  imageProfile: {
    width: '64px;',
    height: '64px;',
    borderRadius: '32px;',
    margin: '0.5rem 0;'
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

class Header extends Component {

  render(){
    const { classes } = this.props as any;

    return (
      <AppBar className = {classes.root} >
        <Toolbar>
          <Link title ={navSettings.home.title} to={navSettings.home.path} className ={classes.menuItem} >
            <img className={classes.imageProfile} src={siteSettings.profile_image_path} />
          </Link>
        {/* <MenuItem className ={classes.menuItem}>
          <Menu />
        </MenuItem> */}

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

export default withStyles(styles)(Header);
