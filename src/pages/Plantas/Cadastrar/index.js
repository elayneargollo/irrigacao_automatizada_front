import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
import Logo from "../../../assets/img/folha.png";
import Titulo from "../../../components/Titulo/index";
import { ValidationAddPlanta } from "../../../utils/validations.js";
import { MensagemCadastroComSucesso } from "../../../utils/resource";
import swal from 'sweetalert';
import { postPlantas } from '../../../services/api/planta';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: '80%',
    marginTop: 25,
    backgroundImage: 'linear-gradient(#99C2B9,#FFFEFF,#FFFEFF, #FFFEFF, #FFFEFF)'
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

export default function CadastrarPlantas() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [ambiente, setAmbiente] = React.useState('');
  const [porte, setPorte] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [tipoSolo, setTipoSolo] = React.useState('');
  const [fruto, setFruto] = React.useState('');
  const [tipoPlanta, setTipoPlanta] = React.useState('');
  const [plantaId, setPlantaId,] = React.useState('');

  const handleChange = (event) => {
    setAmbiente(event.target.value);
  };

  const handleChangePorte = (event) => {
    setPorte(event.target.value);
  };

  const handleChangeSolo = (event) => {
    setTipoSolo(event.target.value);
  };

  const handleChangeFruto = (event) => {
    setFruto(event.target.value);
  };

  const handleChangeReturn = () => {
    navigate(plantas);
  }

  const handleChangeSalvar = () => {
    let dados = {ambiente, porte, tipoSolo, fruto, nome, tipoPlanta};
    var camposRequeridos = ValidationAddPlanta(dados);

    if(camposRequeridos) return swal("Ocorreu um erro", `${camposRequeridos}`, "error");

    let planta = { plantaId, nome, ambiente, tipoSolo, porte, fruto }

    postPlantas(planta);
    
    swal(MensagemCadastroComSucesso('Planta'));
    navigate(plantas);
  }

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Cadastro de Planta" imagem = {Logo}/>
      <HeaderSider />
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <div>
            <TextField className={clsx(classes.margin, classes.textField)}
              id="margin-none"
              label="Nome Popular da Planta *"
              placeholder="Informe o nome da planta"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Fruto *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={fruto}
                onChange={handleChangeFruto}
              >
                <MenuItem value={'sim'}>Sim</MenuItem>
                <MenuItem value={'nao'}>Não</MenuItem>
              </Select>
            </FormControl >
          </div>

          <div>
            <TextField className={clsx(classes.margin, classes.textField)}
              id="margin-none"
              label="Tipo de Planta *"
              placeholder="Informe o tipo da planta"
              value={tipoPlanta}
              onChange={(e) => setTipoPlanta(e.target.value)}
            />

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Ambiente *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={ambiente}
                onChange={handleChange}
              >
                <MenuItem value={'interno'}>Interno</MenuItem>
                <MenuItem value={'externo'}>Externo</MenuItem>
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
                <MenuItem value={'media'}>Média</MenuItem>
                <MenuItem value={'pequena'}>Pequena</MenuItem>
              </Select>
            </FormControl >

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Solo *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={tipoSolo}
                onChange={handleChangeSolo}
              >
                <MenuItem value={'arenoso'}>Arenoso</MenuItem>
                <MenuItem value={'argiloso'}>Argiloso</MenuItem>
                <MenuItem value={'argilo-arenoso'}>Argilo-Arenoso</MenuItem>
              </Select>
            </FormControl >
          </div>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" onClick={handleChangeSalvar}>
            Salvar
          </Button>

          <Button size="small" color="primary" onClick={handleChangeReturn}>
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
