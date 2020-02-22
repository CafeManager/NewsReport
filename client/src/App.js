import React, { Component } from 'react';
import './App.css';
import Tooltip from '@material-ui/core/Tooltip';
import { Button, Grid } from '@material-ui/core';

class App extends Component {

  render() {
    return (
      <Grid container justify="center">
        <Grid item>
        <Tooltip title="Hi there!" placement="top"><Button>Hello, welcome to my news site!</Button></Tooltip>
        </Grid>
      </Grid>

      
    );
  }
}

export default App;
