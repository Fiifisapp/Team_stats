const team = {
    _players:[
      {firstName: 'Pablo', lastName: 'Sanchez',
  age: 11}, 
      {firstName: 'Fiifi', lastName: 'Freebody',
  age: 22},
      {firstName: 'Presh', lastName: 'Lele',
  age: 23}
    ],
    _games:[
    {opponent: 'Broncos', teamPoints: 42,
  opponentPoints: 27},
    {opponent: 'Milwaukee', teamPoints: 82,
  opponentPoints: 29},
    {opponent: 'Atlanta Hawks', teamPoints: 67,
  opponentPoints: 39}
    ],
    get players (){
      return this._players;
    },
    get games (){
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
    this.players.push(player);
    },
  addGame(opponentName, teamPoints, opponentPoints) {
      let game = {
        opponentName: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
    this.games.push(game);
    },
  
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  team.addGame('Titans', 100, 98);
  team.addGame('Boston celtics', 124, 30);
  team.addGame('Brooklyn', 105, 48);
  
  console.log(team.players);
  console.log(team.games);
  
  
  