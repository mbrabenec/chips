console.log("a");

class Game {

  constructor(width, height, interval = 1000, pointsLimit = 100) {

    this.width = width;
    this.height = height;
    this.interval = interval;
    this.pointsLimit = pointsLimit;
    this.board = this._createBoard();
  

  }

  _createBoard () {

    const boardDiv = document.createElement("div")
    boardDiv.style.height = this.height + "px";
    boardDiv.style.width = this.width + "px";
    boardDiv.style.border = "1px solid red";
    return boardDiv;
  }

  renderTo(element) {
    element.appendChild(this.board);
  }

  createCoin() {
    new Chip(this);
  }



}

class Chip {

  constructor(game) {
    this.game = game;
    this.chip = _createChip();
  }

  _createChip() {
    const //////// HERE!!!!


  }




}







const game = new Game(300, 300);
game.renderTo(document.body);




