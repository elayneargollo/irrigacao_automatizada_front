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
import { configuracao } from '../../../routes/paths';
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
  fundo :
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
    navigate(configuracao);
  }

  return (
    <div className={classes.fundo}>
    <HeaderSider />
    <Card className={classes.root} variant="outlined" >
      <CardContent>
      <Typography variant="h4" component="h2" color="primary">
            Cadastro de Raspberry
        </Typography>
            <div>
              <TextField className={clsx(classes.margin, classes.textField)}
                id="margin-none"
                label="Modelo *"
                placeholder="Modelo"
              />

                <TextField className={clsx(classes.margin, classes.textField)}
                id="margin-none"
                label="Marca *"
                placeholder="Marca"
              />
                           
            </div>

            <div>
              <TextField className={clsx(classes.margin, classes.textField)}
                id="margin-none"
                label="Ano *"
                placeholder="Ano"
              />

                <TextField className={clsx(classes.margin, classes.textField)}
                id="margin-none"
                label="Número Peça *"
                placeholder="Número da peça"
                />                           
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
