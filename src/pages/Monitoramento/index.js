import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from '@mui/x-data-grid';
import Card from '@material-ui/core/Card';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import './sytle.css';
import Titulo from "../../components/Titulo/index";
import { getSensores } from '../../services/api/sensor';
import { useDispatch } from 'react-redux';
import Image from "../../assets/img/analytics.png";

const columns = [
  {  field: "id", headerName: "ID", width: 80 },
  {  field: "nome", headerName: "Nome da Planta", width: 250, editable: false  },
  {  field: "tipoSolo", headerName: "Tipo de Solo", width: 200 },
  {  field: "gotejamento", headerName: "Gotejamento", type: 'boolean', width: 200, editable: false  },
  {  field: "irrigada", headerName: "Irrigada", type: 'boolean', width: 200 },
  {  field: "solenoide", headerName: "Solenóide", width: 250 },
  {  field: "sensor", headerName: "Sensor", width: 200 },
  {  field: "status", headerName: "Status", width: 150 },
  {  field: "dtleitura", headerName: "Data Leitura", width: 200 },
];

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

export default function Plantas() {
  const classes = useStyles();
  const [sensores, setSensores] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    async function getItems() {
      const data = await getSensores();
      setSensores(data?.data?.sensores);
    }
    getItems();
  },[dispatch]);

  const montarDados = () => {
    
    console.log(sensores);
    console.log(sensores.length);

    if(sensores?.length > 0)
      return sensores?.map(sensor => {
        return {
          id: sensor?.sensorId,
          nome: sensor?.planta.nome,
          tipoSolo: sensor?.planta?.tipoSolo?.tipoSolo,
          gotejamento: sensor?.solenoide?.status === "ABERTA" ? false : true,
          irrigada: sensor?.solenoide?.status === "ABERTA" ? false : true,
          solenoide: sensor?.solenoide?.tag,
          sensor: sensor?.nome,
          status: sensor?.solenoide?.status,
          dtleitura: sensor?.dataLeitura,             
        }
      });
  }

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Monitoramento" imagem={Image}/>

      <HeaderSider />
      <Card className={classes.root} variant="outlined" style={{ height: 650, width: '100%' }} >
        <div style={{ height: 450, marginLeft: "10px", marginRight: "10px", paddingTop: "50px"}}>
          <DataGrid
            columns={columns}
            rows={montarDados()}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />       
        </div>
      </Card>
      <Footer/>
    </div>
  );
}
