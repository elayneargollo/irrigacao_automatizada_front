import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Logo from "../../assets/img/logo.png";
import { useNavigate } from 'react-router-dom';
import { home } from '../../routes/paths';
import { Context } from '../../contexts/auth';
import useStyles from './sytle';

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticated, handleLogin } = useContext(Context);

  if (authenticated) {
    navigate(home);
  }

  return (
    <div className={classes.image}>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <img src={Logo} alt='logotipo do sistema' />
          <Typography component="h1" variant="h5" style={{ color: '#006750' }}>
            Login
          </Typography>
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
              onClick={() => handleLogin(username, password, navigate)}
            >
              Entrar
            </Button>
          </form>
        </Paper>
      </main>
    </div>
  );
}