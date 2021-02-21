import React, { useEffect, useState } from 'react';
import PageTopTitle from './PageTopTitle';
import Posts from './Posts';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const axios = require('axios');


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


const Home = () => {

  const classes = useStyles();

  const [isShown, setIsShown] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setPosts(response.data))
    };
    getPosts();
    setIsShown(true);
  }, []);

  return (
    <Grid container className={classes.root}>
      <PageTopTitle 
        title="Posts" 
        isShown={isShown}
        timeout={5000}
      />
      <Posts 
        isShown={isShown}
        posts={posts}
      />  
    </Grid>
  );
};

export default Home;