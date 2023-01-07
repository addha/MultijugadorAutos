class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
    this.rank = 0;  // ANEXO DE RANK PRO41  CAMBIO 1
    this.fuel = 185;
    this.life = 185;
    this.score = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = width / 2 - 100;
    } else {
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score
    });
  }

  getDistance() {
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score,
      life: this.life  
    });
    /// dar de alta  life Pro42
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  // ACTUALIZA LA BD  CON EL VALOR DEL RANK  CAMBIO 1
  //FUNCION DE  LEECTURA
  getCarsAtEnd() {
    database.ref("carsAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }

  //FUNCION ESTATICA DE ACTUALIZACION  RANK   CAMBIO 1
  static updateCarsAtEnd(rank) {
    database.ref("/").update({
      carsAtEnd: rank
    });
  }
}
