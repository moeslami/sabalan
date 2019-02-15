import React, {Component} from 'react';
import Nav from '../nav/Nav';
import './Header.scss';
export default class Header extends Component {
  render(){
    return (
      <header className="header">
        <Nav></Nav>
      </header>
    );
  }
}
