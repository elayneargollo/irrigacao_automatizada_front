import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useNavigate } from 'react-router-dom';
import { cadastrarPlantas } from '../../routes/paths';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import './sytle.css';
import Logo from "../../assets/img/folha.png";
import Titulo from "../../components/Titulo/index";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 100
  },
  {
    field: "firstName",
    headerName: "Nome Popular",
    width: 300,
    editable: false
  },
  {
    field: "age",
    headerName: "Ambiente",
    width: 300,
    editable: false
  },
  {
    field: "lastName",
    headerName: "Tipo de Solo",
    width: 300,
  },
  {
    field: "porte",
    headerName: "Porte",
    width: 300,
  },
  {
    field: 'Deletar',
    headerName: 'Deletar',
    width: 300,
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
    width: 300,
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

export default function MyApp() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChangeAdd = () => navigate(cadastrarPlantas);

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Planta" imagem = {Logo}/>

      <HeaderSider />
      <Card className={classes.root} variant="outlined" style={{ height: 650, width: '100%' }} >
        <CardActions>
          <Tooltip title="Adicionar uma nova planta ao sistema" arrow>
            <Button style={{ fontWeight: 'bold', fontSize: "20px"}}
              variant="outlined"
              onClick={handleChangeAdd}
              startIcon={<AddIcon />}
              color='primary'
            >
              Cadastrar Planta
            </Button>
          </Tooltip>
        </CardActions>

        <div style={{ height: 420, marginLeft: "10px", marginRight: "10px", paddingTop: "15px"}}>
          <DataGrid
            rows={rows}
            columns={columns}
          />
        </div>
      </Card>
      <Footer/>
    </div>
  );
}
