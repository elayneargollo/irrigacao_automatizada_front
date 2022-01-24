import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { DataGrid } from '@mui/x-data-grid';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useNavigate } from 'react-router-dom';
import { cadastrarPlantas } from '../../routes/paths';
import { Row } from "antd";

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
    field: "Editar",
    headerName: "Editar",
    sortable: false,
    width: 110,
    disableClickEventBubbling: true,
    renderCell: () => {
      return (
        <IconButton
          aria-label="edit"
          // onClick={() => editUser(row)}
          title="edit">
          <EditIcon color="primary" />
        </IconButton>
      )
    }
  },
  {
    field: "Deletar",
    headerName: "Deletar",
    width: 110,
    disableClickEventBubbling: true,
    sortable: false,
    renderCell: () => {
      return (
        <strong>
          <IconButton
            aria-label="delete"
            title="delete">
            <DeleteIcon color="primary"/>
          </IconButton>
        </strong>
      )
    }
  }
];


const rows = [
  { id: 1, firstName: "Palmeira", lastName: "Arenoso", age: 'Interno', porte: 'Médio' },
  { id: 2, firstName: "Girassol", lastName: "Argiloso", age: 'Interno', porte: 'Pequeno' },
  { id: 3, firstName: "Lannister", lastName: "Arenoso", age: 'Externo', porte: 'Médio' },
  { id: 4, firstName: "Stark", lastName: "Argilo-Arenoso", age: 'Interno', porte: 'Pequeno' },
  { id: 5, firstName: "Targaryen", lastName: "Argiloso", age: 'Externo', porte: 'Pequeno' }
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    paddingTop: 120
  },
  content: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  }
}));

export default function MyApp() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChangeAdd = () => navigate(cadastrarPlantas);

  return (
    <div>
      <CssBaseline />
      <Container>

        <div className={classes.toolbar}>
          <Typography variant="h4" component="h2" color="primary">
            Plantas
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleChangeAdd}
            startIcon={<AddIcon />}
          >
            Cadastrar Planta
          </Button>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
          />
        </div>
      </Container>
    </div>
  );
}
