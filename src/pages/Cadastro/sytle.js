import { makeStyles } from '@material-ui/core/styles'
import Fundo from "../../assets/img/fundo2.jpg";

export default makeStyles((theme) => ({
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
    image: {
        background: `url(${Fundo})`,
        overflow: 'hidden',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
    },
    botao: {
        marginTop: '15px',
        height: '40px'
    },
    espacamento:
    {
        paddingTop: '10px'
    }
}),
);