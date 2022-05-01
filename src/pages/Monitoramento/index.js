import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import Titulo from "../../components/Titulo/index";
import Image from "../../assets/img/analytics.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: '80%',
    marginTop: 25,
    backgroundImage: 'linear-gradient(#99C2B9,#FFFEFF,#FFFEFF, #FFFEFF, #FFFEFF)'
  },
  tooltip: {
  backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
        fontSize: 11,
  },
  fundo:
  {
    background: '#f7f6f4',
    height: '100vh',
  },
  titulo :
  {
    marginLeft: "220px",
    marginRight: "auto",
    marginTop: 100,
    display: 'flex'
  }
}));

const rows = [
  {
    id: 1,
    Nome: 'Palmeira',
    TipoSolo: 'Arenoso',
    Gotejamento: true,
    Irrigada: false,
    Solenoide: 'S1',
    Sensor: 'Se1',
    Status: 'Ativo'
  },
  {
    id: 2,
    Nome: 'Girassol',
    TipoSolo: 'Arenoso-Argiloso',
    Gotejamento: true,
    Irrigada: false,
    Solenoide: 'S2',
    Sensor: 'Se2',
    Status: 'Ativo'
  },
  {
    id: 3,
    Nome: 'Cacto',
    TipoSolo: 'Argiloso',
    Gotejamento: true,
    Irrigada: false,
    Solenoide: 'S3',
    Sensor: 'Se3',
    Status: 'Inativo'
  },
  {
    id: 4,
    Nome: 'Cacto',
    TipoSolo: 'Argiloso',
    Gotejamento: true,
    Irrigada: false,
    Solenoide: 'S3',
    Sensor: 'Se3',
    Status: 'Inativo'
  },
  {
    id: 5,
    Nome: 'Cacto',
    TipoSolo: 'Argiloso',
    Gotejamento: true,
    Irrigada: false,
    Solenoide: 'S3',
    Sensor: 'Se3',
    Status: 'Inativo'
  },
];

export default function Monitoramento() {
  const classes = useStyles();

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Monitoramento" imagem={Image}/>
      <HeaderSider />
      <Card className={classes.root} variant="outlined" style={{ height: 480, width: '100%' }}  >
      <div style={{ height: 450, marginLeft: "10px", marginRight: "10px", paddingTop: "50px"}}>
      <DataGrid
            columns={[{ field: 'Nome', minWidth: 200, type: 'string' }, { field: 'TipoSolo', minWidth: 200, type: 'string' }, 
                    { field: 'Gotejamento', type: 'boolean', width: 200 }, { field: 'Irrigada', type: 'boolean', width: 200 },
                    { field: 'Solenoide', type: 'string', width: 200 }, { field: 'Sensor', type: 'string', width: 200 },
                    { field: 'Status', type: 'string', width: 100 }]}
            rows={rows}
          />
        </div>
      </Card>
      <Footer/>
    </div>
  );
}
