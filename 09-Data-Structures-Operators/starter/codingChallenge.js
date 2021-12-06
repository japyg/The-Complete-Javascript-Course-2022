const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Coding Challenge # 1
//1
// const [players1, players2] = game.players;
// console.log(players1, players2);

//2
//my solution
// const gk = players1[0];
// const fieldPlayers = function () {
//   for (let i = 1; i < players1.length; i++) {
//     console.log(players1[i]);
//   }
//   return;
// };
// console.log(gk);
// fieldPlayers();

//simple solution
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

//6

// const printGoals = function (...playerNames) {
//   console.log(playerNames);
//   console.log(playerNames.length);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

//7

// team1 < team2 && console.log('Team 1 is more likely to win');

// team2 < team1 && console.log('Team 2 is more likely to win');

//Coding Challenge #2
//1
// // for (const [index, player] of game.scored.entries()) {
//   // console.log(`Goal ${index + 1}: ${player}`);
// }

//2
// let sum = 0;
// for (const oddValues of Object.values(game.odds)) {
//   // console.log(oddValues);
//   sum += oddValues;
// }
// const averageOdds = console.log(sum / 3);

//3

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   // console.log(teamStr);

//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

//Bonus
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//Coding Challenge #3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, ' 🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// const average = 90 / gameEvents.size;
// console.log(average);
// console.log(`An event happened, on average, every ${average} minutes`);

// //more accurate solution using 92 in exact
// const exactTime = [...gameEvents.keys()].pop();
// console.log(exactTime);
// console.log(
//   `An event happened, on average, every ${exactTime / gameEvents.size}  minutes`
// );

// //4
// for (const [time, event] of gameEvents) {
//   const halfStr = time <= 45 ? '[First Half]' : '[Second Half]';
//   console.log(`${halfStr} ${time}: ${event}`);
// }
