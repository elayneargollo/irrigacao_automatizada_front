import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1000,
    marginTop: 120
  }
}));

const planta =
  'A irrigação não é apenas molhar o solo, mas sim quando calculamos a água que precisamos para uma cultura e a colocamos no solo conforme o planejado e o mais regularmente possível.' +
  'Ela veio com o objetivo de ajudar as planta para atender às condições de umidade de solo visando à melhoria da produção agrícola, tanto em quantidade como em qualidade ou oportunidade.' +
  'Na realidade, ela constitui um conjunto de operações (compondo em si um sistema) necessário ao atendimento das necessidades de água para as plantas, bem como eliminar seus excessos, que transcendem à relação solo, água, planta, pura e simplesmente.';

const title = 'Configuração'

export default function Configuracao() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h4" component="h2" color="primary">{title}</Typography>
          <Typography variant="h7" paragraph>{planta}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
