import React from 'react';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from "@reach/router";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    "&:hover": {
      cursor: "pointer",
    }
  },
  link: {
    textDecoration: "none",
  },
  toNextPage: {
    paddingTop: theme.spacing(1),
  }
}));

const Posts = ({ isShown, posts }) => {

  const classes = useStyles();

  return (
    <Grid container spacing={2}>

      {posts.map(post => {
        const title = post.title.length > 20 ? post.title.slice(0, 20) + '...' : post.title;
        const body = post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body;
        return (
          <Fade in={isShown} timeout={5000} key={post.id}>
            <Grid item xs={12} sm={6} md={4}>
              <Link className={classes.link} to={`post/${post.id}`}>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="body2">{body}</Typography> 
                  <Typography 
                    align="right" 
                    variant="subtitle2"
                    className={classes.toNextPage}
                  >
                    Read more
                  </Typography>  
                </Paper>
              </Link>  
            </Grid>
          </Fade>
        );
      })}    
      
    </Grid>
  );
};

export default Posts;