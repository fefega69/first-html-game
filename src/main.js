import { Start, MAP_WIDTH, MAP_HEIGHT, TILE_SIZE } from './scenes/Start.js';
// 1. Import your new scene
import { BattleScene } from './scenes/BattleScene.js'; 

const config = {
    type: Phaser.AUTO,
    width: MAP_WIDTH * TILE_SIZE,
    height: MAP_HEIGHT * TILE_SIZE,
    pixelArt: true, 
    antialias: true, 
    scene: [
        Start,       
        BattleScene 
    ],
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.NO_CENTER,
        zoom: 2
    },
}

new Phaser.Game(config);