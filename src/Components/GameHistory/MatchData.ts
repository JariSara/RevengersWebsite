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
  PlayerData: Team[]
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
const m1: matchHis = {
  team1: "Revengers",
  team2: "Comodo",
  organizer: "Norwegian Valorant League",
  results: { teamHome: 2, teamAway: 1 },
  PlayerData: teams2
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
const listOfMatches = [m1, m2, m3, m4];
export default listOfMatches;