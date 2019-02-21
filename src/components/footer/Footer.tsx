import React, {Component} from 'react';
import './Footer.scss';
import siteSettings from '../../config/site-settings.json';

class Footer extends Component {
  render(){
    return (
      <footer className = 'footer'>
        <div className='powered'>Powered by ©Sabalan. All Rights Reserved</div>
      </footer>
    );
  }
}

export default Footer;
