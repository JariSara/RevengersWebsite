import React from "react";
// @ts-ignore
import listData from "./TournamentData.ts";
import './Tournament.css';
const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "../bg.jpg"})`,
    height: '120vh',
    marginTop: '-70px',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundAttachment: "fixed"
};
function Tournaments() {

    return (
        <div>
            <div className="divAdjuster">
                <div style={myStyle}>
                    {listData.map((item, index) => (
                        <li key={index}>
                            <div className="scoreboard-container">
                                <h1 className="scoreboard-title">{item.organizer}</h1>
                                <div className="team-container">
                                    <div className="team">
                                        <div className="organizerPhoto">
                                        <img src={item.imgSrc} height="210"/>
                                        </div>
                                        <h2>{item.dateStart}-{item.dateEnd}</h2>

                                    </div>
                                </div>
                            </div>
                        </li>))}
                </div>
            </div>
        </div>
    );
}

export default Tournaments;