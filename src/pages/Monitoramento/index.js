import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@mui/x-data-grid';


const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1000,
    marginTop: 120
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
const title = 'Monitoramento'

export default function Monitoramento() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined" style={{ height: 480, width: '100%' }} >
        <CardContent>
          <Typography variant="h4" component="h2" color="primary">{title}</Typography>
        </CardContent>

        <div style={{ height: 370, marginLeft: "10px", marginRight: "10px"}}>
          <DataGrid
            columns={[{ field: 'Nome', minWidth: 150, type: 'string' }, { field: 'TipoSolo', minWidth: 150, type: 'string' }, 
                    { field: 'Gotejamento', type: 'boolean', width: 120 }, { field: 'Irrigada', type: 'boolean', width: 120 },
                    { field: 'Solenoide', type: 'string', width: 150 }, { field: 'Sensor', type: 'string', width: 120 },
                    { field: 'Status', type: 'string', width: 150 }]}
            rows={rows}
          />
        </div>
      </Card>
    </div>
  );
}
