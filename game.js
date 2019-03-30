const gameState = {};
const crashSpeed = 10;

function preload(){
  this.load.image('crash', 'assets/crash.png');
}

function create(){
  gameState.crash = this.add.sprite(715, 380, 'crash');
  gameState.cursors = this.input.keyboard.createCursorKeys();
}

function update(){
  if(gameState.cursors.right.isDown){
    gameState.crash.x += crashSpeed;
  } else if(gameState.cursors.left.isDown){
    gameState.crash.x -= crashSpeed;
  } else if(gameState.cursors.up.isDown){
    gameState.crash.y -= crashSpeed;
  } else if(gameState.cursors.down.isDown){
    gameState.crash.y += crashSpeed;
  }
}

const config = {
  type: Phaser.AUTO,
  height: 760,
  width: 1430,
  backgroundColor: "#007AB2",
  scene: {
    create,
    preload,
    update
  }
}

const game = new Phaser.Game(config)

/* 
  } else if(gameState.cursors.down.isDown && gameState.cursors.right.isDown){
    gameState.crash.y += crashSpeed;
    gameState.crash.x += crashSpeed;
  } else if(gameState.cursors.up.isDown && gameState.cursors.right.isDown){
    gameState.crash.y -= crashSpeed;
    gameState.crash.x += crashSpeed;
  } else if(gameState.cursors.up.isDown && gameState.cursors.left.isDown){
    gameState.crash.y -= crashSpeed;
    gameState.crash.x -= crashSpeed;
  } else if(gameState.cursors.down.isDown && gameState.cursors.left.isDown){
    gameState.crash.y += crashSpeed;
    gameState.crash.x -= crashSpeed;
  }
*/