import React, { useState } from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import '../../index.css';
import './Players.css';
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
const showShit = false;
const styles = {
  transparentBar: {
    backdropFilter: 'blur(1400)'
  }
};
function changeBackground(e) {
  e.target.style.background = 'red';
}
const CardInfo = function (playerName, playerInformation, imageName, typeOfPlayer, ageAndCountry) {
  const playerN = playerName;
  const playerI = playerInformation;
  const [expanded, setExpanded] = React.useState(false);
  const [style, setStyle] = useState({ display: 'none' });
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (

    <div className="divAdjuster">
      <Card sx={{
        maxWidth: 500, ':hover': {
          boxShadow: 20
        }
      }} style={{ backgroundColor: "transparent" }}>
        <div onMouseEnter={e => {
          setStyle({ display: 'block' });
        }}
          onMouseLeave={e => {
            setStyle({ display: 'none' })
          }}>

          <div >
            <Box sx={{ border: 85, borderColor: 'transparent' }}>
              <div>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={imageName}
                />

                <p className="newFontt">{playerN}</p>
                <p className="BoxedText">{typeOfPlayer}</p>
                <p className="newFontt">{ageAndCountry}</p>
                <p className='newFontt' style={style}>{playerI}</p>
              </div>
            </Box>
          </div>
          <CardContent>
            <Typography variant="body2" color="text.secondary">

            </Typography>
          </CardContent>

        </div>
      </Card>
    </div>

  )

}

function Players() {

  const rea = CardInfo("Rea", "Rea is one of our most unique players. With a wide range of agents in his arsenal, this child manages to rescue the team every match. His aggressive style makes the opponents slam their keyboard in rage. Although his teammates are not happy about the aggressive peeks, the results speak for themselves. ", "../sky.gif", "player", "24, Norway");
  const DTZomby = CardInfo("DTZomby", "Carlos har kjempestor kuk", "../omen.gif", "player", "27, Norway");
  const flame = CardInfo("Flame", "Flame har banket somalere", "../kayo.gif", "player", "24, Latvia");
  const brotherhanky = CardInfo("hanky", "Brother linups", "../viper.gif", "player", "27, Norway");
  const toctic = CardInfo("TocTic", "Toctic er mastermind", "../breach.gif", "player", "27, Norway");
  return (
    <div>
      <p>Hello</p>
      <div className='flexing'>

        {DTZomby}

        {rea}

        {flame}

        {brotherhanky}

        {toctic}

      </div>
    </div>
  )
}
export default Players;