import React, { Component } from 'react';
import propTypes from 'prop-types';
import './ContentPage.scss';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

let publicUrl = process.env.PUBLIC_URL;
class ContentPage extends Component {

  state: {data: any} = {data: null};

  constructor(props: Readonly<any>) {
    super(props);
  }

  static propTypes = {
    contentPath: propTypes.string.isRequired,
  }

  componentDidMount() {
    const { contentPath } = (this.props as any);
    //et pagePath = this.props.location.pathname;
    let data: any = {};
    let getPageSettings = axios.get(`${publicUrl}/content/${contentPath}.json`).then((response) => {
      data = Object.assign({}, data, response.data);
    });

    let getPageContent = axios.get(`${publicUrl}/content/${contentPath}.md`).then((response) => {
      data.content = response.data;
    });

    Promise.all([getPageContent, getPageSettings]).then(() => {
      this.updateState(data);
    });
  }
  render() {
    if(this.state.data){
      document.title = this.state.data.title;
    }

    return this.state.data ?
      (
        <div className="content-page">
          <h1>{this.state.data.title}</h1>
          <ReactMarkdown source={this.state.data.content} />
        </div>

      ) : (<div className="content-page"></div>);

  }

  updateState(data: any){
    this.setState((prevState) => Object.assign({}, prevState, {data}));
  }
}

export default ContentPage;
