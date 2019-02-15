import React, { Component } from 'react';
import propTypes from 'prop-types';
import './ContentPage.scss';
import axios from 'axios';

let publicUrl = process.env.PUBLIC_URL;
class ContentPage extends Component {

  state: {content: any} = {content: null};

  constructor(props: Readonly<any>) {
    super(props);
  }

  static propTypes = {
    contentPath: propTypes.string.isRequired,
  }

  componentDidMount() {
    const { contentPath } = (this.props as any);
    //et pagePath = this.props.location.pathname;
    axios.get(`${publicUrl}/content/${contentPath}.json`).then((response) => {
      this.updateState(response.data);
    });
  }
  render() {
    if(this.state.content){
      document.title = this.state.content.title;
    }

    return this.state.content ?
      (
        <div className="content-page">
          <h1>{this.state.content.title}</h1>
          <div>{this.state.content.body}</div>
        </div>

      ) : (<div className="content-page"></div>);

  }

  updateState(content: any){
    this.setState((prevState) => Object.assign({}, prevState, {content}));
  }
}




export default ContentPage;
