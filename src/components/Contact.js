import React from 'react';
import PageTopTitle from './PageTopTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    width: "75px",
    borderTop: "2px solid #000000",
  }
}));;


const Contact = () => {
  
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <PageTopTitle 
        title="Kenta Sato" 
        isShown={true}
        timeout={0}
      />  

      <Grid 
        container
        direction="column"
        justify="center"
        alignItems="center"
      >

        <Grid item xs={12}>
          <Typography variant="h6" align="center">mannheim42@yahoo.de</Typography>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.bar}></div>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            Weitere Einzelheiten bespreche ich gerne bei einem persönlichen Vorstellungstermin mit Ihnen.
            Darauf freue ich mich.  
          </Typography> 
        </Grid>

      </Grid>
    </Grid>    
  );
};

export default Contact;