interface tournData {
    organizer: string;
    dateStart: string;
    dateEnd: string;
    imgSrc: string;
}

const tData1: tournData={
    organizer: "Norwegian Valorant League Autumn 2023",
    dateStart: "19th October",
    dateEnd: "10th December",
    imgSrc: '../gamerValoLeague.png'
}

const tData2: tournData={
    organizer: "Beacon North Ladder",
    dateStart: "28th September",
    dateEnd: "19th November",
    imgSrc: "beacon.png"
}

const listData =[tData1, tData2];

export default listData;