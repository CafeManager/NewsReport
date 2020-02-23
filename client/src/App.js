import React from 'react';
import './App.css';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { textbody, Card} from './Homepage/index'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" >
            News
    </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container justify="center">
        <Grid item>
          <Tooltip title="Hi there!" className={classes.root}  placement="top"><Button>Hello, welcome to my news site!</Button></Tooltip>
        </Grid>
      </Grid>
      <Card/>
      
      </div>
     
    );
  
}

export default App;
