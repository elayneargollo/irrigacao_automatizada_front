import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import Titulo from "../../components/Titulo/index";
import Image from "../../assets/img/sobre.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: '80%',
    marginTop: 25,
    backgroundImage: 'linear-gradient(#99C2B9,#FFFEFF,#FFFEFF, #FFFEFF, #FFFEFF)'
  },
  fundo :
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));

const planta =
  'Este sistema tem como base um software livre, programado em Python na sua essência, cujo objetivo principal é automatizar a irrigação de plantas domésticas.' +
  'A automatização ocorre por meio do uso de um microcontrolador, RaspBerry Pi 3, acoplado a estrutura física da irrigação compreendida pela tubulação, gotejador e demais acessários.';

export default function Sobre() {
  const classes = useStyles();

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Sobre" imagem={Image}/>
      <HeaderSider/>
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <Typography variant="h7" paragraph>{planta} </Typography>
          <Typography variant="h7" paragraph>{planta} </Typography>
          <Typography variant="h7" paragraph>{planta} </Typography>
        </CardContent>
      </Card>
      <Footer/>
    </div>
  );
}
