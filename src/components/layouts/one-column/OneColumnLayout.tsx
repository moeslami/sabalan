import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  main: {
    margin: "auto 2rem"
  }
};

class OneColumnLayout extends Component {

  state:any = {};

  componentDidMount(){
    (this.props as any).data.content.then((content:any) => {
      this.setState(content);
    });
  }

  render() {

    const {classes} = this.props as any;

    if(this.state.title){
      document.title = this.state.title;
    }

    return this.state ?
      (
        <div className={classes.main}>
          <h1>{this.state.title}</h1>
          <ReactMarkdown source={this.state.col1} />
        </div>

      ) : (<div className="content-page"></div>);
  }
}

export default withStyles(styles)(OneColumnLayout);
