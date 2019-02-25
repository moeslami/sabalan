import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
const { SocialIcon } = require('react-social-icons');

const styles = {
  root: {
    backgroundColor: '#f2f2f2',
    'text-align': 'center',
    color: '#888',
    padding: '1rem',
  },
  powered: {
    'text-align': 'right'
  },
  social:{
    display: 'flex',
    '& .social-icon':{
      margin: 'auto 0.5rem'
    }
  }
}
class Footer extends Component {
  render() {
    const { classes } = this.props as any;

    return (
      <footer className={classes.root}>
        <div className={classes.social}>
          <SocialIcon url="https://github.com/moeslami" />
          <SocialIcon url="https://www.linkedin.com/in/mohammadeslami/" />
          <SocialIcon url="https://twitter.com/mheslami" />
        </div>
        <div className={classes.powered}>Powered by ©Sabalan. All Rights Reserved</div>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
