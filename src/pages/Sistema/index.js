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

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1000,
    marginTop: 120
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
}));

export default function Sistema() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h4" component="h2" color="primary">
            Sistema
          </Typography>

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
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

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
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
                <ListItemText primary="Três solenoides normalmente fechada" />
                <ListItemText primary="Mangueira" />
              </List>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
            <Typography className={classes.heading}>Esquemas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               Teste
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
