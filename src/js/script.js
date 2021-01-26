

class Game {

  constructor(width, height, interval = 1000, pointsLimit = 8) {

    this.width = width;
    this.height = height;
    this.widthLimit = this.width - 70;
    this.heightLimit = this.height - 70;
    this.interval = interval;
    this.pointsLimit = pointsLimit;
    this.points = 0;
    this.timeOutID = null;

    this.board = this._createBoard();

    this.chipsArray = [];
  

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

  createChip() {
    new Chip(this);
  }

  addPoints(points) {
    this.points += points;
    this.updateScore();
  }

  updateScore () {
    document.getElementById("score").textContent = this.points;
  }

  run() {

 
    this.timeOutID = setTimeout( () => {

      const chip = new Chip(this);
      this.chipsArray.push(chip);
      this.run();

    }
  , this.interval);

  }

  reset() {
    clearTimeout(this.timeOutID);

    this.chipsArray.forEach(chip => {
      chip.destroy();
    });

    this.points = 0;
    this.updateScore();
    this.timeOutID = null;
    
  }


}

class Chip {

  constructor(game) {
    this.game = game;
    this.points = Math.floor(Math.random() * game.pointsLimit);
    this.chip = this._createChip(game.widthLimit, game.heightLimit);

    this.game.board.appendChild(this.chip);

  }

  _createChip(widthLimit, heightLimit) {

    const chip = document.createElement("div");
    chip.classList.add("chip");
    chip.style.left = Math.floor(Math.random() * widthLimit) +"px";
    chip.style.top = Math.floor(Math.random() * heightLimit) +"px";
    chip.innerText = this.points;
    chip.addEventListener("click", () => {
      this.destroy()
    });

    return chip;

  }

  destroy() {
    game.addPoints(this.points);
    this.chip.remove();
  }



}







const game = new Game(300, 300);
game.renderTo(document.body);
// game.run()

document.getElementById("reset-button").addEventListener("click", () => {
  game.reset();
});

document.getElementById("start-button").addEventListener("click", () => {
 game.run();
});




