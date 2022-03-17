import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Logo from "../../assets/img/logo.png";
import { useNavigate } from 'react-router-dom';
import { loginSistema } from '../../routes/paths';
import useStyles from './sytle';
import Link from '@material-ui/core/Link';
import Grid from '@mui/material/Grid';
import Topography from '../../components/Topography';

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classes.image}>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <img src={Logo} alt='logotipo do sistema' />
          <Topography titulo = {'  Cadastre-se'}/>
          <form className={classes.form}>

          <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Nome</InputLabel>
              <Input
                name="name"
                type="name"
                id="name"
                autoFocus
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="sobrenome">Sobrenome</InputLabel>
              <Input
                name="sobrenome"
                type="sobrenome"
                id="sobrenome"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
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
            >
              Inscreva-se
            </Button>
            <Grid container className={classes.espacamento}>
              <Grid item xs>
                <Link href={loginSistema} variant="body2">
                    Já tem uma conta? Entrar
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </main>
    </div>
  );
}