import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import RemoveIcon from '@material-ui/icons/Remove';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "@reach/router";


const links = [
  {link: "Home", url: "/"},
  {link: "Contact", url: "contact"}
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'transparent', 
    boxShadow: 'none',
    zIndex: 1400,
  },
  link: {
    textDecoration: "none",
    flexGrow: 1,
  },
  icon: {
    backgroundColor: "#000000",
    color: "#ffffff",
    verticalAlign: "middle",
  },
  title: {
    color: "#000000",
    fontWeight: "bold",
  },
  paper: {
    width: "300px",
    [theme.breakpoints.down('sm')]: {
      width: "100%",
    },
  },
  list: {
    marginTop: theme.spacing(5),  
  },
  listItem: {
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
    },  
    "&:hover": {
      backgroundColor: 'transparent',
    }
  },
  listItemText: {
    '&:hover': {
      borderBottom: "2px solid #000000"  
    }
  }
}));

const Header = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const classes = useStyles();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>

          <Link to="/" className={classes.link}>
            <Typography variant="h4" className={classes.title}>
              Kenta Sato
            </Typography>
          </Link>
          
          <IconButton 
            edge="start" 
            className={classes.icon} 
            aria-label="menu"
            onClick={() => toggleDrawer()}  
          >
            {isDrawerOpen 
              ? <RemoveIcon />
              : <AddIcon /> 
            }  
          </IconButton>

        </Toolbar>
      </AppBar>
      
      <Drawer 
        anchor="right" 
        open={isDrawerOpen} 
        onClose={() => toggleDrawer(false)}
        classes={{ paper: classes.paper }}  
      >
        <div
          role="presentation"
          onClick={() => toggleDrawer(false)}
        >
          <List className={classes.list}>
            {links.map(link => (
              <Link to={link.url} className={classes.link} style={{color: '#000000'}}>
                <ListItem button key={link.Link} className={classes.listItem}>
                  <Typography className={classes.listItemText}>{link.link}</Typography>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
        </div>      
      </Drawer>
      
    </div>  
  );
};

export default Header;