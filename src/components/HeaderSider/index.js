import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import Home from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import BuildIcon from '@material-ui/icons/Build';
import EcoIcon from '@material-ui/icons/Eco';
import { useNavigate } from 'react-router-dom';
import { home, about, configuracao, monitoramento, sistema, plantas } from '../../routes/paths';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color: '#006750',
  }
}));

const menuItens = [
  {
    text: 'Home',
    icon: <Home />,
    path: home
  },
  {
    text: 'Planta',
    icon: <EcoIcon />,
    path: plantas
  },
  {
    text: 'Sistema',
    icon: <BuildIcon />,
    path: sistema
  },
  {
    text: 'Monitoriamento',
    icon: <PersonalVideoIcon />,
    path: monitoramento
  },
  {
    text: 'Configuraçãoo',
    icon: <SettingsIcon />,
    path: configuracao
  },
  {
    text: 'Sobre',
    icon: <InfoIcon />,
    path: about
  }
]

export default function HeaderSider() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}>
        <div>
          <Typography variant="h5" color="primary" align="center">
            MENU
          </Typography>
        </div>
        <List>
          {menuItens.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
