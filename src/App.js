import React, { useEffect } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Post from './components/Post';
import Container from '@material-ui/core/Container';
import { createMuiTheme, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { Router } from "@reach/router";


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  mainContainer: theme.mixins.toolbar,
}));

const App = () => {

  const classes = useStyles();

  useEffect(() => {
    document.title = "Posts";
  }, []);

  return (
    <ThemeProvider theme={theme}>

        <Header/>

        <Container maxWidth="md" className={classes.mainContainer}>
        <Router>
          <Home path="/"/>
          <Contact path="contact" />
          <Post path="post/:postId"/>
          <NotFound path="pageNotFound" />
        </Router>
      </Container>
      
    </ThemeProvider>  
  );
};

export default App;
 