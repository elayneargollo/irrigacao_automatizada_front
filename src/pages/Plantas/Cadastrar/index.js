import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SaveIcon from '@material-ui/icons/Save';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Sytle.css';
import Typography from "@material-ui/core/Typography";
import CancelIcon from '@material-ui/icons/Cancel';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { useNavigate } from 'react-router-dom';
import { plantas } from '../../../routes/paths';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 210,
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
    maxWidth: 300,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    paddingTop: 120
  },
  button: {
    display: "flex",
    margin: '13px 12px 12px 10px'
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();
  const [ambiente, setAmbiente] = React.useState('');
  const [porte, setPorte] = React.useState('');
  const [solo, setSolo] = React.useState('');
  const [fruto, setFruto] = React.useState('');

  const handleChange = (event) => {
    setAmbiente(event.target.value);
  };

  const handleChangePorte = (event) => {
    setPorte(event.target.value);
  };

  const handleChangeSolo = (event) => {
    setSolo(event.target.value);
  };

  const handleChangeFruto = (event) => {
    setFruto(event.target.value);
  };

  
  const navigate = useNavigate();

  const handleChangeReturn = () =>
  {
    console.log('oi');
    navigate(plantas);
  } 

  return (
    
    <div>
      <CssBaseline />
      <Container>

        <div className={classes.toolbar}>

          <form className={classes.root}>
            <Typography variant="h4" component="h2" color="primary">
              Cadastro de Planta
            </Typography>

            <div>

              <TextField
                id="margin-none"
                label="Nome Popular da Planta *"
                placeholder="Informe o nome da planta"
              />

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Fruto *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="margin-none"
                  value={fruto}
                  onChange={handleChangeFruto}
                >
                  <MenuItem value={10}>Sim</MenuItem>
                  <MenuItem value={20}>Não</MenuItem>
                </Select>
              </FormControl >

            </div>

            <div>

              <TextField
                id="margin-none"
                label="Tipo de Planta *"
                placeholder="Informe o tipo da planta"
              />

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Ambiente *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="margin-none"
                  value={ambiente}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Interno</MenuItem>
                  <MenuItem value={20}>Externo</MenuItem>
                </Select>
              </FormControl >

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Porte da Planta *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="margin-none"
                  value={porte}
                  onChange={handleChangePorte}
                >
                  <MenuItem value={10}>Média</MenuItem>
                  <MenuItem value={20}>Pequena</MenuItem>
                </Select>
              </FormControl >

              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Solo *</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="margin-none"
                  value={solo}
                  onChange={handleChangeSolo}
                >
                  <MenuItem value={10}>Arenoso</MenuItem>
                  <MenuItem value={20}>Argiloso</MenuItem>
                  <MenuItem value={30}>Argilo-Arenoso</MenuItem>
                </Select>
              </FormControl >

            </div>

            <div className={classes.button}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<SaveIcon />}
              >
                Salvar
              </Button>

              <Button
                variant="outlined"
                color="primary"
                startIcon={<CancelIcon />}
              >
                Cancelar
              </Button>

              <Button
                variant="outlined"
                color="primary"
                onClick={handleChangeReturn}
                startIcon={<KeyboardReturnIcon />}
              >
                Voltar
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}