import React from 'react';
import Button from './Button';
import PageTopTitle from './PageTopTitle';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


const NotFound = () => {

  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <PageTopTitle 
        title="Error: Page not Found" 
        isShown={true}
        timeout={300}
      />  
      <Grid 
        className={classes.buttonContainer}
        container
        direction="row"
        justify="center"
        alignItems="center"  
      >
        <Button />    
      </Grid>
    </Grid>  
  );
};

export default NotFound;
