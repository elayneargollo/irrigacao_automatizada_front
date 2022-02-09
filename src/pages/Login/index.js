import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Logo from "../../assets/img/logo.png";
import Fundo from "../../assets/img/fundo2.jpg";
import { useNavigate } from 'react-router-dom';
import { home } from '../../routes/paths';
import { Context } from '../../Context/index';
import Swal from 'sweetalert2'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: 300,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  image : {
    background: `url(${Fundo})`,
    overflow: 'hidden',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    backgroundRepeat: 'no-repeat',  
  },
  botao : {
    marginTop: '15px',
    height: '40px'
  }
});

function MontarAlert(mensagem, icon) {
  return Swal.fire({
    text: mensagem,
    icon: icon,
    showConfirmButton: false,
    timer: 1500
  })
}

function SignIn(props) {
  const { classes } = props;
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const { authenticated, handleLogin} = useContext(Context);

  // if(authenticated)
  // {
  //   navigate(home);
  // }

  const handleLogin = () => {
    if(username === 'elayne.natalia@outlook.com' && password === 'senha')
    {
      MontarAlert('Seja bem-vindo !', 'success');
      navigate(home);
    }
    else
    {
      return MontarAlert('Usuário não cadastrado. Verifique sua credencial !', 'error');
    }
  };

  return (
    <div className={classes.image}>
      <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>

      <img src={Logo} alt='logotipo do sistema'/>

        <Typography component="h1" variant="h5" style={{ color: '#006750' }}>
          Login
        </Typography>
        <form className={classes.form}>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <Input id="email" name="email" autoComplete="email" autoFocus value={username} onChange={(e) => setUsername(e.target.value)}/>
          </FormControl>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Senha</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </FormControl>

          <Button className={classes.botao}
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Entrar
          </Button>
        </form>
      </Paper>
    </main>
    </div>
  );
}

export default withStyles(styles)(SignIn);