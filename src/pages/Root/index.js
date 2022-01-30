import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import image from '../../assets/img/plantas.jpeg';
import imageRega from '../../assets/img/rega.jpeg';
import imageAutomatizacao from '../../assets/img/automatizacao.jpeg';
import jardim from '../../assets/img/jardim.jpeg';
import './Sytle.css';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  root: {
    marginLeft: 240,
    marginRight: "auto",
  },
  rootText: {
    marginLeft: 255,
    marginRight: "auto",
  },
}));


const itemData = [
  {
    img: imageAutomatizacao,
    author: 'author',
  },
  {
    img: image,
    author: 'author',
  },
  {
    img: imageRega,
    author: 'author',
  },
  {
    img: jardim,
    author: 'author',
  }
];


const planta =
  'A irrigação não é apenas molhar o solo, mas sim quando calculamos a água que precisamos para uma cultura e a colocamos no solo conforme o planejado e o mais regularmente possível.' +
  'Ela veio com o objetivo de ajudar as planta para atender às condições de umidade de solo visando à melhoria da produção agrícola, tanto em quantidade como em qualidade ou oportunidade.' +
  'Na realidade, ela constitui um conjunto de operações (compondo em si um sistema) necessário ao atendimento das necessidades de água para as plantas, bem como eliminar seus excessos, que transcendem à relação solo, água, planta, pura e simplesmente.';


const irrigacao =
  'A irrigação não é apenas molhar o solo, mas sim quando calculamos a água que precisamos para uma cultura e a colocamos no solo conforme o planejado e o mais regularmente possível.' +
  'Ela veio com o objetivo de ajudar as planta para atender às condições de umidade de solo visando à melhoria da produção agrícola, tanto em quantidade como em qualidade ou oportunidade.' +
  'Na realidade, ela constitui um conjunto de operações (compondo em si um sistema) necessário ao atendimento das necessidades de água para as plantas, bem como eliminar seus excessos, que transcendem à relação solo, água, planta, pura e simplesmente.';


export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div>
      
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={4}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <div className={classes.rootText}>
        <h1>Plantas</h1>
        <Typography variant="h7" paragraph>{planta} </Typography>

        <h1>Irrigação</h1>
        <Typography variant="h7" paragraph>{irrigacao} </Typography>

      </div>

    </div>
  );
}