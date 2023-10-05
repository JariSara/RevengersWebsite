import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import '../../index.css';
import './Players.css';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Box, Button, CardActions, Collapse, Grid, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const style2 = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  transparent: true,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
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
  const [mouseOver, setMouseOver] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (

    <div className="divAdjuster">
      <Button onClick={handleOpen}>
        <Card sx={{
          maxWidth: 500
        }} style={{ backgroundColor: "transparent" }}>
          <div onMouseEnter={e => {
            setMouseOver(true);
          }}
            onMouseLeave={e => {
              setMouseOver(false)
            }}>

            <div >
              <Box className="boxAdjuster">
                <div>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="210"
                    image={imageName}
                  />
                  <p className="newFontt">{playerN}</p>
                  {mouseOver ? (<><p className="BoxedText">{typeOfPlayer}</p><p className="newFontt">{ageAndCountry}</p> </>) : (<p></p>)}
                  <p className="BoxedText" style={style}>{typeOfPlayer}</p>
                  <p className="newFontt" style={style}>{ageAndCountry}</p>

                </div>
              </Box>
            </div>

          </div>
        </Card>

      </Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className="modalAdjuster">
          <div>

            <Card sx={{
              maxWidth: 600
            }} style={{ backgroundColor: "transparent" }}>
              <div>
                <Box className="boxAdjuster2">
                  <div>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="280"

                      image={imageName}
                    />
                    <p className="newFontt">{playerN}</p>
                    <p className="BoxedText">{typeOfPlayer}</p>
                    <p className="fontCardEnlarged">{ageAndCountry}</p>
                    <p className="fontCardEnlarged">{playerInformation}</p>
                  </div>
                </Box>
              </div>
            </Card>
          </div>
        </div>
      </Modal>
    </div>

  )

}

function Players() {

  const rea = CardInfo("Rea", "Rea is one of our most unique players. With a wide range of agents in his arsenal, this child manages to rescue the team every match. His aggressive style makes the opponents slam their keyboard in rage. Although his teammates are not happy about the aggressive peeks, the results speak for themselves. ", "../sky.gif", "player", "21, Norway");
  const DTZomby = CardInfo("DTZomby", "Carlos har kjempestor kuk", "../omen.gif", "player", "27, Norway");
  const flame = CardInfo("Flame", "Flame har banket somalere", "../kj.gif", "player", "24, Latvia");
  const brotherhanky = CardInfo("hanky", "Brother linups", "../viper.gif", "player", "27, Norway");
  const toctic = CardInfo("TocTic", "Toctic er mastermind", "../breach.gif", "player", "27, Norway");
  const Mange = CardInfo("Mange", "Radiant chad", "../cypher.gif", "stand in", "24, Sweden");
  const Dinkelbergir = CardInfo("Dinkel", "topp chad", "../brim.gif", "coach", "28, Norway");
  const Kraize = CardInfo("Stortiltarn", "fucking faggot", "../sova.gif", "stand in", "28, Norway");
  return (
    <div>
      <div className='flexing2'>

        {DTZomby}
        {rea}
        {flame}
        {brotherhanky}
        {toctic}
        {Mange}
        {Dinkelbergir}
        {Kraize}
      </div>
    </div>
  )
}
export default Players;