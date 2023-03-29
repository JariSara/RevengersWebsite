import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import '../../index.css';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Box, CardActions, Collapse, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const myStyle = {
  backgroundImage: `url(${process.env.PUBLIC_URL + "/val.jpg"})`,
  height: '100vh',
  marginTop: '-70px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const styles = {
  transparentBar: {
    backdropFilter: 'blur(1400)'
  }
};

const CardInfo = function (playerName, playerInformation) {
  const playerN = playerName;
  const playerI = playerInformation;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className='blurContent'>
    <Card sx={{ maxWidth: 500, ':hover': {
        boxShadow: 20, blur:2000,
    } }} style={{ backgroundColor: "black", borderColor: "red" }}>
      <div className='blurContent'>
      <Box sx={{ border: 1, borderColor: '#FFFFFF', borderWidth:"5px"}}>
      <div className='blurContent'>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="../Revengers_Logo.png" 
        />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            
            <span className="newFont">{playerN}</span>
          </Typography>
        </CardContent> 
        <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <button></button>
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          <span className="playerDescriptionFont">{playerI}</span>
          </Typography>
        </CardContent>
      </Collapse>
      </Box>
      </div>
    </Card>
    </div>
  )

}

function Players() {

  const rea = CardInfo("RVG Rea", "Rea is one of our most unique players. With a wide range of agents in his arsenal, this child manages to rescue the team every match. His aggressive style makes the opponents slam their keyboard in rage. Although his teammates are not happy about the aggressive peeks, the results speak for themselves. ");
  const DTZomby = CardInfo("RVG DTZomby", "Carlos har kjempestor kuk");
  const flame = CardInfo("RVG Flame", "Flame har banket somalere");
  const brotherhanky = CardInfo("RVG Brotherhanky", "Brother linups");
  const toctic = CardInfo("RVG TocTic", "Toctic er mastermind");
  return (
    <Grid container>
      <Grid xs={4} md={6}>
        <Grid item>    {DTZomby}</Grid>
      </Grid>
      <Grid xs={4} md={4}>
        <Grid item>  {rea}</Grid>
      </Grid>
      <Grid xs={4} md={4}>
        <Grid item>  {flame}</Grid>
      </Grid>
      <Grid xs={4} md={4}>
        <Grid item>  {brotherhanky}</Grid>
      </Grid>
      <Grid xs={4} md={4}>
        <Grid item>  {toctic}</Grid>
      </Grid>

    </Grid>
  )
}
export default Players;