import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
    link: {
      textDecoration: "none",
      color: '#000000',
    },
    linkName: {
      borderBottom: "solid 2px #000000",
    }
  }));

const Button = () => {

  const classes = useStyles();

  return (
    <Link to="/" className={classes.link}>
      <Typography align="center" variant="h6" className={classes.linkName}>Back to Top</Typography>
    </Link>   
  );
};

export default Button;