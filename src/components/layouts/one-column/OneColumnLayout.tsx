import React from 'react';
import ReactMarkdown from 'react-markdown';
import { withStyles } from '@material-ui/core/styles';
import { BaseLayout } from '../BaseLayout';

const styles = {
  main: {
    margin: "auto 2rem"
  }
};

class OneColumnLayout extends BaseLayout<OneColumnLayoutModel> {

  render() {

    const {classes} = this.props as any;

    if(this.state.content){
      document.title = this.state.content.title;
    }

    return this.state.content ?
      (
        <div className={classes.main}>
          <h1>{this.state.content.title}</h1>
          <ReactMarkdown source={this.state.content.first_column} />
        </div>

      ) : (<div className={classes.main}></div>);
  }
}

export class OneColumnLayoutModel {
  constructor(public title:string, public first_column: string) {
  }
}

export default withStyles(styles)(OneColumnLayout);
