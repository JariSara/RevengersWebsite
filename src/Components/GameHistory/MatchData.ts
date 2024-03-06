interface Player {
  name: string;
  kills: number;
  assists: number;
  deaths: number;
  plusMinus: number;
}

interface Team {
  name: string;
  players: Player[];
}

interface matchHis {
  team1: string,
  team2: string,
  organizer: string,
  results: { teamHome: number, teamAway: number },
  PlayerData: Team[],
  videoURL?: string
}
const teams: Team[] = [
  {
    name: "The Revengers",
    players: [
      {
        name: "DTzomby",
        kills: 35,
        assists: 14,
        deaths: 27,
        plusMinus: 8,
      },
      {
        name: "reaywo",
        kills: 34,
        assists: 16,
        deaths: 22,
        plusMinus: 12,
      },
      {
        name: "flame",
        kills: 32,
        assists: 12,
        deaths: 25,
        plusMinus: 7,
      },
      {
        name: "RVG TocTic",
        kills: 29,
        assists: 19,
        deaths: 22,
        plusMinus: 7,
      },
      {
        name: "brotherhanky",
        kills: 23,
        assists: 4,
        deaths: 22,
        plusMinus: 1,
      },
    ],
  },
  {
    name: "Genesis",
    players: [
      {
        name: "Juliet6569",
        kills: 36,
        assists: 12,
        deaths: 33,
        plusMinus: 3,
      },
      {
        name: "Genesis Nova",
        kills: 32,
        assists: 2,
        deaths: 26,
        plusMinus: 6,
      },
      {
        name: "Genesis Ezios",
        kills: 23,
        assists: 12,
        deaths: 30,
        plusMinus: -7,
      },
      {
        name: "Saniel",
        kills: 11,
        assists: 15,
        deaths: 32,
        plusMinus: -21,
      },
      {
        name: "Genesis Nantes",
        kills: 2,
        assists: 4,
        deaths: 15,
        plusMinus: -13,
      },
    ],
  },
];

const teams2: Team[] = [
  {
    name: "The Revengers",
    players: [
      {
        name: "Yoyebyn",
        kills: 71,
        assists: 12,
        deaths: 48,
        plusMinus: 23,
      },
      {
        name: "reaywo",
        kills: 60,
        assists: 19,
        deaths: 52,
        plusMinus: 8,
      },
      {
        name: "brotherhanky",
        kills: 42,
        assists: 23,
        deaths: 48,
        plusMinus: -6,
      },
      {
        name: "RVG TocTic",
        kills: 34,
        assists: 21,
        deaths: 51,
        plusMinus: -17,
      },
      {
        name: "DTzomby",
        kills: 30,
        assists: 32,
        deaths: 52,
        plusMinus: -22,
      },
    ],
  },
  {
    name: "Comodo",
    players: [
      {
        name: "Magepage",
        kills: 63,
        assists: 18,
        deaths: 53,
        plusMinus: 10,
      },
      {
        name: "DaQada",
        kills: 57,
        assists: 28,
        deaths: 46,
        plusMinus: 11,
      },
      {
        name: "OJNameLess",
        kills: 49,
        assists: 26,
        deaths: 40,
        plusMinus: 9,
      },
      {
        name: "Drazzilion",
        kills: 43,
        assists: 33,
        deaths: 49,
        plusMinus: -6,
      },
      {
        name: "Fakeface",
        kills: 39,
        assists: 27,
        deaths: 49,
        plusMinus: -10,
      },
    ],
  },
];

const team3: Team[] = [
  {
    name: "The Revengers",
    players: [
      {
        name: "flame",
        kills: 36,
        assists: 19,
        deaths: 25,
        plusMinus: 11,
      },
      {
        name: "brotherhanky",
        kills: 32,
        assists: 8,
        deaths: 22,
        plusMinus: 10,
      },
      {
        name: "Yoyebyn",
        kills: 28,
        assists: 10,
        deaths: 18,
        plusMinus: 10,
      },
      {
        name: "DTzomby",
        kills: 26,
        assists: 9,
        deaths: 22,
        plusMinus: 4,
      },
    ],
  },
  {
    name: "E2 Esports",
    players: [
      {
        name: "MDikos",
        kills: 30,
        assists: 5,
        deaths: 27,
        plusMinus: 3,
      },
      {
        name: "flamemaN",
        kills: 28,
        assists: 12,
        deaths: 30,
        plusMinus: -2,
      },
      {
        name: "RUSH",
        kills: 17,
        assists: 15,
        deaths: 32,
        plusMinus: -15,
      },
      {
        name: "Overtime",
        kills: 17,
        assists: 6,
        deaths: 31,
        plusMinus: -14,
      },
      {
        name: "TorosHS",
        kills: 16,
        assists: 6,
        deaths: 28,
        plusMinus: -12,
      },
    ],
  },
];
const teams4: Team[] = [
  {
    name: "The Revengers",
    players: [
      {
        name: "Yoyebyn",
        kills: 31,
        assists: 9,
        deaths: 22,
        plusMinus: 9,
      },
      {
        name: "flame",
        kills: 30,
        assists: 17,
        deaths: 18,
        plusMinus: 12,
      },
      {
        name: "RVG TocTic",
        kills: 23,
        assists: 13,
        deaths: 17,
        plusMinus: 6,
      },
    ],
  },
  {
    name: "NTNUI Lag 1",
    players: [
      {
        name: "Belino",
        kills: 27,
        assists: 8,
        deaths: 25,
        plusMinus: 2,
      },
      {
        name: "clueless",
        kills: 24,
        assists: 9,
        deaths: 29,
        plusMinus: -5,
      },
      {
        name: "FishGirl",
        kills: 23,
        assists: 9,
        deaths: 32,
        plusMinus: -9,
      },
      {
        name: "Henryen",
        kills: 15,
        assists: 9,
        deaths: 31,
        plusMinus: -16,
      },
      {
        name: "Saftflaske",
        kills: 9,
        assists: 10,
        deaths: 31,
        plusMinus: -22,
      },
    ],
  },
];

const teams5: Team[] = [
  {
    name: "The Revengers",
    players: [
      {
        name: "flame",
        kills: 66,
        assists: 10,
        deaths: 50,
        plusMinus: 16,
      },
      {
        name: "DTzomby",
        kills: 60,
        assists: 22,
        deaths: 50,
        plusMinus: 10,
      },
      {
        name: "RVG TocTic",
        kills: 50,
        assists: 28,
        deaths: 40,
        plusMinus: 10,
      },
      {
        name: "vibrant",
        kills: 49,
        assists: 24,
        deaths: 46,
        plusMinus: 3,
      },
      {
        name: "kjotlefse",
        kills: 22,
        assists: 30,
        deaths: 51,
        plusMinus: -29,
      },
    ],
  },
  {
    name: "Comodo",
    players: [
      {
        name: "NOR-2pro4you",
        kills: 69,
        assists: 20,
        deaths: 47,
        plusMinus: 22,
      },
      {
        name: "CryzX",
        kills: 53,
        assists: 25,
        deaths: 48,
        plusMinus: 5,
      },
      {
        name: "Drazzilion",
        kills: 43,
        assists: 22,
        deaths: 56,
        plusMinus: -13,
      },
      {
        name: "Magepage",
        kills: 37,
        assists: 10,
        deaths: 53,
        plusMinus: -16,
      },
      {
        name: "OJNameLess",
        kills: 35,
        assists: 13,
        deaths: 44,
        plusMinus: -9,
      },
    ],
  },
];

const teams6: Team[] = [
  {
    name: "The Revengers",
    players: [
      {
        name: "flame",
        kills: 35,
        assists: 6,
        deaths: 24,
        plusMinus: 11,
      },
      {
        name: "brotherhanky",
        kills: 33,
        assists: 11,
        deaths: 20,
        plusMinus: 13,
      },
      {
        name: "DTzomby",
        kills: 33,
        assists: 8,
        deaths: 21,
        plusMinus: 12,
      },
      {
        name: "RVG TocTic",
        kills: 28,
        assists: 8,
        deaths: 18,
        plusMinus: 10,
      },
      {
        name: "vibrant",
        kills: 27,
        assists: 14,
        deaths: 17,
        plusMinus: 10,
      },
    ],
  },
  {
    name: "Valkyries",
    players: [
      {
        name: "VSB Jazz",
        kills: 27,
        assists: 8,
        deaths: 28,
        plusMinus: -1,
      },
      {
        name: "iiSqu4Qy",
        kills: 24,
        assists: 2,
        deaths: 31,
        plusMinus: -7,
      },
      {
        name: "Rawsiiee",
        kills: 21,
        assists: 8,
        deaths: 31,
        plusMinus: -10,
      },
      {
        name: "serlin",
        kills: 17,
        assists: 7,
        deaths: 32,
        plusMinus: -15,
      },
      {
        name: "Velinkadinka",
        kills: 11,
        assists: 6,
        deaths: 34,
        plusMinus: -23,
      },
    ],
  },
];
const teams7: Team[] = [
  {
    name: "The Revengers",
    players: [
      {
        name: "Yoyebyn",
        kills: 38,
        assists: 7,
        deaths: 30,
        plusMinus: 8,
      },
      {
        name: "vibrant",
        kills: 20,
        assists: 4,
        deaths: 29,
        plusMinus: -9,
      },
      {
        name: "DTzomby",
        kills: 17,
        assists: 9,
        deaths: 34,
        plusMinus: -17,
      },
      {
        name: "RVG TocTic",
        kills: 14,
        assists: 15,
        deaths: 29,
        plusMinus: -15,
      },
    ],
  },
  {
    name: "Astra Nebula",
    players: [
      {
        name: "LegitCyber",
        kills: 44,
        assists: 11,
        deaths: 25,
        plusMinus: 19,
      },
      {
        name: "manex",
        kills: 43,
        assists: 10,
        deaths: 21,
        plusMinus: 22,
      },
      {
        name: "Noir",
        kills: 27,
        assists: 5,
        deaths: 23,
        plusMinus: 4,
      },
      {
        name: "RXNYY",
        kills: 19,
        assists: 10,
        deaths: 21,
        plusMinus: -2,
      },
      {
        name: "Covi",
        kills: 13,
        assists: 12,
        deaths: 10,
        plusMinus: 3,
      },
      {
        name: "Fartnutgod",
        kills: 8,
        assists: 13,
        deaths: 13,
        plusMinus: -5,
      },
    ],
  },
];

const teams8: Team[] = [
  {
    name: "The Revengers",
    players: [
      {
        name: "DTzomby",
        kills: 42,
        assists: 11,
        deaths: 26,
        plusMinus: 16,
      },
      {
        name: "brotherhanky",
        kills: 42,
        assists: 11,
        deaths: 25,
        plusMinus: 17,
      },
      {
        name: "RVG TocTic",
        kills: 39,
        assists: 19,
        deaths: 24,
        plusMinus: 15,
      },
      {
        name: "vibrant",
        kills: 31,
        assists: 20,
        deaths: 26,
        plusMinus: 5,
      },
      {
        name: "kjotlefse",
        kills: 12,
        assists: 11,
        deaths: 27,
        plusMinus: -15,
      },
    ],
  },
  {
    name: "UiA Kraken - A",
    players: [
      {
        name: "F0rz",
        kills: 30,
        assists: 6,
        deaths: 34,
        plusMinus: -4,
      },
      {
        name: "ES1x",
        kills: 26,
        assists: 15,
        deaths: 31,
        plusMinus: -5,
      },
      {
        name: "assibob",
        kills: 25,
        assists: 17,
        deaths: 36,
        plusMinus: -11,
      },
      {
        name: "Flores",
        kills: 24,
        assists: 9,
        deaths: 34,
        plusMinus: -10,
      },
      {
        name: "Sophonwat",
        kills: 23,
        assists: 5,
        deaths: 31,
        plusMinus: -8,
      },
    ],
  },
];

const m1: matchHis = {
  team1: "Revengers",
  team2: "Frog frags",
  organizer: "Norwegian Valorant League",
  results: { teamHome: 2, teamAway: 1 },
  PlayerData: teams2,
  videoURL: "5bZGxo1CGyE"
}
const m2: matchHis = {
  team1: "Revengers",
  team2: "Genesis",
  organizer: "Norwegian Valorant League",
  results: { teamHome: 2, teamAway: 0 },
  PlayerData: teams
}
const m3: matchHis = {
  team1: "Revengers",
  team2: "E2 Esports",
  organizer: "Norwegian Valorant League",
  results: { teamHome: 2, teamAway: 0 },
  PlayerData: team3
}
const m4: matchHis = {
  team1: "Revengers",
  team2: "NTNUI Lag 1",
  organizer: "Norwegian Valorant League",
  results: { teamHome: 2, teamAway: 0 },
  PlayerData: teams4
}
const m5: matchHis = {
  team1: "Revengers",
  team2: "Comodo",
  organizer: "Norwegian Valorant League Autumn",
  results: { teamHome: 2, teamAway: 1 },
  PlayerData: teams5
}
const m6: matchHis = {
  team1: "Revengers",
  team2: "Valkyries",
  organizer: "Norwegian Valorant League Autumn",
  results: { teamHome: 2, teamAway: 0 },
  PlayerData: teams6
}
const m7: matchHis = {
  team1: "Revengers",
  team2: "Astra Nebula",
  organizer: "Norwegian Valorant League Autumn",
  results: { teamHome: 0, teamAway: 2 },
  PlayerData: teams7
}
const m8: matchHis = {
  team1: "Revengers",
  team2: "UiA Kraken",
  organizer: "Norwegian Valorant League Autumn",
  results: { teamHome: 2, teamAway: 0 },
  PlayerData: teams8
}
const listOfMatches = [m8, m7, m6, m5, m4, m3, m2, m1];
export default listOfMatches;