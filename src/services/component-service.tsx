
import React, { ClassType } from 'react';
import layoutMap from '../config/layout-map';
import { getContent } from './content-service';
import { BaseLayout } from '../components/layouts/BaseLayout';

const matchLayout = (routeConfig: any): any => {
  return (layoutMap as any)[routeConfig.layout] || null;
}

const resolveComponentWithData = (routePath:string, routeConfig: any): any => {
  const layout = matchLayout(routeConfig);
  if (!layout) return null;

  const ResolvedComponent = layout.component;
  const ContentModel = layout.model;

  return class extends React.Component {
    content: any;
    constructor(props:any) {
      super(props);
      this.content = getContent(routePath)
    };


    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return <ResolvedComponent content={this.content} />;
    }
  };

};

export { resolveComponentWithData };
