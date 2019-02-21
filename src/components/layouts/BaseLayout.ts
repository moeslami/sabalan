import { Component } from "react";

class BaseLayout<T> extends Component {
  constructor(props:any){
    super(props)
  }

  state: {content?: T} = {};

  componentDidMount(){
    (this.props as any).content.then((content:any) => {
      this.setState({content});
    });
  }
}

export { BaseLayout };
