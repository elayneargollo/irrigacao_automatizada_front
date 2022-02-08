import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useNavigate } from 'react-router-dom';
import { cadastrarPlantas } from '../../routes/paths';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip'

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100
  },
  {
    field: "firstName",
    headerName: "Nome Popular",
    width: 250,
    editable: false
  },
  {
    field: "age",
    headerName: "Ambiente",
    width: 250,
    editable: false
  },
  {
    field: "lastName",
    headerName: "Tipo de Solo",
    width: 250,

  },
  {
    field: "porte",
    headerName: "Porte",
    width: 130,
  },
  {
    field: 'Deletar',
    headerName: 'Deletar',
    width: 110,
    renderCell: (params) => (
      <strong>
        {params.value}
        <IconButton
          aria-label="Deletar"
          title="Deletar planta"
          onClick={() => handleChangeDelete(params)}
        >
          <DeleteIcon color="primary" />
        </IconButton>
      </strong>
    ),
  },
  {
    field: 'Editar',
    headerName: 'Editar',
    width: 110,
    renderCell: (params) => (
      <strong>
        <IconButton
          aria-label="Eidtar"
          title="Editar planta"
          onClick={() => handleChangeEdit(params)}
        >
          <EditIcon color="primary" />
        </IconButton>
      </strong>
    ),
  },
];

const handleChangeEdit = (params) => console.log(`Edite => ${params.id}`);

const handleChangeDelete = (params) => console.log(`Delete => ${params.id}`);

const rows = [
  { id: 1, firstName: "Palmeira", lastName: "Arenoso", age: 'Interno', porte: 'Médio' },
  { id: 2, firstName: "Girassol", lastName: "Argiloso", age: 'Interno', porte: 'Pequeno' },
  { id: 3, firstName: "Lannister", lastName: "Arenoso", age: 'Externo', porte: 'Médio' },
  { id: 4, firstName: "Stark", lastName: "Argilo-Arenoso", age: 'Interno', porte: 'Pequeno' },
  { id: 5, firstName: "Targaryen", lastName: "Argiloso", age: 'Externo', porte: 'Pequeno' }
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1200,
    marginTop: 120
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function MyApp() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChangeAdd = () => navigate(cadastrarPlantas);

  return (
    <div>
      <Card className={classes.root} variant="outlined" style={{ height: 650, width: '100%'}} >
        <CardContent>
          <Typography variant="h4" component="h2" color="primary">Planta</Typography>
        </CardContent>

        <CardActions>
          <Tooltip title="Adicionar uma nova planta ao sistema" arrow>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleChangeAdd}
              startIcon={<AddIcon />}
            >
              Cadastrar Planta
            </Button>
          </Tooltip>
        </CardActions>

        <div style={{ height: 450, marginLeft: "10px", marginRight: "10px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
          />
        </div>

      </Card>
    </div>
  );
}
