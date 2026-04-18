import { Start, MAP_WIDTH, MAP_HEIGHT, TILE_SIZE } from './scenes/Start.js';

const config = {
    type: Phaser.AUTO,
    width: MAP_WIDTH * TILE_SIZE,
    height: MAP_HEIGHT * TILE_SIZE,
    
    // Turn off pixel perfect scaling to smooth the edges
    pixelArt: false, 
    antialias: true, 
    scene: [
        Start
    ],
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.NO_CENTER,
        zoom: 2
    },
}

new Phaser.Game(config);
            