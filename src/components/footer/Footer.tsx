import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  main: {
    backgroundColor: '#f2f2f2',
    'text-align': 'center',
    color: '#888',
    padding: '1rem'
  }
}
class Footer extends Component {
  render(){
    const { classes} = this.props as any;
    return (
      <footer className = {classes.main}>
      ©Sabalan. All Rights Reserved
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
