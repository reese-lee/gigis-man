import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classyMen01 from './../assets/images/classyMen01.jpeg';

// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import ScheduleFeed from './ScheduleFeed';

const useStyles = makeStyles({
  image: {
    height: 600,
    padding: 50,
  },
  centered: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '60%',
  },
  fonts:{
    fontFamily: 'Playfair Display SC',
    color: 'white',
    fontSize: '5em',
    opacity: 0.85,
  }

});

const backgroundImage = {
  backgroundImage: `url(${classyMen01})`
};

export default function Splash() {
  const classes = useStyles();
  return (
    <div style = {backgroundImage} className={classes.image}>
      <div className={classes.centered}>
        <h1 className={classes.fonts}>Gigi's Man</h1>
      </div>
    </div>
  );
}
