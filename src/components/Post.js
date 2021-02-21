import React, { useEffect, useState } from 'react';
import PageTopTitle from './PageTopTitle';
import Button from './Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from "@reach/router";
const axios = require('axios');


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  postTitle: {
    overflowWrap: 'break-word',
    marginBottom: theme.spacing(3),  
  },
  postContent: {
    overflowWrap: 'break-word',
    marginBottom: theme.spacing(5),
  },
}));


const Post = (props) => {
  
  const classes = useStyles();

  const [post, setPost] = useState({id: "", title: "", body: "", userId: null});
  
  useEffect(() => {
    const getPost = () => {
      const url = `https://jsonplaceholder.typicode.com/posts/${props.postId}`;
      axios.get(url)
        .then(response => setPost(response.data))
        .catch(error => {
          navigate("/pageNotFound")
        })
    };
    getPost();
  }, []);

  return (
    <Grid container className={classes.foot}>
      <PageTopTitle
        isShown={true} 
        title={`Post ${post.id}`}
        timeout={1}
      />
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"   
      >

        <Grid item xs={12} sm={10} md={9} zeroMinWidth>
          <Typography 
            align="center" 
            className={classes.postTitle}
            variant="h5"  
          >
            {post.title}
          </Typography>
        </Grid>
        
        <Grid item xs={12}>
          <Typography variant="body1" className={classes.postContent}>
            {post.body}  
          </Typography>
        </Grid>

        <Button />
        
      </Grid>
    </Grid>
  );
};

export default Post;