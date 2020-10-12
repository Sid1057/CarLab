import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import AssessmentIcon from '@material-ui/icons/Assessment';
import StorageIcon from '@material-ui/icons/Storage';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import LogCard from './Logs/Card';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(10, 10),

    gridGap: '15px',
    /* Space between items */
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    flexWrap: 'wrap',
    justifyContent: 'flex-start',

    // justify-content: space-between;
  },
  content: {
    flexGrow: 1,
    // margin: '10 10 10 10',
    // maxwidth: '300px',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function App() {

  // constructor(props) {
  //   super(props);
  //   this.state = { seconds: 0 };
  // };

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState('Cars');

  const handleDrawerOpen = () => {
    console.log(currentTab)
    setOpen(true);
  };

  const handleItemClick = (arg) => () => {
    setCurrentTab(arg);
    console.log(currentTab)
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            CarLab {currentTab}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
              {name: 'Cars', key: 0, icon: <DriveEtaIcon />},
              {name: 'Logs', key: 1, icon: <EmojiTransportationIcon />},
              {name: 'Dataset', key: 2, icon: <StorageIcon />},
              {name: 'Benchmark', key: 3, icon: <AssessmentIcon />},
              {name: 'AutoTrain', key: 4, icon: <AllInclusiveIcon />}].map((item, index) => (
                <ListItem button key={item['key']} onClick={handleItemClick(item['name'])}>
                  <ListItemIcon>{item['icon']}</ListItemIcon>
                  <ListItemText primary={item['name']} />
                </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} display="flex">
          <LogCard name={currentTab} description={currentTab} className={classes.content}/>
          <LogCard name={currentTab} description={currentTab} className={classes.content}/>
          <LogCard name={currentTab} description={currentTab} className={classes.content}/>
          <LogCard name={currentTab} description={currentTab} className={classes.content}/>
          <LogCard name={currentTab} description={currentTab} className={classes.content}/>
        </div>
      </main>
    </div>
  );
}