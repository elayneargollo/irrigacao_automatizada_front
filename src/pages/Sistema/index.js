import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import Titulo from "../../components/Titulo/index";
import Image from "../../assets/img/system.png";
import Esquema from "../../assets/img/esquema.png";
import EsquemaEletrico from "../../assets/img/esquemaEletrico.png";
import Sensor from "../../assets/img/sensor.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: '80%',
    marginTop: 25,
    backgroundImage: 'linear-gradient(#99C2B9,#FFFEFF,#FFFEFF, #FFFEFF, #FFFEFF)'
  },
  rootAcordeao: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  fundo :
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));

export default function Sistema() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Sistema" imagem={Image}/>
      <HeaderSider />
      <Card className={classes.root} variant="outlined">
        <CardContent>       
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ marginBottom: '20px'}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
            <Typography className={classes.heading}>Informação Geral</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Sistema possui um total de três plantas cadastradas.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ marginBottom: '20px'}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
            <Typography className={classes.heading}>Equipamentos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <List>
                <ListItemText primary="Mangueira P/ Conexão Bomba Submersa Com Saída 1/2 Pol Eclusa " />
                <ListItemText primary="10 Unidades De Divisor Conector Em T 4mm Branco" />
                <ListItemText primary="Bicos Para Torneira Jardim 1/2 Ou 3/4 Tramontina Original" />
                <ListItemText primary="Mangueira Para Filtro Electrolux Pa11b Pe11x Pa21g 1/4 2mts" />
                <ListItemText primary="Gotejador" />
              </List>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ marginBottom: '20px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
            <Typography className={classes.heading}>Esquemas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img src={Esquema}/>
              <img src={EsquemaEletrico}/>
              <img src={Sensor}/>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
      <Footer/>
    </div>
  );
}
