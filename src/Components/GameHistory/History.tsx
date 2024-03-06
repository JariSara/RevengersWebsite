import React, { useState, useEffect } from 'react';
import '../../index.css';
import './History.css'; // Import the CSS file for styling
// @ts-ignore
import listOfMatches from './MatchData.ts'; // Import the CSS file for styling
import ViewVideo from '../YoutubeComponent/ViewVideo.tsx';
const myStyles = {
  backgroundImage: `url(${process.env.PUBLIC_URL + "../bg.jpg"})`,
  height: '100vh',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'repeat',
  backgroundAttachment: "fixed"
};
interface teamName {
  name: string,
  players: { name1: string, name2: string, name3: string, name4: string, name5: string }
}
interface matchHis {
  team1: string,
  team2: string,
  organizer: string,
  results: { teamHome: number, teamAway: number }
}
function History() {
  console.log(listOfMatches)
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const handleItemClick = (index: number) => {
    // Toggle expansion state for the clicked item
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };
  const condition = true;
  return (
    <div>

      {listOfMatches.map((item, index) => (
        <li key={index}>

          <div
            className={`scoreboard-container ${expandedItem === index ? 'expanded' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <h1 className="scoreboard-title">{item.organizer}</h1>
            <div className="team-container">
              <div className="team">
                <img src="../sova.gif" alt="Team 1 Logo" className="team-logo" height="110" />
                <h2>{item.team1}</h2>
                <p className="score">{item.results.teamHome}</p>

              </div>
              <div className="team">
                <img src="../kayo.gif" alt="Team 2 Logo" className="team-logo" height="110" />
                <h2>{item.team2}</h2>
                <p className="score">{item.results.teamAway}</p>

              </div>
            </div>
            {expandedItem === index && (
              <div className="expanded-details">
                <div className="team">
                  <p className="score">
                    <div className="grid">
                      {item.PlayerData.map((item2, index2) => (
                        <div key={index2} className={index2 == 0 ? 'grid1' : 'grid2'}>

                          <p className="teamFont">{item2.name}</p>
                          {item2.players.map((player, index3) => (
                            <div key={index2}>
                              <p>Player name: {player.name}</p>
                              <p style={{ color: player.kills > 0 ? 'green' : 'red' }}>Kills: {player.kills}</p>
                              <p style={{ color: 'red' }}>Deaths: {player.deaths}</p>
                              <p style={{ color: 'gray' }}>Assists: {player.assists}</p>
                              <p style={{ color: player.plusMinus > 0 ? 'green' : 'red' }}>+/-: {player.plusMinus}</p>
                            </div>))}

                        </div>))}
                    </div>
                  </p>
                </div>
                {item.videoURL ? (
                  <div>
                    <h1>Summary of match: </h1>
                    <ViewVideo embedId="5bZGxo1CGyE" />
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            )}
          </div>
        </li>))}
    </div>

  );

}
const m1: matchHis = {
  team1: "Revengers",
  team2: "Comodo",
  organizer: "Norwegian Valorant League",
  results: { teamHome: 2, teamAway: 1 }
}
const m2: matchHis = {
  team1: "Revengers",
  team2: "Genesis",
  organizer: "Norwegian Valorant League",
  results: { teamHome: 2, teamAway: 0 }
}
const m3: matchHis = {
  team1: "Revengers",
  team2: "E2 Esports",
  organizer: "Norwegian Valorant League",
  results: { teamHome: 2, teamAway: 0 }
}
const m4: matchHis = {
  team1: "Revengers",
  team2: "NTNUI Lag 1",
  organizer: "Norwegian Valorant League",
  results: { teamHome: 2, teamAway: 0 }
}
const m5: matchHis = {
  team1: "Revengers",
  team2: "Synister Valorant",
  organizer: "Gamer.no Beacon Major",
  results: { teamHome: 0, teamAway: 1 }
}
const m6: matchHis = {
  team1: "Revengers",
  team2: "ESP eSport Valorant",
  organizer: "Gamer.no Beacon Major",
  results: { teamHome: 0, teamAway: 1 }
}
const m7: matchHis = {
  team1: "Revengers",
  team2: "Saints eSport Valorant",
  organizer: "Gamer.no Beacon Major",
  results: { teamHome: 0, teamAway: 1 }
}
const m8: matchHis = {
  team1: "Revengers",
  team2: "5STARS Esport",
  organizer: "Gamer.no Beacon Major",
  results: { teamHome: 0, teamAway: 1 }
}
const m9: matchHis = {
  team1: "Revengers",
  team2: "TaperFlex",
  organizer: "Gamer.no Valorant Open - Beacon Circuit",
  results: { teamHome: 0, teamAway: 2 }
}
const m10: matchHis = {
  team1: "Revengers",
  team2: "Gender Benders",
  organizer: "Gamer.no Valorant Open - Beacon Circuit",
  results: { teamHome: 1, teamAway: 0 }
}
const m11: matchHis = {
  team1: "Revengers",
  team2: "Electric Esports",
  organizer: "Gamer.no Valorant Open - Beacon Circuit",
  results: { teamHome: 1, teamAway: 0 }
}
const m12: matchHis = {
  team1: "Revengers",
  team2: "STAX Valorant",
  organizer: "Gamer.no Valorant Open - Beacon Circuit",
  results: { teamHome: 1, teamAway: 0 }
}
export default History;