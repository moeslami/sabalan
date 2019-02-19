import React, { Component, ComponentClass } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header/Header';
import routes from '../../config/routes.json';
import Footer from '../footer/Footer';
import { Helmet } from 'react-helmet';
import siteSettings from '../../config/site-settings.json';
import { resolveComponentWithData } from '../../services/component-service';
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';


const styles = {
  app: {
    display: "flex",
    minHeight: "100vh",
    flexFlow: 'column wrap',
  },
  main: {
    flex: 1
  }
};

class App extends Component {
  render() {
    const { classes } = this.props as any;

    return (
      <BrowserRouter>
        <div className={classes.app}>
          <Helmet>
            <title>{siteSettings.title}</title>
          </Helmet>
          <Header></Header>
          <main className={classes.main}>
            {Object.keys(routes).map((routePath) => {
              const routeConfig = (routes as any)[routePath];
              const ResolvedComponent = resolveComponentWithData(routePath, routeConfig);
              return (<Route key={`/${routePath}`} path={`/${routePath}`} component={ResolvedComponent} exact={routeConfig.exact || false} />);
            })}
          </main>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
