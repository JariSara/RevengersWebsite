import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import '../../index.css';
import './Players.css';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { Box, Button, CardActions, Collapse, Grid, Modal, makeStyles } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const myStylePlayers = {
  backgroundImage: `url(${process.env.PUBLIC_URL + "../bg.jpg"})`,
  backgroundSize: '100% 100%',
  backgroundRepeat: 'repeat',
  backgroundAttachment: "fixed",
  minHeight: "45vh"
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

const modalStyles = theme => ({
  modalStyle1: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    overflow: 'scroll',
    height: '100%',
    display: 'block'
  }
});


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
        }} style={{ backgroundColor: "rgb(24,24,24)" }}>
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
        className='modalCSS'
        BackdropComponent={Backdrop}
      >
        <div className="modalAdjuster">
          <div className="modalCSS">
            <Card sx={{
              maxWidth: 1000
            }} style={{ backgroundColor: "rgb(24,24,24)" }}>
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

  const rea = CardInfo("Rea", "Rea stands out as one of our most distinctive players, boasting a diverse array of agents at his disposal. This prodigious talent consistently comes to the team's rescue in every match. His aggressive gameplay style often leaves opponents frustrated, their keyboards bearing the brunt of their anger. While his teammates may not always share his enthusiasm for aggressive plays, the outcomes undeniably prove his effectiveness.", "../sky.gif", "player", "21, Norway");
  const DTZomby = CardInfo("DTZomby", "DTZomby embodies our explosive gameplay style. As an aggressive agent, he often infiltrates enemy lines with lightning speed, outpacing his teammates. While his versatility with various agents is commendable, it's when he takes on the role of Raze that he becomes a truly lethal force.", "../omen.gif", "player", "27, Norway");
  const flame = CardInfo("Flame", "Flame, one of our recent additions, hails from Latvia. He leverages his cunning tactics to stealthily gain an advantageous position on the battlefield. His exceptional skills enable him to single-handedly secure and defend a site with precision.", "../kj.gif", "player", "22, Latvia");
  const brotherhanky = CardInfo("hanky", "Hanky Panky serves as the in-game leader of our team. With his authoritative voice, he orchestrates his teammates' movements across the map, tactically outmaneuvering the enemy. His penchant for executing intricate lineups throughout the map frequently bewilders opponents.", "../viper.gif", "player", "27, Norway");
  const toctic = CardInfo("TocTic", "TocTic, alongside Hanky, transitioned to Valorant from a background in CSGO. His extensive experience from the realm of CS enables him to engage in strategic mind games with the opposing team and cast doubt upon their in-game leader", "../breach.gif", "player", "27, Norway");
  const Mange = CardInfo("Mange", "Mange, our Swedish powerhouse, ascended to the Radiant rank, solidifying his reputation as one of Europe's most formidable Cypher players. His intricate trap setups compel adversaries to steer clear at any cost.", "../cypher.gif", "stand in", "24, Sweden");
  const Dinkelbergir = CardInfo("Dinkel", "Dinkelberg holds a pivotal role within our team. His coaching approach instills a sense of composure among our players. Though he seldom takes the field in crucial matches, his profound game knowledge provides us with a strategic advantage over our opponents.", "../brim.gif", "coach", "28, Norway");
  const Kraize = CardInfo("Stortiltarn", "Much like his namesake, this player has a reputation for being highly demanding. He has zero tolerance for errors and doesn't hesitate to assertively communicate his expectations to the team.", "../sova.gif", "stand in", "28, Norway");
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