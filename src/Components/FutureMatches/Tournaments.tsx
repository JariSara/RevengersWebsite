import React from "react";
// @ts-ignore
import listData from "./TournamentData.ts";
import './Tournament.css';
const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "../bg.jpg"})`,
    marginTop: "-40px",
    backgroundSize: '100% 100%',
    backgroundRepeat: 'repeat',
    backgroundAttachment: "fixed",
    minHeight:"100vh"
};
function Tournaments() {

    return (
        <div>
            <div style={myStyle}>
                <div className="divAdjuster">
                    <div style={myStyle}>
                        {listData.map((item, index) => (
                            <li key={index}>
                                <div className="scoreboard-container">
                                    <h1 className="scoreboard-title">{item.organizer}</h1>
                                    <div className="team-container">
                                        <div className="team">
                                            <div className="organizerPhoto">
                                                <img src={item.imgSrc} height="210" />
                                            </div>
                                            <h2>{item.dateStart}-{item.dateEnd}</h2>

                                        </div>
                                    </div>
                                </div>
                            </li>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tournaments;