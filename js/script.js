/* Game variables */
var sound;
var stage;
var map;
var gameObjects;
var background = 0;
var cactus = 1;
var bullet = 2;
var revolver = 3;
var bomb = 4;
var money = 5;
var beer = 6;
var whisky = 7;
var cowboy = 8;
var bandit = 9;
var cowboyHealth = 100;
var cowboyPower = [10];
var banditHealth = 100;
var banditPower = [10];
var cowboyPlayer;
var banditPlayer;

var audioID = "Song";

/* Load Audio for Game */
function loadAudio() {
  createjs.Sound.registerSound("audio/game.mp3", audioID);
}

/* Play Audio Function */
function playAudio() {
  createjs.Sound.play(audioID);
}

/* Function for stoping audio */
function stopAudio() { 
  createjs.Sound.stop();
} 

/* Map Script */
stage = document.querySelector('#stage');
stage.addEventListener('click', movePlayer);
window.addEventListener('resize', render);

/* Load Map */
map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

/* Load Game Objects */
gameObjects = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var size = function() {
  var stageSize1 = getComputedStyle(stage);
  return parseInt(stageSize1.width) / 10;
};

var rows = map.length;
var columns = map[0].length;
var turn = {
  control: Math.round(Math.random()),
  fight: true,
  defend: false
};

/* Tablet Animation */
function availableTablets() {
  if (cowboyHealth > 0 && banditHealth > 0) {
    if (turn.control) {

      if (cowboyPlayer > 10) {
        if (
          map[cowboyRow - 1][cowboyColumn] !== cactus &&
          gameObjects[cowboyRow - 1][cowboyColumn] !== bandit
        ) {
          document
            .getElementById(cowboyPlayer - 10 + '')
            .classList.add('movement', 'hoverable');

          if (cowboyPlayer > 20) {
            if (
              map[cowboyRow - 2][cowboyColumn] !== cactus &&
              gameObjects[cowboyRow - 2][cowboyColumn] !== bandit
            ) {
              document
                .getElementById(cowboyPlayer - 20 + '')
                .classList.add('movement2', 'hoverable');

              if (cowboyPlayer > 30) {
                if (
                  map[cowboyRow - 3][cowboyColumn] !== cactus &&
                  map[cowboyRow - 2][cowboyColumn] !== cactus &&
                  gameObjects[cowboyRow - 3][cowboyColumn] !== bandit
                ) {
                  document
                    .getElementById(cowboyPlayer - 30 + '')
                    .classList.add('movement3', 'hoverable');
                }
              }
            }
          }
        }
      }
      if (cowboyPlayer < 91) {
        if (
          map[cowboyRow + 1][cowboyColumn] !== cactus &&
          gameObjects[cowboyRow + 1][cowboyColumn] !== bandit
        ) {
          document
            .getElementById(cowboyPlayer + 10 + '')
            .classList.add('movement', 'hoverable');

          if (cowboyPlayer < 81) {
            if (
              map[cowboyRow + 2][cowboyColumn] !== cactus &&
              gameObjects[cowboyRow + 2][cowboyColumn] !== bandit
            ) {
              document
                .getElementById(cowboyPlayer + 20 + '')
                .classList.add('movement2', 'hoverable');

              if (cowboyPlayer < 71) {
                if (
                  map[cowboyRow + 3][cowboyColumn] !== cactus &&
                  gameObjects[cowboyRow + 3][cowboyColumn] !== bandit
                ) {
                  document
                    .getElementById(cowboyPlayer + 30 + '')
                    .classList.add('movement3', 'hoverable');
                }
              }
            }
          }
        }
      }
      if (cowboyPlayer % 10 !== 1) {
        if (
          map[cowboyRow][cowboyColumn - 1] !== cactus &&
          gameObjects[cowboyRow][cowboyColumn - 1] !== bandit
        ) {
          document
            .getElementById(cowboyPlayer - 1 + '')
            .classList.add('movement', 'hoverable');

          if (cowboyPlayer % 10 !== 2) {
            if (
              map[cowboyRow][cowboyColumn - 2] !== cactus &&
              gameObjects[cowboyRow][cowboyColumn - 2] !== bandit
            ) {
              document
                .getElementById(cowboyPlayer - 2 + '')
                .classList.add('movement2', 'hoverable');

              if (cowboyPlayer % 10 !== 3) {
                if (
                  map[cowboyRow][cowboyColumn - 3] !== cactus &&
                  gameObjects[cowboyRow][cowboyColumn - 3] !== bandit
                ) {
                  document
                    .getElementById(cowboyPlayer - 3 + '')
                    .classList.add('movement3', 'hoverable');
                }
              }
            }
          }
        }
      }
      if (cowboyPlayer % 10 !== 0) {
        if (
          map[cowboyRow][cowboyColumn + 1] !== cactus &&
          gameObjects[cowboyRow][cowboyColumn + 1] !== bandit
        ) {
          document
            .getElementById(cowboyPlayer + 1 + '')
            .classList.add('movement', 'hoverable');

          if (cowboyPlayer % 10 !== 9) {
            if (
              map[cowboyRow][cowboyColumn + 2] !== cactus &&
              gameObjects[cowboyRow][cowboyColumn + 2] !== bandit
            ) {
              document
                .getElementById(cowboyPlayer + 2 + '')
                .classList.add('movement2', 'hoverable');

              if (cowboyPlayer % 10 !== 8) {
                if (
                  map[cowboyRow][cowboyColumn + 3] !== cactus &&
                  gameObjects[cowboyRow][cowboyColumn + 3] !== bandit
                ) {
                  document
                    .getElementById(cowboyPlayer + 3 + '')
                    .classList.add('movement3', 'hoverable');
                }
              }
            }
          }
        }
      }
    } else {
      if (banditPlayer > 10) {
        if (
          map[banditRow - 1][banditColumn] !== cactus &&
          gameObjects[banditRow - 1][banditColumn] !== cowboy
        ) {
          document
            .getElementById(banditPlayer - 10 + '')
            .classList.add('movement4', 'hoverable');

          if (banditPlayer > 20) {
            if (
              map[banditRow - 2][banditColumn] !== cactus &&
              gameObjects[banditRow - 2][banditColumn] !== cowboy
            ) {
              document
                .getElementById(banditPlayer - 20 + '')
                .classList.add('movement5', 'hoverable');

              if (banditPlayer > 30) {
                if (
                  map[banditRow - 3][banditColumn] !== cactus &&
                  map[banditRow - 2][banditColumn] !== cactus &&
                  gameObjects[banditRow - 3][banditColumn] !== cowboy
                ) {
                  document
                    .getElementById(banditPlayer - 30 + '')
                    .classList.add('movement6', 'hoverable');
                }
              }
            }
          }
        }
      }
      if (banditPlayer < 91) {
        if (
          map[banditRow + 1][banditColumn] !== cactus &&
          gameObjects[banditRow + 1][banditColumn] !== cowboy
        ) {
          document
            .getElementById(banditPlayer + 10 + '')
            .classList.add('movement4', 'hoverable');

          if (banditPlayer < 81) {
            if (
              map[banditRow + 2][banditColumn] !== cactus &&
              gameObjects[banditRow + 2][banditColumn] !== cowboy
            ) {
              document
                .getElementById(banditPlayer + 20 + '')
                .classList.add('movement5', 'hoverable');

              if (banditPlayer < 71) {
                if (
                  map[banditRow + 3][banditColumn] !== cactus &&
                  gameObjects[banditRow + 3][banditColumn] !== cowboy
                ) {
                  document
                    .getElementById(banditPlayer + 30 + '')
                    .classList.add('movement6', 'hoverable');
                }
              }
            }
          }
        }
      }
      if (banditPlayer % 10 !== 1) {
        if (
          map[banditRow][banditColumn - 1] !== cactus &&
          gameObjects[banditRow][banditColumn - 1] !== cowboy
        ) {
          document
            .getElementById(banditPlayer - 1 + '')
            .classList.add('movement4', 'hoverable');

          if (banditPlayer % 10 !== 2) {
            if (
              map[banditRow][banditColumn - 2] !== cactus &&
              gameObjects[banditRow][banditColumn - 2] !== cowboy
            ) {
              document
                .getElementById(banditPlayer - 2 + '')
                .classList.add('movement5', 'hoverable');

              if (banditPlayer % 10 !== 3) {
                if (
                  map[banditRow][banditColumn - 3] !== cactus &&
                  gameObjects[banditRow][banditColumn - 3] !== cowboy
                ) {
                  document
                    .getElementById(banditPlayer - 3 + '')
                    .classList.add('movement6', 'hoverable');
                }
              }
            }
          }
        }
      }
      if (banditPlayer % 10 !== 0) {
        if (
          map[banditRow][banditColumn + 1] !== cactus &&
          gameObjects[banditRow][banditColumn + 1] !== cowboy
        ) {
          document
            .getElementById(banditPlayer + 1 + '')
            .classList.add('movement4', 'hoverable');

          if (banditPlayer % 10 !== 9) {
            if (
              map[banditRow][banditColumn + 2] !== cactus &&
              gameObjects[banditRow][banditColumn + 2] !== cowboy
            ) {
              document
                .getElementById(banditPlayer + 2 + '')
                .classList.add('movement5', 'hoverable');

              if (banditPlayer % 10 !== 8) {
                if (
                  map[banditRow][banditColumn + 3] !== cactus &&
                  gameObjects[banditRow][banditColumn + 3] !== cowboy
                ) {
                  document
                    .getElementById(banditPlayer + 3 + '')
                    .classList.add('movement6', 'hoverable');
                }
              }
            }
          }
        }
      }
    }
  }
}

/* Tablets */
randomCells(15, map, cactus, false);
randomCells(1, map, bullet, false);
randomCells(1, map, revolver, false);
randomCells(1, map, bomb, false);
randomCells(1, map, money, false);
randomCells(1, map, beer, false);
randomCells(1, map, whisky, false);
randomCells(1, gameObjects, cowboy, false);

/* Players start positions */
var cowboyRow;
var cowboyColumn;
for (var row = 0; row < rows; row++) {
  for (var column = 0; column < columns; column++) {
    if (gameObjects[row][column] === cowboy) {
      cowboyRow = row;
      cowboyColumn = column;
    }
  }
}

randomCells(1, gameObjects, bandit, true);
var banditRow;
var banditColumn;
for (var row = 0; row < rows; row++) {
  for (var column = 0; column < columns; column++) {
    if (gameObjects[row][column] === bandit) {
      banditRow = row;
      banditColumn = column;
    }
  }
}

render();

function randomCells(numberOfCells, mapType, cellType, banditcontrol) {
  var random = function(number) {
    return Math.floor(Math.random() * number);
  };

  while (numberOfCells--) {
    var randomRow = random(rows);
    var randomColumn = random(columns);

    if (!map[randomRow][randomColumn] && !banditcontrol) {
      mapType[randomRow][randomColumn] = cellType;
    } else if (
      !map[randomRow][randomColumn] &&
      gameObjects[randomRow][randomColumn] !== cowboy &&
      banditcontrol
    ) {
      if (
        randomRow > cowboyRow + 1 ||
        randomRow < cowboyRow - 1 ||
        randomColumn > cowboyColumn + 1 ||
        randomColumn < cowboyColumn - 1
      ) {
        gameObjects[randomRow][randomColumn] = bandit;
      } else {
        numberOfCells++;
      }
    } else {
      numberOfCells++;
    }
  }
}

function render() {
  if (stage.firstElementChild) {
    for (var i = 0; i < rows * columns; i++) {
      stage.firstElementChild.remove();
    }
  }

  for (var row = 0; row < rows; row++) {
    for (var column = 0; column < columns; column++) {
      var cell = document.createElement('img');
      cell.setAttribute('class', 'cell');
      cell.setAttribute('id', row * 10 + column + 1 + '');
      stage.appendChild(cell);

      switch (map[row][column]) {
        case background:
          cell.src = 'img/background.png';
          break;
        case cactus:
          cell.src = 'img/cactus.png';
          break;
        case bullet:
          cell.src = 'img/bullet.png';
          break;
        case revolver:
          cell.src = 'img/revolver.png';
          break;
        case bomb:
          cell.src = 'img/bomb.png';
          break;
        case money:
          cell.src = 'img/money.png';
          break;
        case beer:
          cell.src = 'img/beer.png';
          break;
        case whisky:
          cell.src = 'img/whisky.png';
          break;
      }
      switch (gameObjects[row][column]) {
        case cowboy:
          if (cowboyHealth <= 0) {
            cell.src = 'img/cowboyDead.png';
          } else {
            cell.src = 'img/cowboy.png';
          }
          cell.classList.add('cowboyPlayer');
          cowboyPlayer = Number(document.querySelector('.cell.cowboyPlayer').id);
          break;
        case bandit:
          if (banditHealth <= 0) {
            cell.src = 'img/banditDead.png';
          } else {
            cell.src = 'img/bandit.png';
          }
          cell.classList.add('banditPlayer');
          banditPlayer = Number(document.querySelector('.cell.banditPlayer').id);
          break;
      }
      cell.style.top = row * size() + 'px';
      cell.style.left = column * size() + 'px';
    }
  }

  availableTablets();

  if (cowboyHealth <= 0 || banditHealth <= 0) {
    $('#gameOver').modal('open');
  } else {
    $('#cbPower').text('' + cowboyPower[0] + '%');
    $('#bPower').text('' + banditPower[0] + '%');
    $('#cbHealth').text('' + cowboyHealth + '%');
    $('#bHealth').text('' + banditHealth + '%');
  }
}

/* Replace objects */
function renderObjects() {
  if (!turn.control) {
    switch (map[cowboyRow][cowboyColumn]) {
      case background:
        break;
      case bullet:
        cowboyPower.push(15);
        var newValue = cowboyPower.shift();
        if (newValue == 20) {
          map[cowboyRow][cowboyColumn] = revolver;
        } else if (newValue == 25) {
          map[cowboyRow][cowboyColumn] = bomb;
        } else if (newValue == 30) {
          map[cowboyRow][cowboyColumn] = money;
        } else {
          map[cowboyRow][cowboyColumn] = background;
        }
        break;
      case revolver:
        cowboyPower.push(20);
        var newValue = cowboyPower.shift();
        if (newValue == 15) {
          map[cowboyRow][cowboyColumn] = bullet;
        } else if (newValue == 25) {
          map[cowboyRow][cowboyColumn] = bomb;
        } else if (newValue == 30) {
          map[cowboyRow][cowboyColumn] = money;
        } else {
          map[cowboyRow][cowboyColumn] = background;
        }
        break;
      case bomb:
        cowboyPower.push(25);
        var newValue = cowboyPower.shift();
        if (newValue == 15) {
          map[cowboyRow][cowboyColumn] = bullet;
        } else if (newValue == 20) {
          map[cowboyRow][cowboyColumn] = revolver;
        } else if (newValue == 30) {
          map[cowboyRow][cowboyColumn] = money;
        } else {
          map[cowboyRow][cowboyColumn] = background;
        }
        break;
      case money:
        cowboyPower.push(30);
        var newValue = cowboyPower.shift();
        if (newValue == 15) {
          map[cowboyRow][cowboyColumn] = bullet;
        } else if (newValue == 20) {
          map[cowboyRow][cowboyColumn] = revolver;
        } else if (newValue == 25) {
          map[cowboyRow][cowboyColumn] = bomb;
        } else {
          map[cowboyRow][cowboyColumn] = background;
        }
        break;
      case beer:
        if (cowboyHealth < 50) {
          cowboyHealth += 30;
          map[cowboyRow][cowboyColumn] = background;
        }
        break;
      case whisky:
        if (cowboyHealth < 50) {
          cowboyHealth += 30;
          map[cowboyRow][cowboyColumn] = background;
        }
        break;
    }
  } else {
    switch (map[banditRow][banditColumn]) {
      case background:
        break;
      case bullet:
        banditPower.push(15);
        var newValue = banditPower.shift();
        if (newValue == 20) {
          map[banditRow][banditColumn] = revolver;
        } else if (newValue == 25) {
          map[banditRow][banditColumn] = bomb;
        } else if (newValue == 30) {
          map[banditRow][banditColumn] = money;
        } else {
          map[banditRow][banditColumn] = background;
        }
        break;
      case revolver:
        banditPower.push(20);
        var newValue = banditPower.shift();
        if (newValue == 15) {
          map[banditRow][banditColumn] = bullet;
        } else if (newValue == 25) {
          map[banditRow][banditColumn] = bomb;
        } else if (newValue == 30) {
          map[banditRow][banditColumn] = money;
        } else {
          map[banditRow][banditColumn] = background;
        }
        break;
      case bomb:
        banditPower.push(25);
        var newValue = banditPower.shift();
        if (newValue == 15) {
          map[banditRow][banditColumn] = bullet;
        } else if (newValue == 20) {
          map[banditRow][banditColumn] = revolver;
        } else if (newValue == 30) {
          map[banditRow][banditColumn] = money;
        } else {
          map[banditRow][banditColumn] = background;
        }
        break;
      case money:
        banditPower.push(30);
        var newValue = banditPower.shift();
        if (newValue == 15) {
          map[banditRow][banditColumn] = bullet;
        } else if (newValue == 20) {
          map[banditRow][banditColumn] = revolver;
        } else if (newValue == 25) {
          map[banditRow][banditColumn] = bomb;
        } else {
          map[banditRow][banditColumn] = background;
        }
        break;
      case beer:
        if (banditHealth < 50) {
          banditHealth += 30;
          map[banditRow][banditColumn] = background;
        }
        break;
      case whisky:
        if (banditHealth < 50) {
          banditHealth += 30;
          map[banditRow][banditColumn] = background;
        }
        break;
    }
  }
  if (
    (cowboyRow === banditRow - 1 && cowboyColumn === banditColumn) ||
    (cowboyRow === banditRow + 1 && cowboyColumn === banditColumn) ||
    (cowboyRow === banditRow && cowboyColumn === banditColumn - 1) ||
    (cowboyRow === banditRow && cowboyColumn === banditColumn + 1)
  ) {
    if (turn.fight === turn.control) {
      $('#fight').modal('open');
    } else {
      render();
    }
  } else {
    render();
  }
}

/* Players move */
function movePlayer(event) {
  if (turn.control) {
    var playerRow = cowboyRow;
    var playerColumn = cowboyColumn;
    var otherPlayer = bandit;
    var player = cowboy;
    var otherPlayerRow = banditRow;
    var otherPlayerColumn = banditColumn;
  } else {
    var playerRow = banditRow;
    var playerColumn = banditColumn;
    var otherPlayer = cowboy;
    var player = bandit;
    var otherPlayerRow = cowboyRow;
    var otherPlayerColumn = cowboyColumn;
  }

  /* Variables for movements */
  var up1 = 1;
  var up2 = 2;
  var up3 = 3;
  var down1 = 4;
  var down2 = 5;
  var down3 = 6;
  var left1 = 7;
  var left2 = 8;
  var left3 = 9;
  var right1 = 10;
  var right2 = 11;
  var right3 = 12;
  var validDirection;
  
  var direction = getComputedStyle(event.target);
  var directionRow = parseInt(direction.top) / size();
  var directionColumn = parseInt(direction.left) / size();
  var directionChosen = map[directionRow][directionColumn];

  /* Vertical movement */
  if (
    directionRow > playerRow - 4 &&
    directionColumn == playerColumn &&
    directionRow < playerRow + 4 &&
    directionChosen !== cactus &&
    gameObjects[directionRow][directionColumn] !==
      gameObjects[otherPlayerRow][otherPlayerColumn]
  ) {
    if (directionRow > playerRow - 4 && directionRow < playerRow) {
      if (directionRow == playerRow - 1) {
        validDirection = up1;
      }
      if (
        directionRow == playerRow - 2 &&
        map[directionRow + 1][directionColumn] !== cactus &&
        gameObjects[directionRow + 1][directionColumn] !== otherPlayer
      ) {
        validDirection = up2;
      }
      if (
        directionRow == playerRow - 3 &&
        map[directionRow + 2][directionColumn] !== cactus &&
        map[directionRow + 1][directionColumn] !== cactus &&
        gameObjects[directionRow + 2][directionColumn] !== otherPlayer &&
        gameObjects[directionRow + 1][directionColumn] !== otherPlayer
      ) {
        validDirection = up3;
      }
    }
    if (directionRow < playerRow + 4 && directionRow > playerRow) {
      if (directionRow == playerRow + 1) {
        validDirection = down1;
      }
      if (
        directionRow == playerRow + 2 &&
        map[directionRow - 1][directionColumn] !== cactus &&
        gameObjects[directionRow - 1][directionColumn] !== otherPlayer
      ) {
        validDirection = down2;
      }
      if (
        directionRow == playerRow + 3 &&
        map[directionRow - 2][directionColumn] !== cactus &&
        map[directionRow - 1][directionColumn] !== cactus &&
        gameObjects[directionRow - 2][directionColumn] !== otherPlayer &&
        gameObjects[directionRow - 1][directionColumn] !== otherPlayer
      ) {
        validDirection = down3;
      }
    }
  }

  /* Horizontal Movements */
  if (
    directionColumn > playerColumn - 4 &&
    directionRow == playerRow &&
    directionColumn < playerColumn + 4 &&
    directionChosen !== cactus &&
    gameObjects[directionRow][directionColumn] !==
      gameObjects[otherPlayerRow][otherPlayerColumn]
  ) {
    if (directionColumn > playerColumn - 4 && directionColumn < playerColumn) {
      if (directionColumn == playerColumn - 1) {
        validDirection = left1;
      }
      if (
        directionColumn == playerColumn - 2 &&
        map[directionRow][directionColumn + 1] !== cactus &&
        gameObjects[directionRow][directionColumn + 1] !== otherPlayer
      ) {
        validDirection = left2;
      }
      if (
        directionColumn == playerColumn - 3 &&
        map[directionRow][directionColumn + 2] !== cactus &&
        map[directionRow][directionColumn + 1] !== cactus &&
        gameObjects[directionRow][directionColumn + 2] !== otherPlayer &&
        gameObjects[directionRow][directionColumn + 1] !== otherPlayer
      ) {
        validDirection = left3;
      }
    }
    if (directionColumn < playerColumn + 4 && directionColumn > playerColumn) {
      if (directionColumn == playerColumn + 1) {
        validDirection = right1;
      }
      if (
        directionColumn == playerColumn + 2 &&
        map[directionRow][directionColumn - 1] !== cactus &&
        gameObjects[directionRow][directionColumn - 1] !== otherPlayer
      ) {
        validDirection = right2;
      }
      if (
        directionColumn == playerColumn + 3 &&
        map[directionRow][directionColumn - 2] !== cactus &&
        map[directionRow][directionColumn - 1] !== cactus &&
        gameObjects[directionRow][directionColumn - 2] !== otherPlayer &&
        gameObjects[directionRow][directionColumn - 1] !== otherPlayer
      ) {
        validDirection = right3;
      }
    }
  }
  if (turn.control) {
    switch (validDirection) {
      case up1:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyRow--;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case up2:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyRow -= 2;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case up3:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyRow -= 3;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case down1:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyRow++;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case down2:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyRow += 2;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case down3:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyRow += 3;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case left1:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyColumn--;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case left2:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyColumn -= 2;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case left3:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyColumn -= 3;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case right1:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyColumn++;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case right2:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyColumn += 2;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
      case right3:
        gameObjects[cowboyRow][cowboyColumn] = 0;
        cowboyColumn += 3;
        gameObjects[cowboyRow][cowboyColumn] = cowboy;
        turn.control = false;
        turn.fight = false;
        break;
    }
  } else {
    switch (validDirection) {
      case up1:
        gameObjects[banditRow][banditColumn] = 0;
        banditRow--;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case up2:
        gameObjects[banditRow][banditColumn] = 0;
        banditRow -= 2;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case up3:
        gameObjects[banditRow][banditColumn] = 0;
        banditRow -= 3;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case down1:
        gameObjects[banditRow][banditColumn] = 0;
        banditRow++;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case down2:
        gameObjects[banditRow][banditColumn] = 0;
        banditRow += 2;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case down3:
        gameObjects[banditRow][banditColumn] = 0;
        banditRow += 3;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case left1:
        gameObjects[banditRow][banditColumn] = 0;
        banditColumn--;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case left2:
        gameObjects[banditRow][banditColumn] = 0;
        banditColumn -= 2;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case left3:
        gameObjects[banditRow][banditColumn] = 0;
        banditColumn -= 3;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case right1:
        gameObjects[banditRow][banditColumn] = 0;
        banditColumn++;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case right2:
        gameObjects[banditRow][banditColumn] = 0;
        banditColumn += 2;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
      case right3:
        gameObjects[banditRow][banditColumn] = 0;
        banditColumn += 3;
        gameObjects[banditRow][banditColumn] = bandit;
        turn.control = true;
        turn.fight = true;
        break;
    }
  }
  renderObjects();
}

/* Game Over */
function gameOver() {
  stage.removeEventListener('click', movePlayer);
}

/* Fight */
function fight() {
  if (turn.control !== true) {
    if (turn.defend) {
      banditHealth -= cowboyPower[0] / 2;
    } else {
      banditHealth -= cowboyPower[0];
      cowboyHealth -= banditPower[0];
    }
    turn.fight = !turn.fight;
  } else {
    if (turn.defend) {
      cowboyHealth -= banditPower[0] / 2;
    } else {
      cowboyHealth -= banditPower[0];
      banditHealth -= cowboyPower[0];
    }
    turn.fight = !turn.fight;
  }

  if (cowboyHealth <= 0 || banditHealth <= 0) {
    gameOver();
    $('#gameOver').modal('open');

  }
  document.querySelector('#cbHealth').textContent = '' + cowboyHealth + '%';
  document.querySelector('#bHealth').textContent = '' + banditHealth + '%';
  render();
}

/* Modals Script with jQuery*/
$(function() {

  /* Rules Modal Script */
  $('#rules').modal({
    dismissible: true,
    opacity: 0.5,
    inDuration: 300,
    outDuration: 200, 
    startingTop: '0%',
    endingTop: '0%'
  });

  /* Fight Modal Script */
  $('#fight').modal({
    dismissible: false,
    opacity: 0.5,
    inDuration: 400,
    outDuration: 400,
    startingTop: '4%',
    endingTop: '10%'
  });

  /* Game Over Modal Script */
  $('#gameOver').modal({
    dismissible: true,
    opacity: 0.5,
    inDuration: 1200,
    outDuration: 400,
    startingTop: '4%',
    endingTop: '10%'
  });
});