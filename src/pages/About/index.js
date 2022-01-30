import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1000,
    marginTop: 120
  }
}));

const planta =
  'Este sistema tem como base um software livre, programado em Python na sua essência, cujo objetivo principal é automatizar a irrigação de plantas domésticas.' +
  'A automatização ocorre por meio do uso de um microcontrolador, RaspBerry Pi 3, acoplado a estrutura física da irrigação compreendida pela tubulação, gotejador e demais acessários.';

const title = 'Sobre'

export default function Sobre() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h4" component="h2" color="primary">{title}</Typography>
          <Typography variant="h7" paragraph>{planta} </Typography>
          <Typography variant="h7" paragraph>{planta} </Typography>
          <Typography variant="h7" paragraph>{planta} </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
