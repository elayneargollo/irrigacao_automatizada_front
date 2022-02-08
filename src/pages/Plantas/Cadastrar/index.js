import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useNavigate } from 'react-router-dom';
import { plantas } from '../../../routes/paths';
import clsx from 'clsx';
import HeaderSider from '../../../components/HeaderSider/index';
import Footer from '../../../components/Footer/index';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1000,
    marginTop: 120
  },
  rootForm: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    marginTop: theme.spacing(3),
    width: '25ch',
  },
  fundo:
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));

export default function OutlinedCard() {
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

  const handleChangeReturn = () => {
    console.log('oi');
    navigate(plantas);
  }

  return (
    <div className={classes.fundo}>
      <HeaderSider />
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <Typography variant="h4" component="h2" color="primary">
            Cadastro de Planta
          </Typography>
          <div>
            <TextField className={clsx(classes.margin, classes.textField)}
              id="margin-none"
              label="Nome Popular da Planta *"
              placeholder="Informe o nome da planta"
            />

            <FormControl className={clsx(classes.margin, classes.textField)}>
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
            <TextField className={clsx(classes.margin, classes.textField)}
              id="margin-none"
              label="Tipo de Planta *"
              placeholder="Informe o tipo da planta"
            />

            <FormControl className={clsx(classes.margin, classes.textField)}>
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

            <FormControl className={clsx(classes.margin, classes.textField)}>
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

            <FormControl className={clsx(classes.margin, classes.textField)}>
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
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            Salvar
          </Button>

          <Button size="small" color="primary" >
            Cancelar
          </Button>

          <Button size="small" color="primary" onClick={handleChangeReturn}>
            Voltar
          </Button>
        </CardActions>
      </Card>
      <Footer />
    </div>
  );
}
