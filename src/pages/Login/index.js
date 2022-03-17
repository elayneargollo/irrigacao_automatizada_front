import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Topography from '../../components/Topography';
import Logo from "../../assets/img/logo.png";
import { useNavigate } from 'react-router-dom';
import { home, cadastrarNoSistema, recuperarConta } from '../../routes/paths';
import { Context } from '../../contexts/auth';
import useStyles from './sytle';
import Link from '@material-ui/core/Link';
import Grid from '@mui/material/Grid';
import { ValidationLoginFields } from "../../utils/validations.js";
import swal from 'sweetalert';

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticated, handleLogin } = useContext(Context);

  const handleChange = (username, password) => {    
    var camposRequeridos = ValidationLoginFields(username, password);

    if(camposRequeridos) return swal("Ocorreu um erro", `${camposRequeridos}`, "error");

    handleLogin(username, password, navigate);
      
    if (authenticated) navigate(home);
  }

  return (
    <div className={classes.image}>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <img src={Logo} alt='logotipo do sistema' />
          <Topography titulo = {' Login'}/>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button className={classes.botao}
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleChange(username, password)}
            >
              Entrar
            </Button>
            <Grid container className={classes.espacamento}>
              <Grid item xs>
                <Link href={recuperarConta} variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href={cadastrarNoSistema} variant="body2">
                  {"Não tem uma conta? Inscreva-se"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </main>
    </div>
  );
}