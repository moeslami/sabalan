
import React from 'react';
import layoutMap from '../config/layout-map';
import { getContent } from './content-service';

const resolveComponent = (routeConfig: any): any => {
  let layout = routeConfig.layout;
  return (layoutMap as any)[layout] || null;
}

const resolveComponentWithData = (routePath:string, routeConfig: any): any => {
  const ResolvedComponent = resolveComponent(routeConfig);
  if (!ResolvedComponent) return null;

  return class extends React.Component {

    /**
     *
     */
    constructor(props:any) {
      super(props);
      this.state = {content: getContent(routePath)};
    }

    // componentDidMount(){
    //   getContent(routePath).then((content) => {
    //     this.setState({ content });
    //   });
    // }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <ResolvedComponent data={this.state} />;
    }
  };

};

export { resolveComponentWithData };
