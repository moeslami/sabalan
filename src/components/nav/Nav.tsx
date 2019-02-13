import React, { Component } from 'react';
import './luxbar.scss';
export default class Nav extends Component {

  render(){
    return (
      <div className="luxbar-menu luxbar-menu-right luxbar-menu-material-amber">
        <ul className="luxbar-navigation">
            <li className="luxbar-header">
                <a href="#" className="luxbar-brand">MyHomePage</a>
                <label className="luxbar-hamburger luxbar-hamburger-doublespin"
                data-id="luxbar-hamburger" data-for="luxbar-checkbox">
                  <span> </span>
                </label>
            </li>
            <li className="luxbar-item"><a href="#">Item 1</a></li>
            <li className="luxbar-item"><a href="#">Item 4</a></li>
            <li className="luxbar-item"><a href="#">sfdsdf</a></li>
            <li className="luxbar-item"><a href="#">sgsdgs</a></li>
        </ul>
    </div>
    );
  }
}
