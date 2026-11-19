export const TILE_SIZE = 16;
export const MAP_WIDTH = 30;
export const MAP_HEIGHT = 20;

const ARROW_FRAMES = {
    //arrow heads
    ARROWUP: 3,
    ARROWRIGHT: 4,
    ARROWLEFT: 8,
    ARROWDOWN: 9,

    //corners
    DOWN_RIGHT: 0,
    DOWN_LEFT: 2,
    UP_RIGHT: 10,
    UP_LEFT: 11,

    //straight
    VERTICAL: 1,
    HORIZONTAL: 5,
    
    //ends
    DOWN: 6,
    UP: 7,
    RIGHT: 12,
    LEFT: 13
};

const UNIT_CATALOG = {
    'infantry': {
        unitName: 'INFANTRY',
        textureBase: 'infantry_idle',
        textureBattle: 'infantry_battle',
        moveRange: '3',
        movementType: 'foot',
        attackType: ['mgun'],
        armorType: 'infantry',
        minRange: 1, 
        maxRange: 1,
        cost: 1000,
        strongVs:['Infantry'],
        weakVs:['Every Vehicle']
    },

    'mech': {
        unitName: 'MECH',
        textureBase: 'mech_idle',
        textureBattle: 'mech_battle',
        moveRange: 2,
        movementType: 'boot',
        attackType: ['bazooka','mgun'],
        armorType: 'infantry',
        minRange: 1,
        maxRange: 1,
        cost: 3000,
        strongVs:['Infantry', 'Vehicles'],
        weakVs:['Heavy Tank', 'Air Units']
    },

    'recon': {
        unitName: 'RECON',
        textureBase: 'recon_idle',
        textureBattle: 'recon_battle',
        moveRange: 8,
        movementType: 'wheels',
        attackType: ['mgun'],
        armorType: 'light',
        minRange: 1,
        maxRange: 1,
        cost: 4000,
        strongVs:['Infantry'],
        weakVs:['Every Vehicle']
    },

    't-copter': {
        unitName: 'T-COPTER',
        textureBase: 'transport_idle',
        textureBattle: 't-copter_battle',
        moveRange: 6,
        movementType: 'air',
        armorType: 'copter',
        cost: 5000,
        strongVs:['No Weapons'],
        weakVs:['Anti-Air', 'Fighters']
    },

    'apc': {
        unitName: 'APC',
        textureBase: 'apc_idle',
        textureBattle: 'apc_battle',
        moveRange: 6,
        movementType: 'treads',
        armorType: 'light',
        cost: 5000,
        strongVs:['No weapons'],
        weakVs:['Vehicles']
    },

    'artillery': {
        unitName: 'ARTILLERY',
        textureBase: 'arty_idle',
        textureBattle: 'artillery_battle',
        moveRange: 5,
        movementType: 'treads',
        attackType: ['artillery'],
        armorType: 'light',
        minRange: 2,
        maxRange: 3,
        cost: 6000,
        strongVs:['Ground Units'],
        weakVs:['Air Units', 'Ground Units']
    },

    'tank': {
        unitName: 'TANK',
        textureBase: 'tank_idle',
        textureBattle: 'tank_battle',
        moveRange: 6,
        movementType: 'treads',
        attackType: ['cannon', 'mgun'],
        armorType: 'tank',
        minRange: 1,
        maxRange: 1,
        cost: 7000,
        strongVs:['Vehicles', 'Infantry'],
        weakVs:['Ships', 'Air Units']
    },

    'anti-air': {
        unitName: 'ANTI-AIR',
        textureBase: 'aa_idle',
        textureBattle: 'aa_battle',
        moveRange: 6,
        movementType: 'treads',
        attackType: ['vulcan'],
        armorType: 'tank',
        minRange: 1,
        maxRange: 1,
        cost: 8000,
        strongVs:['Infantry', 'Air Units'],
        weakVs:['Tanks']
    },

    'b-copter': {
        unitName: 'B-COPTER',
        textureBase: 'helicopter_idle',
        textureBattle: 'helicopter_battle',
        moveRange: 6,
        movementType: 'air',
        attackType: ['agm', 'coptergun'],
        armorType: 'copter',
        minRange: 1,
        maxRange: 1,
        cost: 9000,
        strongVs:['Vehicles', 'Ships', 'Infantry', 'Copters'],
        weakVs:['Anti-Air']
    },

    'missile': {
        unitName: 'MISSILE',
        textureBase: 'missile_idle',
        textureBattle: 'missile_battle',
        moveRange: 4,
        movementType: 'wheels',
        attackType: ['aam'],
        armorType: 'light',
        minRange: 3,
        maxRange: 5,
        cost: 12000,
        strongVs:['Air Units'],
        weakVs:['Ground Units']
    },

    'lander': {
        unitName: 'LANDER',
        textureBase: 'lander_idle',
        textureBattle: 'lander_battle',
        moveRange: 6,
        movementType: 'lander',
        armorType: 'ship',
        cost: 12000,
        strongVs:['No Weapon'],
        weakVs:['Ships', 'Air Units']
    },
    
    'rocket': {
        unitName: 'ROCKET',
        textureBase: 'rocket_idle',
        textureBattle: 'rocket_battle',
        moveRange: 5,
        movementType: 'wheels',
        attackType: ['rockets'],
        armorType: 'infantry',
        minRange: 3,
        maxRange: 5,
        cost: 15000,
        strongVs:['Ground Units', 'Ships'],
        weakVs:['Air Units', 'Ground Units']
    },

    'hvy_tank': {
        unitName: 'HEAVY TANK',
        textureBase: 'heavy_idle',
        textureBattle: 'heavy_battle',
        moveRange: 5,
        movementType: 'treads',
        attackType: ['hvycannon', 'mgun'],
        armorType: 'heavy',
        minRange: 1,
        maxRange: 1,
        cost: 16000,
        strongVs:['Vehicles', 'Infantry'],
        weakVs:['Ships', 'Air Units']
    },

    'cruiser': {
        unitName: 'CRUISER',
        textureBase: 'ca_idle',
        textureBattle: 'ca_battle',
        moveRange: 6,
        movementType: 'sea',
        attackType: ['antisub', 'ciws'],
        armorType: 'ship',
        minRange: 1,
        maxRange: 1,
        cost: 18000,
        strongVs:['Submarines', 'Air Units'],
        weakVs:['Battleships', 'Rockets']
    },

    'sub': {
        unitName: 'SUBMARINE',
        textureBase: 'sub_idle',
        textureBattle: 'sub_battle',
        moveRange: 5,
        movementType: 'sea',
        attackType: ['torps'],
        armorType: 'sub',
        minRange: 1,
        maxRange: 1,
        cost: 20000,
        strongVs:['Ships'],
        weakVs:['Cruiser']
    },

    'fighter': {
        unitName: 'FIGHTER',
        textureBase: 'fighter_idle',
        textureBattle: 'fighter_battle',
        moveRange: 9,
        movementType: 'air',
        attackType: ['aam'],
        armorType: 'plane',
        minRange: 1,
        maxRange: 1,
        cost: 20000,
        strongVs:['Air Units'],
        weakVs:['Anti-Air']
    },

    'bomber': {
        unitName: 'BOMBER',
        textureBase: 'bomber_idle',
        textureBattle: 'bomber_battle',
        moveRange: 7,
        movementType: 'air',
        attackType: ['bomb'],
        armorType: 'plane',
        minRange: 1,
        maxRange: 1,
        cost: 22000,
        strongVs:['Ground Units', 'Ships'],
        weakVs:['Anti-Air']
    },

    'battleship': {
        unitName: 'BATTLESHIP',
        textureBase: 'bb_idle',
        textureBattle: 'bb_battle',
        moveRange: 5,
        movementType: 'sea',
        attackType: ['bb'],
        armorType: 'ship',
        minRange: 3,
        maxRange: 5,
        cost: 28000,
        strongVs:['Ground Units', 'Ships'],
        weakVs:['Submarine', 'Rockets', 'Air Units']
    }
};

const TERRAIN_TYPE = {
    WATER: 0,
    REEF: 1,
    WATERFALLLEFT: 2,
    WATERFALLDOWN: 3,
    BEACHDOWN: 5,
    BEACHUPRIGHT: 6,
    BEACHUPLEFT: 7,
    BEACHDOWNLEFT: 8,
    BEACHDOWNRIGHT: 10,
    RIVERLEFTRIGHT: 45,
    RIVERUPDOWN: 46,
    RIVERRIGHTDOWN: 47,
    RIVERUPRIGHT: 48,
    RIVERLEFTDOWN: 49,
    RIVERLEFTUP: 50,
    CLIFFDOWN: 62,
    CLIFFBENDUPPERRIGHT: 63,
    CLIFFBENDUPPERLEFT: 64,
    CLIFFLEFT: 65,
    CLIFFRIGHT: 66,
    CLIFFBENDBOTTOMLEFT: 67,
    CLIFFBENDBOTTOMRIGHT: 68,
    CLIFFCORNERLEFT:69,
    CLIFFCORNERRIGHT: 70,
    CLIFFEDGELEFT: 76,
    CLIFFCANALHORI: 77,
    CLIFFEDGERIGHT: 78,
    WATERFALLUP: 87,
    WATERFALLRIGHT: 88,
    PIPEUP: 93,
    GRASS: 105,
    MOUNTAIN: 106,
    FOREST: 107,
    ROADDOWNRIGHT: 120,
    ROADLEFTDOWN: 121,
    ROADLEFTDOWNRIGHT: 122,
    ROADLEFTRIGHT: 123,
    ROADLEFTUP: 124,
    ROADLEFTDOWNUP: 125,
    ROADLEFTRIGHTUP: 126,
    ROADUPDOWN: 127,
    ROADDOWNRIGHTUP: 128,
    ROADRIGHTUP: 129,
    BRIDGEUPDOWN: 130,
    BRIDGELEFTRIGHT: 131,
    NEUTRALAIRPORT: 150,
    NEUTRALFACTORY: 151,
    NEUTRALBUILDINGTOP: 137,
    NEUTRALBUILDING: 152,
    NEUTRALPORT: 154
};

const LOGICAL_TERRAIN = {
    [TERRAIN_TYPE.PIPEUP]: 'pipe',

    [TERRAIN_TYPE.GRASS]: 'grass',
    [TERRAIN_TYPE.FOREST]: 'forest',
    [TERRAIN_TYPE.MOUNTAIN]: 'mountain',

    // Water
    [TERRAIN_TYPE.WATER]: 'water',
    [TERRAIN_TYPE.WATERFALLDOWN]: 'water',
    [TERRAIN_TYPE.WATERFALLLEFT]: 'water',
    [TERRAIN_TYPE.WATERFALLRIGHT]: 'water',
    [TERRAIN_TYPE.WATERFALLUP]: 'water',
    [TERRAIN_TYPE.CLIFFCORNERLEFT]: 'water',
    [TERRAIN_TYPE.CLIFFCORNERRIGHT]: 'water',
    [TERRAIN_TYPE.CLIFFDOWN]: 'water',
    [TERRAIN_TYPE.CLIFFLEFT]: 'water',
    [TERRAIN_TYPE.CLIFFRIGHT]: 'water',
    [TERRAIN_TYPE.CLIFFBENDBOTTOMLEFT]: 'water',
    [TERRAIN_TYPE.CLIFFBENDBOTTOMRIGHT]: 'water',
    [TERRAIN_TYPE.CLIFFBENDUPPERLEFT]: 'water',
    [TERRAIN_TYPE.CLIFFBENDUPPERRIGHT]: 'water',
    [TERRAIN_TYPE.CLIFFEDGELEFT]: 'water',
    [TERRAIN_TYPE.CLIFFEDGERIGHT]: 'water',
    [TERRAIN_TYPE.CLIFFCANALHORI]: 'water',


    [TERRAIN_TYPE.REEF]: 'reef',

    //rivers
    [TERRAIN_TYPE.RIVERLEFTDOWN]: 'river',
    [TERRAIN_TYPE.RIVERLEFTRIGHT]: 'river',
    [TERRAIN_TYPE.RIVERLEFTUP]: 'river',
    [TERRAIN_TYPE.RIVERRIGHTDOWN]: 'river',
    [TERRAIN_TYPE.RIVERUPDOWN]: 'river',
    [TERRAIN_TYPE.RIVERUPRIGHT]: 'river',
    
    // Beaches
    [TERRAIN_TYPE.BEACHDOWN]: 'beach',
    [TERRAIN_TYPE.BEACHUPRIGHT]: 'beach',
    [TERRAIN_TYPE.BEACHUPLEFT]: 'beach',
    [TERRAIN_TYPE.BEACHDOWNLEFT]: 'beach',
    [TERRAIN_TYPE.BEACHDOWNRIGHT]: 'beach',
    
    // Roads and Bridges
    [TERRAIN_TYPE.ROADDOWNRIGHT]: 'road', 
    [TERRAIN_TYPE.ROADLEFTDOWN]: 'road',
    [TERRAIN_TYPE.ROADLEFTDOWNRIGHT]: 'road', 
    [TERRAIN_TYPE.ROADLEFTRIGHT]: 'road', 
    [TERRAIN_TYPE.ROADLEFTUP]: 'road', 
    [TERRAIN_TYPE.ROADLEFTDOWNUP]: 'road', 
    [TERRAIN_TYPE.ROADLEFTRIGHTUP]: 'road', 
    [TERRAIN_TYPE.ROADUPDOWN]: 'road', 
    [TERRAIN_TYPE.ROADDOWNRIGHTUP]: 'road', 
    [TERRAIN_TYPE.ROADRIGHTUP]: 'road', 
    [TERRAIN_TYPE.BRIDGEUPDOWN]: 'road', 
    [TERRAIN_TYPE.BRIDGELEFTRIGHT]: 'road',
    [TERRAIN_TYPE.NEUTRALBUILDINGTOP]: 'road',
    [TERRAIN_TYPE.NEUTRALBUILDING]: 'road'
};

const MOVE_COSTS = {
    'foot':{
        'grass': 1,
        'forest': 1,
        'mountain': 2,
        'water': 99,
        'reef': 99,
        'beach': 99,
        'road': 1,
        'river': 2,
        'pipe': 99
    },
    'boot':{
        'grass': 1,
        'forest': 1,
        'mountain': 1,
        'water': 99,
        'reef': 99,
        'beach': 99,
        'road': 1,
        'river': 1,
        'pipe': 99
    },
    'wheels':{
        'grass': 2,
        'forest': 3,
        'mountain': 99,
        'water': 99,
        'reef': 99,
        'beach': 99,
        'road': 1,
        'river': 99,
        'pipe': 99
    },
    'treads':{
        'grass': 1,
        'forest': 2,
        'mountain': 99,
        'water': 99,
        'reef': 99,
        'beach': 99,
        'road': 1,
        'river': 99,
        'pipe': 99
    },
    'lander':{
        'grass': 99,
        'forest': 99,
        'mountain': 99,
        'water': 1,
        'reef': 2,
        'beach': 1,
        'road': 99,
        'river': 99,
        'pipe': 99
    },
    'sea':{
        'grass': 99,
        'forest': 99,
        'mountain': 99,
        'water': 1,
        'reef': 2,
        'beach': 99,
        'road': 99,
        'river': 99,
        'pipe': 99
    },
    'air':{
        'grass': 1,
        'forest': 1,
        'mountain': 1,
        'water': 1,
        'reef': 1,
        'beach': 1,
        'road': 1,
        'river': 1,
        'pipe': 1
    }
};

const DAMAGE_MATRIX = {
    // Machine Gun (Infantry/Recon)
    'mgun': { 
        'infantry': 0.55, 'light': 0.12, 'tank': 0.05, 'heavy': 0.01, 'copter': 0.07, 'ship': 0,
        'sub': 0 
    },
    'coptergun': { 
        'infantry': 0.55, 'light': 0.12, 'tank': 0.05, 'heavy': 0.01, 'copter': 0.55, 'ship': 0,
        'sub': 0 
    },
    // Bazooka (Mech units)
    'bazooka': { 
        'infantry': 0, 'light': 0.85, 'tank': 0.55, 'heavy': 0.15, 'ship': 0.10 
    },
    // Air-to-Ground Missiles (B-Copter)
    'agm': { 
        'infantry': 0,'light': 0.60, 'tank': 0.55, 'heavy': 0.25, 'ship': 0.25, 'sub': 0.25, 
        'copter': 0
    },
    // Air-to-Air Missiles (Fighters)
    'aam': { 
        'copter': 1.0, 'plane': 0.65 
    },
    // Bomber Bombs
    'bomb': { 
        'infantry': 1.10, 'light': 1.0, 'tank': 1.0, 'heavy': 0.75, 'ship': 0.50 
    },
    // Standard Tank Cannon
    'cannon': { 
        'light': 0.75, 'tank': 0.55, 'heavy': 0.15, 'ship': 0.10, 'infantry': 0, 'copter': 0,
        'sub': 0.10
    },
    // Heavy Tank Cannon
    'hvycannon': { 
        'light': 0.85, 'tank': 0.70, 'heavy': 0.45, 'ship': 0.10 
    },
    // Artillery Shells (Indirect)
    'artillery': { 
        'infantry': 0.90, 'light': 0.70, 'tank': 0.70, 'heavy': 0.45, 'ship': 0.40, 'sub': 0.40 
    },
    // Rockets (Long Range Indirect)
    'rockets': { 
        'infantry': 0.95, 'light': 0.80, 'tank': 0.80, 'heavy': 0.55, 'ship': 0.55, 'sub': 0.55 
    },
    // Vulcan Cannon (Anti-Air)
    'vulcan': { 
        'infantry': 1.0, 'light': 0.15, 'tank': 0.10, 'heavy': 0.05, 'copter': 1.0, 'plane': 0.65 
    },
    // Battleship Big Guns
    'bb': { 
        'infantry': 1.0, 'light': 1.0, 'tank': 0.90, 'heavy': 0.65, 'ship': 0.50, 'sub': 0.50 
    },
    // Cruiser Anti-Sub / Depth Charges
    'antisub': { 
        'sub': 0.90, 'copter': 0, 'plane': 0 
    },
    // Submarine Torpedoes
    'torps': { 
        'ship': 0.75, 'sub': 0.55 
    },
    'ciws': {
        'sub': 0, 'copter': 1, 'plane': 0.65       
    }
};

const TEAM_COLORS = {
    'red': 0xff0000,
    'blue': 0x0000ff
};

const TERRAIN_DEFENSE = {
    'grass': 1,
    'forest': 2,
    'mountain': 3,
    'water': 0,
    'reef': 1,
    'beach': 0,
    'road': 0,
    'river': 0,
    'pipe': 0
};

class Unit {
    constructor(scene, gridX, gridY, unitStats) {
        this.scene = scene;
        this.gridX = gridX;
        this.gridY = gridY;
        this.unitName = unitStats.unitName;
        this.team = unitStats.team;
        this.moveRange = unitStats.moveRange;
        this.movementType = unitStats.movementType;
        this.texture = unitStats.texture;
        this.battle = unitStats.battle;
        this.maxHp = unitStats.maxHp || 10; // Defaults to 10 if you forget to put it in config
        this.hp = this.maxHp;               // Now this correctly equals 10!
        this.attackType = unitStats.attackType; 
        // e.g., 'mgun', bazooka, agm, aam, bombs, cannon, heavycannon, artillery,rockets, vulcan, bb, antiship, 
        //torps
        this.armorType = unitStats.armorType;  
        // e.g., infantry, light, tank, heavy, ship, sub, copter, plane 
        this.hasMoved = false;
        this.isDead = false;

        Object.assign(this, unitStats); 
        
        this.minRange = this.minRange || 1;
        this.maxRange = this.maxRange || 1;

        this.sprite = scene.add.sprite(
            gridX * TILE_SIZE + TILE_SIZE / 2, 
            gridY * TILE_SIZE + TILE_SIZE / 2, 
            'units'
        ).setDepth(2);

        this.sprite.play(this.texture);

        this.hpText = scene.add.text(0, 0, '10', { 
            fontSize: '10px', 
            fontWeight: 'bold',
            fill: '#ffffff', 
            stroke: '#000000', 
            strokeThickness: 2 
        });
        this.hpText.setDepth(3); 

        this.syncVisuals();
    }

    getEffectivePower(basePower) {
        const healthPercent = this.hp / this.maxHp;
        return Math.max(1, Math.floor(basePower * healthPercent));
    }

    syncVisuals() {
        const screenX = this.gridX * TILE_SIZE + TILE_SIZE / 2;
        const screenY = this.gridY * TILE_SIZE + TILE_SIZE / 2;

        this.sprite.setPosition(screenX, screenY);

        this.hpText.setPosition(screenX + 2, screenY + 2);
        this.hpText.setText(Math.ceil(this.hp));
        
        this.hpText.setVisible(this.hp < 10);
    }

    updateVisuals() {
        this.sprite.setPosition(this.gridX * TILE_SIZE + 8, this.gridY * TILE_SIZE + 8);
        this.hpText.setPosition(this.gridX * TILE_SIZE, this.gridY * TILE_SIZE + 8);
        this.hpText.setText(Math.ceil(this.hp));
        if (this.hp <= 0) this.die();
    }

    die() {
        this.isDead = true;
        this.sprite.destroy();
        this.hpText.destroy();
    }

    moveTo(x, y) {
        this.gridX = x;
        this.gridY = y;
        this.hasMoved = true;
        this.sprite.setTint(0x777777);
        this.sprite.stop(); // Stop animation when done
        this.syncVisuals(); // Update the text position
    }

    takeDamage(amount) {
        this.hp -= amount;
        
        if (this.hp <= 0) {
            this.hp = 0;
            this.die();
            return;
        }
        
        this.syncVisuals();
    }

    finishAction() {
        this.hasMoved = true;
        this.sprite.setTint(0x777777); // The "Exhausted" gray
        this.syncVisuals();
    }
}

export class Start extends Phaser.Scene {

    constructor() {;
        super('Start');
    }

    getTerrainDefense(gridX, gridY, unit) {
        if (unit.movementType === 'air') {
            return 0;
        }

        const rawTileType = this.getTileTypeAt(gridX, gridY); 

        const logicalTerrain = LOGICAL_TERRAIN[rawTileType] || 'grass';

        return TERRAIN_DEFENSE[logicalTerrain] || 0;
    }

    getPath(startX, startY, endX, endY) {
        // Standard BFS to find the shortest path through allowed tiles
        const queue = [[{ x: startX, y: startY }]];
        const visited = new Set();
        visited.add(`${startX},${startY}`);

        while (queue.length > 0) {
            const path = queue.shift();
            const { x, y } = path[path.length - 1];

            // If we reached the cursor, return the array of coordinates
            if (x === endX && y === endY) return path;

            const neighbors = [
                { x: x + 1, y: y }, { x: x - 1, y: y },
                { x: x, y: y + 1 }, { x: x, y: y - 1 }
            ];

            for (const n of neighbors) {
                const key = `${n.x},${n.y}`;
                // Check if the tile is within the unit's highlighted movement range
                const isMoveable = this.currentRangeTiles && this.currentRangeTiles.some(t => t.x === n.x && t.y === n.y);
                
                if (isMoveable && !visited.has(key)) {
                    visited.add(key);
                    queue.push([...path, n]);
                }
            }
        }
        return []; // Return empty if no path found
    }

    drawSpriteArrow(path) {
        this.arrowGroup.clear(true, true);
        if (!path || path.length < 2) return;

        // We loop through every tile in the path
        for (let i = 0; i < path.length; i++) {
            // Skip the very first tile (where the unit stands)
            if (i === 0) continue; 

            const prev = path[i - 1];
            const curr = path[i];
            const next = path[i + 1]; // Might be undefined at the tip

            const frameIndex = this.getArrowSegment(prev, curr, next);

            const x = curr.x * TILE_SIZE + (TILE_SIZE / 2);
            const y = curr.y * TILE_SIZE + (TILE_SIZE / 2);

            const segment = this.add.sprite(x, y, 'arrow_tiles', frameIndex)
                .setOrigin(0.5)
                .setDepth(500);

            this.arrowGroup.add(segment);
        }
    }

    getArrowSegment(prev, curr, next) {
        if (!next) {
            if (curr.x > prev.x) return ARROW_FRAMES.ARROWRIGHT;
            if (curr.x < prev.x) return ARROW_FRAMES.ARROWLEFT;
            if (curr.y > prev.y) return ARROW_FRAMES.ARROWDOWN;
            return ARROW_FRAMES.ARROWUP;
        }

        const inX = curr.x - prev.x;
        const inY = curr.y - prev.y;
        const outX = next.x - curr.x;
        const outY = next.y - curr.y;

        if (inX === outX && inY === outY) {
            return (inX !== 0) ? ARROW_FRAMES.VERTICAL : ARROW_FRAMES.HORIZONTAL;
        }

        const combo = `${inX},${inY},${outX},${outY}`;

        switch (combo) {
            case '1,0,0,1':  case '0,-1,-1,0': return ARROW_FRAMES.DOWN_LEFT;
            case '1,0,0,-1': case '0,1,-1,0':  return ARROW_FRAMES.UP_LEFT;
            case '-1,0,0,1': case '0,-1,1,0':  return ARROW_FRAMES.DOWN_RIGHT;
            case '-1,0,0,-1': case '0,1,1,0':  return ARROW_FRAMES.UP_RIGHT;
            
            default:
                return (inX !== 0) ? ARROW_FRAMES.VERTICAL : ARROW_FRAMES.HORIZONTAL;
        }
    }

    checkUIOverlap() {
        const cam = this.cameras.main;
        
        const cursorX = (this.cursorX * TILE_SIZE) - cam.scrollX;
        const cursorY = (this.cursorY * TILE_SIZE) - cam.scrollY;

        const padding = 10;
        const bottomY = cam.height - 40 - padding;
        const statsBottomY = cam.height - 140 - padding;
        const topY = padding;

        const cursorInLeftUI = cursorX < 200 && cursorY > (cam.height - 100);
        const leftTargetY = cursorInLeftUI ? topY : bottomY;
        
        this.moveUI(this.terrainBox, this.terrainText, padding, leftTargetY);
        
        const unitX = padding + 60 + 5; 
        this.moveUI(this.unitBox, this.unitText, unitX, leftTargetY);

        const statsWidth = 155;
        const cursorInRightUI = cursorX > (cam.width - statsWidth - 50) && cursorY > (cam.height - 160);
        const rightTargetY = cursorInRightUI ? topY : statsBottomY;
        const rightX = cam.width - statsWidth - padding;

        this.moveUI(this.statsBox, this.statsText, rightX, rightTargetY);
    }

    moveUI(box, text, targetX, targetY) {
        if (!box) return;

        if (box.x !== targetX || box.y !== targetY) {
            this.tweens.killTweensOf([box, text]);

            box.setPosition(targetX, targetY);
            
            text.setPosition(targetX + 8, targetY + 5); 
        }
    }

    showUnitStats(unit) {
        if (!this.statsBox || !this.statsText) return;

        if (!unit) {
            this.statsBox.setVisible(false);
            this.statsText.setVisible(false);
            return;
        }

        const strongList = unit.strongVs ? unit.strongVs.join(', ') : 'NONE';
        const weakList = unit.weakVs ? unit.weakVs.join(', ') : 'NONE';

        const nameLabel = (unit.unitName || "UNIT").toUpperCase();
        const armorLabel = (unit.armorType || "NONE").toUpperCase();
        const weapons = Array.isArray(unit.attackType) ? unit.attackType.join('/') : (unit.attackType || "NONE");
        const hpLabel = Math.ceil(unit.hp || 0);

        const info = [
            `NAME:  ${nameLabel}`,
            `HP:    ${hpLabel}/10`,
            `---`,
            `STRONG VS: 
            ${strongList.toUpperCase()}`,
            `WEAK VS:   
            ${weakList.toUpperCase()}`
        ].join('\n');

        this.statsText.setText(info);

        this.statsBox.setVisible(true).setDepth(3000);
        this.statsText.setVisible(true).setDepth(3001);
    }

    getDistance(unitA, unitB) {
        return Math.abs(unitA.gridX - unitB.gridX) + Math.abs(unitA.gridY - unitB.gridY);
    }

    getBestWeapon(attacker, target, distance) {
        const weaponSource = attacker.weapons || attacker.attackType;
        const weaponList = Array.isArray(weaponSource) ? weaponSource : [weaponSource];

        let bestWeapon = null;
        let maxDamage = -1;

        // Use the unit's range (or define range per weapon in a separate lookup)
        const minR = attacker.minRange || 1;
        const maxR = attacker.maxRange || 1;

        // RANGE CHECK: If the target is too close or too far, return null
        if (distance < minR || distance > maxR) {
            return null; 
        }

        weaponList.forEach(weapon => {
            const multiplier = (DAMAGE_MATRIX[weapon] && DAMAGE_MATRIX[weapon][target.armorType]) ?? 0;
            if (multiplier > maxDamage) {
                maxDamage = multiplier;
                bestWeapon = weapon;
            }
        });

        return bestWeapon;
    }

    updateStatusBar() {
        if (!this.terrainText || !this.unitText) return;

        // 1. Update Terrain
        const rawID = this.mapData[this.cursorY][this.cursorX];
        let terrainDisplay = LOGICAL_TERRAIN[rawID] || rawID;
        
        if (terrainDisplay) {
            terrainDisplay = terrainDisplay.charAt(0).toUpperCase() + terrainDisplay.slice(1);
        }
        this.terrainText.setText(`\n${terrainDisplay}`);

        // 2. Update Unit
        const unit = this.getUnitAt(this.cursorX, this.cursorY);
        if (unit) {
            this.unitBox.setVisible(true);
            this.unitText.setVisible(true);
            
            const team = unit.team.toUpperCase();
            const type = unit.unitName.toUpperCase();
            this.unitText.setText(`${team} ${type}\nHP: ${unit.hp}/10`); 
            // Note: Using \n for a two-line layout looks great in a small box!
        } else {
            this.unitBox.setVisible(false);
            this.unitText.setVisible(false);
        }
    }

    createUnitStatsBar() {
        const cam = this.cameras.main;
        const boxWidth = 155;
        const boxHeight = 140;
        const padding = 10;

        const x = cam.width - boxWidth - padding;
        const y = cam.height - boxHeight - padding;

        this.statsText = this.add.text(x + 5, y + 5, '', {
            fontSize: '10px',
            fill: '#ffffff',
            fontFamily: 'monospace',
            lineSpacing: 4,

            wordWrap: {
                width: boxWidth - 5, // Wraps text 10px before the edge of the box
                useAdvancedWrap: true // Handles punctuation and spaces better
            }
        })
        .setScrollFactor(0)
        .setDepth(101)
        .setVisible(false);

        this.statsBox = this.add.rectangle(x, y, boxWidth, boxHeight, 0x000000, 0.8)
            .setOrigin(0, 0)
            .setStrokeStyle(2, 0xffffff)
            .setScrollFactor(0) 
            .setDepth(100)
            .setVisible(false);
    }

    createStatusBar() {
        const gameHeight = this.sys.game.config.height;
        const boxHeight = 40;
        const padding = 10;
        const gap = 5;

        const terrainBoxWidth = 60;
        this.terrainBox = this.add.rectangle(padding, gameHeight - boxHeight - padding, terrainBoxWidth, boxHeight, 0x000000, 0.8).setOrigin(0, 0);
        this.terrainBox.setStrokeStyle(2, 0xffffff).setScrollFactor(0).setDepth(100);

        this.terrainText = this.add.text(padding + 10, gameHeight - boxHeight - 1, 'Terrain: --', { 
            fontSize: '10px', 
            fill: '#ffffff', 
            fontFamily: 'monospace' 
        })
        .setScrollFactor(0)
        .setDepth(101);

        const unitBoxWidth = 100;

        const unitBoxX = padding + terrainBoxWidth + gap;
        
        this.unitBox = this.add.rectangle(unitBoxX, gameHeight - boxHeight - padding, unitBoxWidth, boxHeight, 0x000000, 0.8).setOrigin(0, 0);
        this.unitBox.setStrokeStyle(2, 0xffffff).setScrollFactor(0).setDepth(100);

        this.unitText = this.add.text(unitBoxX + 10, gameHeight - boxHeight - 2, '', { 
            fontSize: '10px', 
            fill: '#ffffff', 
            fontFamily: 'monospace' 
        })
        .setScrollFactor(0)
        .setDepth(101);

        this.unitBox.setVisible(false);
    }

    updateCursorPosition() {
        this.cursor.x = (this.cursorX * TILE_SIZE) + (TILE_SIZE / 2);
        this.cursor.y = (this.cursorY * TILE_SIZE) + (TILE_SIZE / 2);

        if (this.gameState === 'MOVING' && this.selectedUnit) {
            const path = this.getPath(this.selectedUnit.gridX, this.selectedUnit.gridY, this.cursorX, this.cursorY);
            
            if (path.length > 1 && path.length <= this.selectedUnit.moveRange + 1) {
                this.drawSpriteArrow(path);
            } else {
                this.arrowGroup.clear(true, true);
            }
        }
    }

    snapToUnit() {
        const activeUnit = this.units.find(u => u.team === this.currentTurn && !u.hasMoved);

        if (activeUnit) {
            this.cursorX = activeUnit.gridX;
            this.cursorY = activeUnit.gridY;

            this.updateCursorPosition(); 
            
            console.log(`Snapped cursor to ${this.currentTurn} unit at ${this.cursorX}, ${this.cursorY}`);
        }

        this.updateStatusBar();
    }

    updateHoverRange() {
        this.rangeGraphics.clear();

        // Only show passive range when we are in IDLE state (just browsing the map)
        if (this.gameState !== 'IDLE') return;

        const hoveredUnit = this.getUnitAt(this.cursorX, this.cursorY);

        if (hoveredUnit) {
            // If you only want this for indirect units (Artillery/Rockets):
            if (hoveredUnit.minRange > 1) {
                const rangeTiles = this.getTilesInRange(
                    hoveredUnit.gridX, 
                    hoveredUnit.gridY, 
                    hoveredUnit.minRange, 
                    hoveredUnit.maxRange
                );

                this.rangeGraphics.fillStyle(0xff0000); // Red for attack range

                rangeTiles.forEach(tile => {
                    this.rangeGraphics.fillRect(
                        tile.x * TILE_SIZE, 
                        tile.y * TILE_SIZE, 
                        TILE_SIZE, 
                        TILE_SIZE
                    );
                });
            }
        }
    }

    getTilesInRange(centerX, centerY, minRange, maxRange) {
        const tiles = [];
        // We search a bounding box around the unit to save performance
        for (let y = centerY - maxRange; y <= centerY + maxRange; y++) {
            for (let x = centerX - maxRange; x <= centerX + maxRange; x++) {
                const distance = Math.abs(x - centerX) + Math.abs(y - centerY);
                if (distance >= minRange && distance <= maxRange) {
                    // Ensure we stay within map boundaries
                    if (x >= 0 && x < MAP_WIDTH && y >= 0 && y < MAP_HEIGHT) {
                        tiles.push({ x, y });
                    }
                }
            }
        }
        return tiles;
    }
    // 1. Bridge the gap for your game logic
    showAttackIcons(targets) {
        // Store the targets so your highlightTargets function can use them
        this.currentTargets = targets; 
        this.highlightTargets(); 
    }

    // 2. Clean up the target graphics
    hideAttackIcons() {
        if (this.targetGraphics) {
            this.targetGraphics.clear();
        }
    }
    
    getEnemiesInRange(attacker) {
        const minRange = attacker.minRange || 1;
        const maxRange = attacker.maxRange || 1;

        return this.units.filter(target => {
            // Ignore dead units and units on your own team
            if (target.isDead || target.team === attacker.team) {
                return false;
            }

            const distance = Math.abs(attacker.gridX - target.gridX) + Math.abs(attacker.gridY - target.gridY);

            return distance >= minRange && distance <= maxRange;
        });
    }

    canUnitAttack(attacker, target) {
        const attackerType = attacker.attackType;
        const targetArmor = target.armorType;

        // Check if the combination exists and is not 0
        const multiplier = (DAMAGE_MATRIX[attackerType] && DAMAGE_MATRIX[attackerType][targetArmor]);
        
        return (multiplier !== undefined && multiplier > 0);
    }

    checkVictory() {
        // Create lists of living units for each team
        const redCount = this.units.filter(u => u.team === 'red').length;
        const blueCount = this.units.filter(u => u.team === 'blue').length;

        if (redCount === 0 && blueCount === 0) {
            this.endGame("It's a Draw!");
        } else if (redCount === 0) {
            this.endGame("Blue Team Wins!");
        } else if (blueCount === 0) {
            this.endGame("Red Team Wins!");
        }
    }

    endGame(message) {
        this.gameState = 'GAMEOVER';
        
        // Add a simple big text overlay
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, message, {
            fontSize: '32px',
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: { x: 20, y: 10 }
        }).setOrigin(0.5).setDepth(2000);

        // Optional: Restart after 3 seconds
        this.time.delayedCall(3000, () => this.scene.restart());
    }

    spawnUnit(unitType, x, y, team, isFactoryBuilt = false) {
        const stats = UNIT_CATALOG[unitType];
        if (!stats) return null;

        const newUnit = new Unit(this, x, y, {
            ...stats,
            texture: `${team}_${stats.textureBase || unitType + '_idle'}`,
            team: team
        });

        // CRITICAL: Ensure map-spawned units are ready to go
        newUnit.hasMoved = false;
        if (newUnit.sprite) newUnit.sprite.clearTint(); 

        this.units.push(newUnit);
        return newUnit;
    }

    updateDamagePreview() {
        // 1. Safety Checks
        if (this.gameState !== 'TARGETING' || !this.selectedUnit) {
            if (this.damagePreviewText) this.damagePreviewText.setVisible(false);
            return;
        }

        const target = this.getUnitAt(this.cursorX, this.cursorY);

        // 2. Only show if cursor is on a valid target
        if (target && this.currentTargets && this.currentTargets.includes(target)) {
            const weaponUsed = this.getBestWeapon(this.selectedUnit, target);
            const damage = this.calculateDamage(this.selectedUnit, target);
            const remainingHP = Math.max(0, target.hp - damage);
            
            // UI Polish: Show the weapon name and the HP change
            // Example: "Coptergun: 10 -> 4"
            const weaponName = weaponUsed.toUpperCase();
            this.damagePreviewText.setText(`${weaponName}\nHP: ${target.hp} -> ${remainingHP}`);
            
            // Position text above the target
            this.damagePreviewText.setPosition(
                this.cursorX * TILE_SIZE + TILE_SIZE / 2, 
                this.cursorY * TILE_SIZE - 20 // Moved up slightly more to fit two lines
            );
            this.damagePreviewText.setVisible(true);
        } else {
            this.damagePreviewText.setVisible(false);
        }
    }

    calculateDamage(source, target, distance, basePower) {
        // 1. DEFAULT VALUES: If distance or basePower are missing, fill them in
        const dist = (distance !== undefined) ? distance : this.getDistance(source, target);
        const atkPower = (basePower !== undefined) ? basePower : 10;

        // 2. Get the best weapon for this specific distance
        const weapon = this.getBestWeapon(source, target, dist);
        if (!weapon) return null; 

        // 3. Get the base multiplier (Safety check: || 0)
        const targetArmor = target.armorType;
        const multiplier = (DAMAGE_MATRIX[weapon] && DAMAGE_MATRIX[weapon][targetArmor]) || 0;

        // 4. Calculate initial power
        // If effectivePower returns NaN or doesn't exist, we fallback to a safe math operation
        let damage = (source.getEffectivePower ? source.getEffectivePower(atkPower) : atkPower) * multiplier;

        // 5. --- TERRAIN DEFENSE LOGIC ---
        let defenseStars = 0;
        
        if (target.movementType !== 'air') {
            const row = this.mapData[target.gridY];
            const rawID = row ? row[target.gridX] : null;
            
            // Ensure we actually found a tile ID
            if (rawID !== null) {
                const logicalType = LOGICAL_TERRAIN[rawID];
                defenseStars = (logicalType && TERRAIN_DEFENSE[logicalType]) || 0;
            }
        }

        // Apply the 10% reduction per star
        const defenseMultiplier = Math.max(0.1, 1.0 - (defenseStars * 0.1));
        damage = damage * defenseMultiplier;

        // 6. FINAL GUARD: If something still went wrong, return 0 instead of NaN
        return isNaN(damage) ? 0 : Math.max(0, Math.round(damage));
    }

    highlightTargets() {
        if (!this.targetGraphics) this.targetGraphics = this.add.graphics().setDepth(1);
        this.targetGraphics.clear();
        this.targetGraphics.lineStyle(2, 0xff0000); // Red outline

        this.currentTargets.forEach(enemy => {
            this.targetGraphics.strokeRect(enemy.gridX * TILE_SIZE, enemy.gridY * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        });
    }

    executeAttack(attacker, target) {
        console.log("--- ATTACK STARTED ---");

        // 1. Calculate distance
        const dist = this.getDistance(attacker, target);

        // 2. Predict Damage (Note: Check if your calculateDamage uses unitName or textureBase)
        let damageToTarget = this.calculateDamage(attacker, target, dist, 10);

        // 3. Predict Counter
        let damageToAttacker = 0;
        if (damageToTarget !== null && (target.hp - damageToTarget > 0)) {
            damageToAttacker = this.calculateDamage(target, attacker, dist, 3) || 0; 
        }

        // 4. VALIDATION
        if (damageToTarget === null) {
            console.warn("ATTACK CANCELLED: Distance or weapon invalid.");
            return; 
        }

        // SAFE LOG: No more .type!
        console.log(`BATTLE: ${attacker.unitName} vs ${target.unitName} at dist ${dist}`);

        const targetTileID = this.mapData[target.gridY][target.gridX];
        const terrainKey = LOGICAL_TERRAIN[targetTileID] || 'grass';

        // 5. LAUNCH
        this.scene.pause(); 
        this.scene.launch('BattleScene', {
            attacker: attacker,
            defender: target,
            damageToDefender: damageToTarget,
            damageToAttacker: damageToAttacker,
            terrainInfo: { name: terrainKey }
        });

        console.log("--- SCENE LAUNCHED ---");
    }

    cleanupDeadUnit(unit) {
        if (unit.hp <= 0) {
            unit.isDead = true;
            if (unit.sprite) unit.sprite.destroy(); 
            
            // Remove from the logic array
            this.units = this.units.filter(u => u !== unit);
            
            console.log(`${unit.team} ${unit.attackType} was destroyed!`);
            this.hpText.clear();
        }
    }

    finishTurn() {
        // 1. Hide the UI
        if (this.actionMenu) this.actionMenu.setVisible(false);
        
        // 2. Clear all temporary graphics
        if (this.highlightGraphics) this.highlightGraphics.clear();
        if (this.targetGraphics) this.targetGraphics.clear();
        
        
        // 3. Reset logic variables
        this.selectedUnit = null;
        this.currentRangeTiles = null;
        this.currentTargets = null;
        
        // 4. THE MOST IMPORTANT PART: Return to IDLE
        this.gameState = 'IDLE';
        
        console.log("Turn finished. Game state is now IDLE.");
        this.showUnitStats(null);
    }

    update() {
        this.highlightGraphics.clear();

        // If nothing is selected, clear the screen and stop immediately
        if (!this.currentRangeTiles) {
            this.highlightGraphics.clear();
            return; 
        }
        
        if (this.currentRangeTiles) {
            this.highlightGraphics.setBlendMode(Phaser.BlendModes.ADD); 
            this.highlightGraphics.fillStyle(0x0055ff, this.highlightAlpha);
            this.highlightGraphics.fillStyle(0x33ccff, this.highlightAlpha); 
            this.highlightGraphics.lineStyle(2, 0xffffff, this.highlightAlpha + 0.2);

            this.currentRangeTiles.forEach(tile => {
                const px = tile.x * TILE_SIZE;
                const py = tile.y * TILE_SIZE;
                
                // Draw the fill
                this.highlightGraphics.fillRect(px, py, TILE_SIZE, TILE_SIZE);
                
                // Draw a slight border for each tile to make it look like a grid
                this.highlightGraphics.strokeRect(px + 1, py + 1, TILE_SIZE - 2, TILE_SIZE - 2);
            });
        }
    }

    preload() {
        this.load.spritesheet('battle', 'assets/battle-sprites.png', {
            frameWidth: 128, 
            frameHeight: 128
        });
        this.load.image('terrain_tiles', 'assets/spritesheet.png');
        this.load.image('structure_tiles', 'assets/spritesheet1.png');
        this.load.spritesheet('arrow_tiles', 'assets/arrows.png', {
            frameWidth: 16,
            frameHeight: 16
        });

        // Unit spritesheet
        this.load.spritesheet('units', 'assets/unit-sprites.png', { 
            frameWidth: 16, 
            frameHeight: 16 
        });

        //this.load.tilemapTiledJSON('map', 'assets/pdsmallmap1.json');
        this.load.tilemapTiledJSON('map', 'assets/pdbigmap.json');

    }

    create() {
        //this.gameState = 'IDLE';
        this.units = [];
        this.cursorX = 0;
        this.cursorY = 0;
        this.selectedUnit = null;
        this.highlightGraphics = this.add.graphics();
        //this.cameras.main.setZoom(2);
        this.cameras.main.centerOn(
            (MAP_WIDTH * TILE_SIZE) / 2, 
            (MAP_HEIGHT * TILE_SIZE) / 2
        );

        // Inside Start.js create()
        this.events.on('battleFinished', (results) => {
            const { attacker, defender, attackerDamageTaken, defenderDamageTaken } = results;

            // 1. Apply the numerical damage
            if (attacker) attacker.hp -= attackerDamageTaken;
            if (defender) defender.hp -= defenderDamageTaken;

            // 2. TRIGGER THE VISUALS (The Fix)
            // This calls the function you just showed me
            if (attacker && attacker.hp > 0) {
                attacker.syncVisuals(); 
            }
            if (defender && defender.hp > 0) {
                defender.syncVisuals();
            }

            // 3. Cleanup logic
            this.cleanupDeadUnit(attacker);
            this.cleanupDeadUnit(defender);
            this.units = this.units.filter(u => u.hp > 0);

            if (this.targetGraphics) this.targetGraphics.clear();

            // 4. Reset state
            if (attacker && attacker.hp > 0) {
                attacker.finishAction(); 
            }
            this.gameState = 'IDLE';
            this.selectedUnit = null;
            this.currentTargets = [];
        });

        this.arrowGroup = this.add.group();

        this.damagePreviewText = this.add.text(0, 0, '', {
            fontSize: '12px',
            fill: '#ff0000',
            backgroundColor: '#000000',
            padding: { x: 4, y: 2 },
            stroke: '#ffffff',
            strokeThickness: 2
        })
        .setOrigin(0.5, 1)
        .setDepth(1000)
        .setVisible(false);

        this.anims.create({
            key: 'red_infantry_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 0, end: 2 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_infantry_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 0, end: 0 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_infantry_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 3, end: 5 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_infantry_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 1, end: 1 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_mech_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 6, end: 8 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_mech_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 2, end: 2 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_mech_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 9, end: 11 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_mech_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 3, end: 3 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_recon_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 12, end: 14 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });this.anims.create({
            key: 'red_recon_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 12, end: 12 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_recon_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 15, end: 17 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_recon_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 13, end: 13 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_tank_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 18, end: 20 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_tank_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 4, end: 4 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_tank_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 21, end: 23 }),
            frameRate: 5,
            repeat: -1,
            yoyo: true
        });
        this.anims.create({
            key: 'blue_tank_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 5, end: 5 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_heavy_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 24, end: 26 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_heavy_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 4, end: 4 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_heavy_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 27, end: 29 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_heavy_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 5, end: 5 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_apc_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 30, end: 32 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_apc_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 8, end: 8 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_apc_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 33, end: 35 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_apc_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 9, end: 9 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_aa_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 36, end: 38 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });this.anims.create({
            key: 'red_aa_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 10, end: 10 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_aa_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 39, end: 41 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_aa_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 11, end: 11 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_arty_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 42, end: 44 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_arty_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 14, end: 14 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_arty_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 45, end: 47 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_arty_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 15, end: 15 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_rocket_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 48, end: 50 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_rocket_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 14, end: 14 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_rocket_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 51, end: 53 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_rocket_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 15, end: 15 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_missile_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 54, end: 56 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_missile_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 16, end: 16 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_missile_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 57, end: 59 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_missile_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 17, end: 17 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_fighter_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 60, end: 62 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_fighter_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 18, end: 18 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_fighter_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 63, end: 65 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });this.anims.create({
            key: 'blue_fighter_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 19, end: 19 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_bomber_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 66, end: 68 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_bomber_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 20, end: 20 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_bomber_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 69, end: 71 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_bomber_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 21, end: 21 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_helicopter_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 72, end: 74 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: false    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_helicopter_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 22, end: 22 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_helicopter_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 75, end: 77 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: false    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_helicopter_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 23, end: 23 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_transport_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 78, end: 80 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: false    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_transport_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 24, end: 24 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_transport_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 81, end: 83 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: false    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_transport_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 25, end: 25 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_bb_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 84, end: 86 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_bb_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 28, end: 28 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_bb_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 87, end: 89 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_bb_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 29, end: 29 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_ca_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 90, end: 92 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_ca_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 26, end: 26 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_ca_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 93, end: 95 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_ca_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 27, end: 27 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_lander_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 96, end: 98 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_lander_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 30, end: 30 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_lander_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 99, end: 101 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_lander_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 31, end: 31 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'red_sub_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 102, end: 104 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_sub_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 32, end: 32 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });
        this.anims.create({
            key: 'blue_sub_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 105, end: 107 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_sub_battle',
            frames: this.anims.generateFrameNumbers('battle', { start: 33, end: 33 }),
            frameRate: 5, // 4 frames per second
            repeat: 0,   // -1 means loop forever
        });

        this.highlightAlpha = 0.3; // Default starting alpha
        this.tweens.add({
            targets: this,
            highlightAlpha: 0.1, // Pulsing down to 0.1
            duration: 800,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });
        this.createUnitStatsBar();
        
        const map = this.make.tilemap({ key: 'map' });

        const tileset = map.addTilesetImage('spritesheet', 'terrain_tiles');

        this.terrainLayer = map.createLayer('Terrain', tileset, 0, 0);

        this.mapData = [];
        // Find the starting ID of your tileset (usually 1)
        const firstGid = tileset.firstgid; 

        for (let y = 0; y < map.height; y++) {
            let row = [];
            for (let x = 0; x < map.width; x++) {
                const terrainTile = map.getTileAt(x, y, true, 'Terrain');

                // 1. Start with a default
                let finalType = 'grass';

                // 2. Check the Terrain Layer
                if (terrainTile && terrainTile.index !== -1) {
                    // Convert Phaser Index back to Tiled ID
                    const tiledId = terrainTile.index - firstGid; 
                    finalType = LOGICAL_TERRAIN[tiledId] || 'grass';
                }

                // 4. Push ONLY ONCE per tile
                row.push(finalType);
            }
            this.mapData.push(row);
        }
        // Create the cursor
        
        this.cursor = this.add.rectangle(
            TILE_SIZE / 2, TILE_SIZE / 2, 
            TILE_SIZE, TILE_SIZE
        );
        this.cursor.setOrigin(0.5);
        this.cursor.setStrokeStyle(4, 0xff0000); 
        this.cursor.setDepth(3);

        this.rangeGraphics = this.add.graphics();
        this.rangeGraphics.setAlpha(0.4);

        console.log("Map Data Sample (First Row):", this.mapData[0]);
        console.table(this.mapData);
        this.terrainLayer.setDepth(0);

        const unitObjects = map.getObjectLayer('Units').objects;

        unitObjects.forEach(obj => {
            const gx = Math.floor(obj.x / 16);
            const gy = Math.floor(obj.y / 16);
            
            const type = obj.name ? obj.name.toLowerCase() : undefined;   

            const team = (obj.class || obj.type || 'red').toLowerCase();


            // 3. Spawn the unit (No 'true' flag, so they won't be greyed out!)
            if (type && team) {
                this.spawnUnit(type, gx, gy, team);
            } else {
                console.error("Failed to spawn unit at", gx, gy, "- Missing Name or Class in Tiled", obj);
            }
        });

        this.highlightGraphics = this.add.graphics();
        this.highlightGraphics.setDepth(1);


        this.actionMenu = this.add.container(0, 0).setVisible(false);
        this.actionMenu.setDepth(10); // Keep it above the units and highlights!

        
        this.cursors = this.input.keyboard.createCursorKeys();
        // Inside create()
        this.zKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.xKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

        // Update your listener to handle these specific keys
        this.input.keyboard.on('keydown', (event) => {
            if (event.code === 'KeyZ') this.handleSelect();
            if (event.code === 'KeyX') this.handleCancel();
        });

        this.input.keyboard.on('keydown', this.handleInput, this);

        
        // Inside create() where you make the turnBanner container:
        this.turnBanner = this.add.container(0, 0).setDepth(5000); // Higher than everything
        this.turnBanner.setScrollFactor(0); // <--- THIS PIN IT TO THE SCREEN

        // Make sure the items inside the container are centered based on the screen width
        const screenCenterX = this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.height / 2;

        const bannerBg = this.add.rectangle(screenCenterX, screenCenterY, 800, 150, 0x000000, 0.8).setOrigin(0.5);
        this.turnText = this.add.text(screenCenterX, screenCenterY, 'RED TURN', { 
            fontSize: '20px', 
            fill: '#ff0000',
            fontStyle: 'bold' 
        }).setOrigin(0.5);

        this.turnBanner.add([bannerBg, this.turnText]);
        this.turnBanner.setVisible(false);
        this.currentTurn = 'red';
        this.gameState = 'IDLE';


        this.createStatusBar();

        this.snapToUnit();
    }

    showActionMenu(x, y, options) {
        this.actionMenu.removeAll(true);
        this.menuOptions = options;
        this.menuIndex = 0;

        const menuWidth = 100;
        const menuHeight = options.length * 20 + 10;
        const mapPixelWidth = MAP_WIDTH * TILE_SIZE;
        const mapPixelHeight = MAP_HEIGHT * TILE_SIZE;

        // 1. Calculate the "Default" position (Right side of the unit)
        let finalX = (x + 1) * TILE_SIZE;
        let finalY = y * TILE_SIZE;

        // 2. HORIZONTAL CHECK: If the menu goes off the right edge, flip it to the left
        if (finalX + menuWidth > mapPixelWidth) {
            finalX = (x * TILE_SIZE) - menuWidth;
        }

        // 3. VERTICAL CHECK: If the menu goes off the bottom edge, push it up
        if (finalY + menuHeight > mapPixelHeight) {
            finalY = mapPixelHeight - menuHeight - 5; // 5px safety padding
        }

        // Draw Background
        const bg = this.add.rectangle(0, 0, menuWidth, menuHeight, 0x222222, 0.9).setOrigin(0, 0);
        bg.setStrokeStyle(2, 0xffffff);
        this.actionMenu.add(bg);

        // Add Text
        options.forEach((opt, i) => {
            const txt = this.add.text(20, 10 + (i * 20), opt, { fontSize: '14px', fill: '#fff' });
            this.actionMenu.add(txt);
        });

        // Add Pointer
        this.menuPointer = this.add.rectangle(10, 18, 6, 6, 0xff3333);
        this.actionMenu.add(this.menuPointer);

        // Apply the calculated safe position
        this.actionMenu.setPosition(finalX, finalY);
        this.actionMenu.setVisible(true);
        this.gameState = 'MENU';
    }

    drawGrid() {
        const graphics = this.add.graphics();
        graphics.lineStyle(1, 0x000000, 0.2);
        graphics.fillStyle(0x44aa44, 1); // Grass color

        for (let x = 0; x < MAP_WIDTH; x++) {
            for (let y = 0; y < MAP_HEIGHT; y++) {
                graphics.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                graphics.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }

    handleInput(event) {
        if (this.gameState === 'LOCKED') return;

        if (this.gameState === 'IDLE' || this.gameState === 'MOVING' || this.gameState === 'TARGETING') {
            // Normal Map Movement
            if (event.code === 'ArrowUp' && this.cursorY > 0) this.cursorY--;
            else if (event.code === 'ArrowDown' && this.cursorY < MAP_HEIGHT - 1) this.cursorY++;
            else if (event.code === 'ArrowLeft' && this.cursorX > 0) this.cursorX--;
            else if (event.code === 'ArrowRight' && this.cursorX < MAP_WIDTH - 1) this.cursorX++;

            if (Phaser.Input.Keyboard.JustDown
            (this.cursors.right) || 
            (this.cursors.left) || 
            (this.cursors.up) || 
            (this.cursors.down)) {
                this.updateCursorPosition();
                this.updateStatusBar(); // <--- ADD THIS HERE
                this.checkUIOverlap();
            }
            this.cursor.setPosition(
                this.cursorX * TILE_SIZE + TILE_SIZE / 2, 
                this.cursorY * TILE_SIZE + TILE_SIZE / 2
            );
            this.updateDamagePreview();

            // Inside your update loop or cursor move function:
            this.rangeGraphics.clear();

            // Only show passive range when we are in IDLE state (just browsing the map)
            if (this.gameState !== 'IDLE') return;

            const hoveredUnit = this.getUnitAt(this.cursorX, this.cursorY);

            if (hoveredUnit) {
                // If you only want this for indirect units (Artillery/Rockets):
                if (hoveredUnit.minRange > 1) {
                    const rangeTiles = this.getTilesInRange(
                        hoveredUnit.gridX, 
                        hoveredUnit.gridY, 
                        hoveredUnit.minRange, 
                        hoveredUnit.maxRange
                    );

                    this.rangeGraphics.fillStyle(0xff0000); // Red for attack range

                    rangeTiles.forEach(tile => {
                        this.rangeGraphics.fillRect(
                            tile.x * TILE_SIZE, 
                            tile.y * TILE_SIZE, 
                            TILE_SIZE, 
                            TILE_SIZE
                        );
                    });
                }
            }
        }
        else if (this.gameState === 'MENU' || this.gameState === 'MAP_MENU') {
            if (event.code === 'ArrowUp') {
                this.menuIndex = (this.menuIndex > 0) ? this.menuIndex - 1 : this.menuOptions.length - 1;
            } else if (event.code === 'ArrowDown') {
                this.menuIndex = (this.menuIndex < this.menuOptions.length - 1) ? this.menuIndex + 1 : 0;
            }
            
            // Update the pointer position
            this.menuPointer.y = 18 + (this.menuIndex * 20);
        }
    }
    handleSelect() {
        if (this.gameState === 'IDLE') {
            const unit = this.getUnitAt(this.cursorX, this.cursorY);

            console.log(`Checking tile ${this.cursorX},${this.cursorY}. Unit found:`, unit);
            
            
            if (unit) {
                console.log(`Unit Team: ${unit.team}, Current Turn: ${this.currentTurn}, Has Moved: ${unit.hasMoved}`);
            }
            const unitAtCursor = this.getUnitAt(this.cursorX, this.cursorY);
            const terrainID = this.mapData[this.cursorY][this.cursorX];
            const isFactory = (LOGICAL_TERRAIN[terrainID] === 'factory');

            if (!unitAtCursor && isFactory) {
                // Show a special menu for the factory
                this.showActionMenu(this.cursorX, this.cursorY, ['Infantry', 'Tank', 'Cancel']);
                this.gameState = 'FACTORY_MENU'; 
            }
            
            if (unitAtCursor) {
                // ONLY allow selection if it's the unit's turn AND they haven't moved
                if (unitAtCursor.team === this.currentTurn && !unitAtCursor.hasMoved) {
                    this.selectedUnit = unitAtCursor;
                    this.originalX = this.selectedUnit.gridX;
                    this.originalY = this.selectedUnit.gridY;
                    
                    // THE FIX: Just pass the whole unit object!
                    this.currentRangeTiles = this.getReachableTiles(this.selectedUnit);
                    
                    this.highlightMovementRange(this.currentRangeTiles);
                    this.gameState = 'MOVING';
                    this.showUnitStats(this.selectedUnit);
                }
            } else {
                // CLICKED EMPTY TILE: Show Map Menu to End Turn
                this.showActionMenu(this.cursorX, this.cursorY, ['End Turn', 'Cancel']);
                this.gameState = 'MAP_MENU';
            }
        }
        else if (this.gameState === 'MOVING') {
            this.showUnitStats(null);
            // 1. Get the path for the arrow
            const path = this.getPath(this.selectedUnit.gridX, this.selectedUnit.gridY, this.cursorX, this.cursorY);
            
            // 2. Determine if the move is valid
            const isReachable = this.currentRangeTiles && this.currentRangeTiles.some(t => t.x === this.cursorX && t.y === this.cursorY);
            const unitAtCursor = this.getUnitAt(this.cursorX, this.cursorY);
            const isStayingPut = (this.cursorX === this.originalX && this.cursorY === this.originalY);

            if ((isReachable && !unitAtCursor) || isStayingPut) {
                // Clear the arrow sprites before the unit moves
                if (this.arrowGroup) this.arrowGroup.clear(true, true);
                
                // Move unit
                this.selectedUnit.gridX = this.cursorX;
                this.selectedUnit.gridY = this.cursorY;
                this.selectedUnit.syncVisuals();

                if (this.highlightGraphics) this.highlightGraphics.clear();
                this.currentRangeTiles = null; 

                // ... rest of your Action Menu logic ...
                let options = ['Wait'];

                // 1. Identify if this is an indirect fire unit (Range > 1)
                const isIndirect = (this.selectedUnit.minRange > 1);

                // 2. Rule: Indirect units can ONLY attack if they didn't move.
                // Direct units (minRange 1) can move and attack normally.
                const canAttackThisTurn = !isIndirect || isStayingPut;

                if (canAttackThisTurn) {
                    const potentialTargets = this.getEnemiesInRange(this.selectedUnit);
                    const validTargets = potentialTargets.filter(enemy => {
                        const atkType = this.selectedUnit.attackType;
                        const defArmor = enemy.armorType;
                        
                        return this.selectedUnit.attackType.some(weapon => {
                            const mult = DAMAGE_MATRIX[weapon] && DAMAGE_MATRIX[weapon][defArmor];
                            return mult !== undefined && mult > 0;
                        });
                    });

                    if (validTargets.length > 0) {
                        options.unshift('Attack');
                    }
                }
                this.showActionMenu(this.selectedUnit.gridX, this.selectedUnit.gridY, options);
            }
        }
        else if (this.gameState === 'MENU') {
            const choice = this.menuOptions[this.menuIndex];

            if (choice === 'Wait') {
                this.selectedUnit.finishAction(); 
                // Close everything and go back to map roaming
                this.finishTurn();
            } 
            // Inside handleSelect when 'Attack' is chosen:
            else if (choice === 'Attack') {
                // Get all enemies within the strict min/max range boundaries
                const potentialTargets = this.getEnemiesInRange(this.selectedUnit);
                
                // Inside your choice === 'Attack' block:
                this.currentTargets = potentialTargets.filter(enemy => {
                    const defArmor = enemy.armorType;
                    
                    // CRITICAL: You must RETURN the result of the .some() call back to the filter!
                    return this.selectedUnit.attackType.some(weapon => {
                        const weaponData = DAMAGE_MATRIX[weapon];
                        const mult = weaponData ? weaponData[defArmor] : 0;
                        
                        const isValid = (mult !== undefined && mult > 0);
                        console.log(`Checking ${weapon} vs ${defArmor}: Multiplier is ${mult}`);
                        
                        return isValid; // This returns to the .some()
                    }); // This returns to the .filter()
                });

                if (this.currentTargets.length > 0) {
                    this.actionMenu.setVisible(false);
                    this.highlightTargets(); // Your red boxes will now draw correctly!
                    
                    // Snap cursor to first valid target
                    this.cursorX = this.currentTargets[0].gridX;
                    this.cursorY = this.currentTargets[0].gridY;
                    
                    this.gameState = 'TARGETING';
                } else {
                    console.log("No damageable targets in range.");
                }
            }
        }
        else if (this.gameState === 'TARGETING') {
            const targetUnit = this.getUnitAt(this.cursorX, this.cursorY);
            
            if (targetUnit && this.currentTargets.includes(targetUnit)) {
                // 1. JUST start the attack. Do NOT filter units or finish turns here.
                this.executeAttack(this.selectedUnit, targetUnit);
                
                // 2. Hide the UI immediately
                if (this.attackGraphics) this.attackGraphics.clear();
                if (this.damagePreviewText) this.damagePreviewText.setVisible(false);
            } else {
                // If they click empty ground, cancel targeting
                this.gameState = 'IDLE';
                if (this.attackGraphics) this.attackGraphics.clear();
            }
        }
        else if (this.gameState === 'MAP_MENU') {
            const choice = this.menuOptions[this.menuIndex];
            if (choice === 'End Turn') {
                this.nextTurn();
            } else {
                // This covers the "Cancel" option in the list
                this.finishTurn(); 
            }
        }
        else if (this.gameState === 'FACTORY_MENU') {
            const choice = this.menuOptions[this.menuIndex].toLowerCase();

            if (choice !== 'cancel') {
                this.spawnUnit(choice, this.cursorX, this.cursorY, this.currentTurn);
            }
            
            this.finishTurn(); // Closes menu and goes back to IDLE
        }
    }
    // Simple helper to reset
    closeMenu() {
        this.actionMenu.setVisible(false);
        this.selectedUnit = null;
        this.currentRangeTiles = null;
        this.gameState = 'IDLE';
    }

    handleCancel() {
        // If the Map Menu is open, just close it
        if (this.gameState === 'MAP_MENU') {
            this.finishTurn(); // This hides the menu and sets state to IDLE
            return;
        }

        // ... your existing cancel logic for MOVING, MENU, and TARGETING ...
        if (this.gameState === 'MOVING') {
            this.arrowGroup.clear(true, true);
            this.finishTurn();
        } 
        else if (this.gameState === 'MENU' || this.gameState === 'TARGETING') {
            if (this.selectedUnit && !this.selectedUnit.hasMoved) {
                this.selectedUnit.gridX = this.originalX;
                this.selectedUnit.gridY = this.originalY;
                this.selectedUnit.syncVisuals();
            }
            this.finishTurn();
        }
    }

    clearSelection() {
        this.selectedUnit = null;
        this.currentRangeTiles = null;
        this.highlightGraphics.clear();
        this.gameState = 'IDLE';
    }

    getUnitAt(gx, gy) {
        return this.units.find(u => Math.floor(u.gridX) === Math.floor(gx) && Math.floor(u.gridY) === Math.floor(gy));
    }

    // The core "Strategy" logic
    getReachableTiles(unit) {
        
        const queue = [{ x: unit.gridX, y: unit.gridY, cost: 0 }];
        const reachable = [];
        
        // We use a Map to track the lowest cost to reach each tile.
        // This prevents infinite loops and ensures we find the fastest route.
        const visited = new Map();
        visited.set(`${unit.gridX},${unit.gridY}`, 0);

        const unitTeam = unit.team;
        const maxMovePoints = unit.moveRange;

        while (queue.length > 0) {
            // Sort the queue to process the easiest paths first (Dijkstra's Algorithm)
            queue.sort((a, b) => a.cost - b.cost);
            const current = queue.shift();

            // Add to reachable array (skip the tile the unit is currently standing on)
            if (!(current.x === unit.gridX && current.y === unit.gridY)) {
                // Check if it's already in our array so we don't draw overlapping blue squares
                if (!reachable.some(t => t.x === current.x && t.y === current.y)) {
                    reachable.push({ x: current.x, y: current.y, cost: current.cost });
                }
            }

            // The 4 adjacent tiles (Up, Down, Left, Right)
            const neighbors = [
                { x: current.x, y: current.y - 1 },
                { x: current.x, y: current.y + 1 },
                { x: current.x - 1, y: current.y },
                { x: current.x + 1, y: current.y }
            ];

            neighbors.forEach(n => {
                // 1. Check if the tile is safely inside the map boundaries
                if (n.x >= 0 && n.x < MAP_WIDTH && n.y >= 0 && n.y < MAP_HEIGHT) {
                    
                    // 2. GET TERRAIN TYPE
                    // Since mapData ALREADY contains 'grass', 'forest', etc.
                    let logicalTerrain = this.mapData[n.y][n.x]; 

                    // 3. GET MOVEMENT COST
                    const unitCosts = MOVE_COSTS[unit.movementType];

                    // Safety check: if the terrain string is weird, default to something high
                    let stepCost = (unitCosts && unitCosts[logicalTerrain]) ? unitCosts[logicalTerrain] : 99;
                    
                    // If the terrain is impassable or unknown, default to 99
                    if (stepCost === undefined) stepCost = 99;

                    // 4. CHECK FOR ENEMY OBSTACLES
                    let unitOnTile = this.getUnitAt(n.x, n.y);
                    if (unitOnTile && unitOnTile.team !== unitTeam) {
                        stepCost = 99; // Enemies act as brick walls
                    }

                    let totalCost = current.cost + stepCost;

                    // 5. IF REACHABLE, ADD TO QUEUE
                    if (totalCost <= maxMovePoints) {
                        const tileKey = `${n.x},${n.y}`;
                        
                        // Only add to the queue if we haven't visited it yet, 
                        // OR if we just found a cheaper/faster path to get there
                        if (!visited.has(tileKey) || totalCost < visited.get(tileKey)) {
                            visited.set(tileKey, totalCost);
                            queue.push({ x: n.x, y: n.y, cost: totalCost });
                        }
                    }
                }
            });
        }
        return reachable;
    }

    getAdjacentEnemies(x, y, playerTeam) {
        const directions = [
            { x: 0, y: -1 }, { x: 0, y: 1 }, 
            { x: -1, y: 0 }, { x: 1, y: 0 }
        ];

        return this.units.filter(unit => {
            const isAdjacent = directions.some(d => 
                unit.gridX === x + d.x && unit.gridY === y + d.y
            );
            return isAdjacent && unit.team !== playerTeam && !unit.isDead;
        });
    }
    
    nextTurn() {
        // 1. Swap the active team
        this.currentTurn = (this.currentTurn === 'red') ? 'blue' : 'red';

        const teamColor = TEAM_COLORS[this.currentTurn];
        this.cursor.setStrokeStyle(4, teamColor);
        
        // 2. Process ALL units
        this.units.forEach(u => {
            // ALWAYS remove the gray tint so they look "alive" again
            u.sprite.clearTint();
            
            // Only the team whose turn it IS gets to move
            if (u.team.toLowerCase() === this.currentTurn.toLowerCase()) {
                u.hasMoved = false;
            } else {
                // Keep the other team's hasMoved as true so you can't click them
                u.hasMoved = true; 
            }
            this.snapToUnit();
        });

        this.finishTurn(); 
        this.showTurnBanner();
    }

    showTurnBanner() {
        console.log("Banner Position:", this.turnBanner.x, this.turnBanner.y, "Visible:", this.turnBanner.visible);
        this.gameState = 'LOCKED';
        
        // Update text and color
        this.turnText.setText(this.currentTurn.toUpperCase() + " TURN");
        this.turnText.setFill(this.currentTurn === 'red' ? '#ff4444' : '#4444ff');

        // Reset banner properties before animating
        this.turnBanner.setVisible(true);
        this.turnBanner.alpha = 0;
        this.turnBanner.setScale(0.5); // Start small for a "pop" effect

        this.tweens.add({
            targets: this.turnBanner,
            alpha: { from: 0, to: 1 },
            scale: { from: 0.5, to: 1 },
            duration: 400,
            ease: 'Back.easeOut',
            onComplete: () => {
                // Hold it for a second, then fade out
                this.time.delayedCall(1000, () => {
                    this.tweens.add({
                        targets: this.turnBanner,
                        alpha: 0,
                        duration: 300,
                        onComplete: () => {
                            this.turnBanner.setVisible(false);
                            this.gameState = 'IDLE';
                        }
                    });
                });
            }
        });
    }

    highlightMovementRange(tiles) {
        if (!this.highlightGraphics) {
            this.highlightGraphics = this.add.graphics().setDepth(1);
        }
        
        this.highlightGraphics.clear();
        
        if (!tiles) return;

        this.highlightGraphics.fillStyle(0x0000ff, 0.3); // 0.3 is the transparency (alpha)
        tiles.forEach(tile => {
            this.highlightGraphics.fillRect(
                tile.x * TILE_SIZE, 
                tile.y * TILE_SIZE, 
                TILE_SIZE, 
                TILE_SIZE
            );
        });
    }
}
