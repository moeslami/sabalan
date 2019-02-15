import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from '../header/Header';
import routes from '../../config/routes';
import Footer from '../footer/Footer';
import ContentPage from '../content-page/ContentPage';
import { Helmet } from 'react-helmet';
import siteSettings from '../../config/site-settings.json';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Helmet>
          <title>{siteSettings.title}</title>
        </Helmet>
          <Header></Header>

          {/* routes ... */}
          <Route path='/' component={() => <ContentPage contentPath="_home" />} exact />
          {Object.keys(routes.contentPages).map((cp: string) =>
            <Route key={`/${cp}`} path={`/${cp}`} component={() => <ContentPage contentPath={cp} />} exact={routes.contentPages[cp].exact ? true : false} />
          )}

          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
