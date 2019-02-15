import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './luxbar.scss';
import navSettings from '../../config/nav-settings.json';
let publicUrl = process.env.PUBLIC_URL;
export default class Nav extends Component {

  render(){
    return (
      <div className={`luxbar-menu luxbar-menu-${navSettings.theme.direction} ${navSettings.theme.mainTheme}`}>
        <ul className="luxbar-navigation">
            <li className="luxbar-header">
                <Link to="/" title={navSettings.home.title} className="luxbar-brand"><img src={`${publicUrl}/favicon.png`} />{navSettings.home.text}</Link>
                <label className="luxbar-hamburger luxbar-hamburger-doublespin"
                data-id="luxbar-hamburger" data-for="luxbar-checkbox">
                  <span> </span>
                </label>
            </li>
            {navSettings.topNav.map((nav) => (
              <li className="luxbar-item"><Link title ={nav.title} to={nav.path}>{nav.text}</Link></li>
            ))}
        </ul>
    </div>
    );
  }
}
