import React from 'react';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }    
}));


const PageTopTitle = ({isShown, title, timeout}) => {

  const classes = useStyles();
  
  return (
    <Grid
      item
      xs={12}
      className={classes.container}
    > 
      <Fade in={isShown} timeout={timeout}>
        <Typography variant="h2">
          {title}  
        </Typography>
      </Fade>
    </Grid>
  );
};

export default PageTopTitle;