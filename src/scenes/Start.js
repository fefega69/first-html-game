export const TILE_SIZE = 16;
export const MAP_WIDTH = 30;
export const MAP_HEIGHT = 20;

const UNIT_CATALOG = {
    'infantry': {
        textureBase: 'infantry_idle',
        moveRange: 3,
        movementType: 'foot',
        attackType: 'mgun',
        armorType: 'infantry',
        minRange: 1,
        maxRange: 1,
        cost: 1000
    },

    'mech': {
        textureBase: 'mech_idle',
        moveRange: 2,
        movementType: 'boot',
        attackType: 'bazooka',
        armorType: 'infantry',
        minRange: 1,
        maxRange: 1,
        cost: 3000
    },

    'recon': {
        textureBase: 'recon_idle',
        moveRange: 8,
        movementType: 'wheels',
        attackType: 'mgun',
        armorType: 'light',
        minRange: 1,
        maxRange: 1,
        cost: 4000
    },

    't-copter': {
        textureBase: 'transport_idle',
        moveRange: 6,
        movementType: 'air',
        armorType: 'copter',
        cost: 5000
    },

    'apc': {
        textureBase: 'apc_idle',
        moveRange: 6,
        movementType: 'treads',
        armorType: 'light',
        cost: 5000
    },

    'artillery': {
        textureBase: 'arty_idle',
        moveRange: 5,
        movementType: 'treads',
        attackType: 'artillery',
        armorType: 'light',
        minRange: 2,
        maxRange: 3,
        cost: 6000
    },

    'tank': {
        textureBase: 'tank_idle',
        moveRange: 6,
        movementType: 'treads',
        attackType: 'cannon',
        armorType: 'tank',
        minRange: 1,
        maxRange: 1,
        cost: 7000
    },

    'anti-air': {
        textureBase: 'aa_idle',
        moveRange: 6,
        movementType: 'treads',
        attackType: 'vulcan',
        armorType: 'tank',
        minRange: 1,
        maxRange: 1,
        cost: 8000
    },

    'b-copter': {
        textureBase: 'helicopter_idle',
        moveRange: 6,
        movementType: 'air',
        attackType: 'agm',
        armorType: 'copter',
        minRange: 1,
        maxRange: 1,
        cost: 9000
    },

    'missile': {
        textureBase: 'missile_idle',
        moveRange: 4,
        movementType: 'wheels',
        attackType: 'aam',
        armorType: 'light',
        minRange: 3,
        maxRange: 5,
        cost: 12000
    },

    'lander': {
        textureBase: 'lander_idle',
        moveRange: 6,
        movementType: 'lander',
        armorType: 'ship',
        cost: 12000
    },
    
    'rocket': {
        textureBase: 'rocket_idle',
        moveRange: 5,
        movementType: 'wheels',
        attackType: 'rockets',
        armorType: 'infantry',
        minRange: 3,
        maxRange: 5,
        cost: 15000
    },

    'hvy_tank': {
        textureBase: 'heavy_idle',
        moveRange: 5,
        movementType: 'treads',
        attackType: 'hvycannon',
        armorType: 'heavy',
        minRange: 1,
        maxRange: 1,
        cost: 16000
    },

    'cruiser': {
        textureBase: 'ca_idle',
        moveRange: 6,
        movementType: 'sea',
        attackType: 'antisub',
        armorType: 'ship',
        minRange: 1,
        maxRange: 1,
        cost: 18000
    },

    'sub': {
        textureBase: 'sub_idle',
        moveRange: 5,
        movementType: 'sea',
        attackType: 'torps',
        armorType: 'sub',
        minRange: 1,
        maxRange: 1,
        cost: 20000
    },

    'fighter': {
        textureBase: 'fighter_idle',
        moveRange: 9,
        movementType: 'air',
        attackType: 'aam',
        armorType: 'plane',
        minRange: 1,
        maxRange: 1,
        cost: 20000
    },

    'bomber': {
        textureBase: 'bomber_idle',
        moveRange: 7,
        movementType: 'air',
        attackType: 'bomb',
        armorType: 'plane',
        minRange: 1,
        maxRange: 1,
        cost: 22000
    },

    'battleship': {
        textureBase: 'bb_idle',
        moveRange: 5,
        movementType: 'sea',
        attackType: 'bb',
        armorType: 'ship',
        minRange: 3,
        maxRange: 5,
        cost: 28000
    }
    // Add more here...
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
    CLIFFLEFT: 65,
    CLIFFRIGHT: 66,
    CLIFFCORNERLEFT:69,
    CLIFFCORNERRIGHT: 70,
    WATERFALLUP: 87,
    WATERFALLRIGHT: 88,
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
        'river': 2
    },
    'boot':{
        'grass': 1,
        'forest': 1,
        'mountain': 1,
        'water': 99,
        'reef': 99,
        'beach': 99,
        'road': 1,
        'river': 1
    },
    'wheels':{
        'grass': 2,
        'forest': 3,
        'mountain': 99,
        'water': 99,
        'reef': 99,
        'beach': 99,
        'road': 1,
        'river': 99
    },
    'treads':{
        'grass': 1,
        'forest': 2,
        'mountain': 99,
        'water': 99,
        'reef': 99,
        'beach': 99,
        'road': 1,
        'river': 99
    },
    'lander':{
        'grass': 99,
        'forest': 99,
        'mountain': 99,
        'water': 1,
        'reef': 2,
        'beach': 1,
        'road': 99,
        'river': 99
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
    },
    'air':{
        'grass': 1,
        'forest': 1,
        'mountain': 1,
        'water': 1,
        'reef': 1,
        'beach': 1,
        'road': 1,
        'river': 1
    }
};

const DAMAGE_MATRIX = {
    // Machine Gun (Infantry/Recon)
    'mgun': { 
        'infantry': 0.55, 'light': 0.12, 'tank': 0.05, 'heavy': 0.01, 'copter': 0.07 
    },
    // Bazooka (Mech units)
    'bazooka': { 
        'infantry': 0.65, 'light': 0.85, 'tank': 0.55, 'heavy': 0.15, 'ship': 0.10 
    },
    // Air-to-Ground Missiles (B-Copter)
    'agm': { 
        'infantry': 0.75, 'light': 0.60, 'tank': 0.55, 'heavy': 0.25, 'ship': 0.25, 'sub': 0.25 
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
        'infantry': 0.75, 'light': 0.75, 'tank': 0.55, 'heavy': 0.15, 'ship': 0.10 
    },
    // Heavy Tank Cannon
    'hvycannon': { 
        'infantry': 1.0, 'light': 0.85, 'tank': 0.70, 'heavy': 0.45, 'ship': 0.10 
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
        'infantry': 1.0, 'light': 0.15, 'tank': 0.10, 'heavy': 0.05, 'copter': 1.20, 'plane': 0.65 
    },
    // Battleship Big Guns
    'bb': { 
        'infantry': 0.95, 'light': 0.90, 'tank': 0.90, 'heavy': 0.65, 'ship': 0.50, 'sub': 0.50 
    },
    // Cruiser Anti-Sub / Depth Charges
    'antisub': { 
        'sub': 0.90, 'copter': 1.15, 'plane': 0.65 
    },
    // Submarine Torpedoes
    'torps': { 
        'ship': 0.75, 'sub': 0.55 
    }
};

class Unit {
    // Replaced 'color' with 'animKey'
    constructor(scene, gridX, gridY, unitStats) {
        this.scene = scene;
        this.gridX = gridX;
        this.gridY = gridY;

        this.team = unitStats.team;
        this.moveRange = unitStats.moveRange;
        this.movementType = unitStats.movementType;
        this.texture = unitStats.texture;
        this.maxHp = unitStats.maxHp || 10; // Defaults to 10 if you forget to put it in config
        this.hp = this.maxHp;               // Now this correctly equals 10!
        this.attackType = unitStats.attackType; 
        // e.g., 'mgun', bazooka, agm, aam, bombs, cannon, heavycannon, artillery,rockets, vulcan, bb, antiship, 
        //torps
        this.armorType = unitStats.armorType;  
        // e.g., infantry, light, tank, heavy, ship, sub, copter, plane 
        this.hasMoved = false;
        this.isDead = false;

        // Copy all stats (minRange, maxRange, attackType, etc.) from the catalog
        Object.assign(this, unitStats); 
        
        // Fallbacks in case the catalog is missing a range
        this.minRange = this.minRange || 1;
        this.maxRange = this.maxRange || 1;

        // We use add.sprite instead of add.rectangle
        this.sprite = scene.add.sprite(
            gridX * TILE_SIZE + TILE_SIZE / 2, 
            gridY * TILE_SIZE + TILE_SIZE / 2, 
            'units'
        ).setDepth(2);

        this.sprite.play(this.texture);

        // 2. Create the HP Text
        // We set the depth to 3 so it's ALWAYS on top of the sprite (depth 2)
        this.hpText = scene.add.text(0, 0, '10', { 
            fontSize: '10px', 
            fontWeight: 'bold',
            fill: '#ffffff', 
            stroke: '#000000', 
            strokeThickness: 2 
        });
        this.hpText.setDepth(3); 

        // 3. Initial positioning
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

        // Position the HP text at the bottom-right of the tile
        this.hpText.setPosition(screenX + 2, screenY + 2);
        this.hpText.setText(Math.ceil(this.hp));
        
        // Hide HP text if full health (optional, like Advance Wars)
        this.hpText.setVisible(this.hp < 10);
    }

    // Update the text position when moving
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
            return; // <--- THIS IS THE MAGIC WORD. It stops the function right here!
        }
        
        // Only update visuals if the unit is still alive
        this.syncVisuals();
    }

    finishAction() {
        this.hasMoved = true;
        this.sprite.setTint(0x777777); // The "Exhausted" gray
        this.syncVisuals();
    }
}

export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
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
    
    getEnemyNeighbors(unit) {
        // 1. If unit is null, return an empty array immediately
        if (!unit) return [];

        const targets = [];
        const minRange = unit.minRange || 1;
        const maxRange = unit.maxRange || 1;

        this.units.forEach(other => {
            if (other && !other.isDead && other.team !== unit.team) {
                const dist = Math.abs(unit.gridX - other.gridX) + Math.abs(unit.gridY - other.gridY);
                if (dist >= minRange && dist <= maxRange) {
                    targets.push(other);
                }
            }
        });

        return targets;
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
        // If we aren't targeting or the unit is gone, hide the text and get out
        if (this.gameState !== 'TARGETING' || !this.selectedUnit) {
            if (this.damagePreviewText) this.damagePreviewText.setVisible(false);
            return;
        }

        const target = this.getUnitAt(this.cursorX, this.cursorY);

        // Only show if the cursor is actually on one of the enemies we can hit
        if (target && this.currentTargets && this.currentTargets.includes(target)) {
            const damage = this.calculateDamage(this.selectedUnit, target);
            const remainingHP = Math.max(0, target.hp - damage);
            
            this.damagePreviewText.setText(`Target HP: ${target.hp} -> ${remainingHP}`);
            this.damagePreviewText.setPosition(
                this.cursorX * TILE_SIZE + TILE_SIZE / 2, 
                this.cursorY * TILE_SIZE - 5
            );
            this.damagePreviewText.setVisible(true);
        } else {
            this.damagePreviewText.setVisible(false);
        }
    }

    calculateDamage(attacker, target) {
        const attackerType = attacker.attackType;
        const targetArmor = target.armorType;

        // 1. Check if the attack is possible
        const multiplier = (DAMAGE_MATRIX[attackerType] && DAMAGE_MATRIX[attackerType][targetArmor]);
        
        // If it's undefined or 0, return 0 damage immediately
        if (!multiplier || multiplier <= 0) {
            return 0; 
        }

        const baseAtk = 12; 
        const healthFactor = attacker.hp / 10;
        let damage = Math.round(baseAtk * multiplier * healthFactor);

        // Scratch damage only applies if the unit CAN actually hit the target
        if (damage < 1) damage = 1;

        return damage;
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
        const predictedDmg = this.calculateDamage(attacker, target);
    
        // If we can't do any damage, stop the function immediately
        if (predictedDmg <= 0) {
            console.log(`${attacker.attackType} cannot harm ${target.armorType}. Attack cancelled.`);
            return; 
        }

        // 1. Get the raw multiplier
        const attackerType = attacker.attackType;
        const targetArmor = target.armorType;
        
        // Safety check for the matrix
        let multiplier = 0.1; // Default to very low damage if lookup fails
        if (DAMAGE_MATRIX[attackerType] && DAMAGE_MATRIX[attackerType][targetArmor] !== undefined) {
            multiplier = DAMAGE_MATRIX[attackerType][targetArmor];
        } else {
            console.error(`MISSING MATRIX: No damage for ${attackerType} vs ${targetArmor}`);
        }

        const baseAtk = 10; 
        let damage = Math.round(attacker.getEffectivePower(baseAtk) * multiplier);
        
        // CRITICAL: Ensure damage is at least 0 and never more than target HP unless intended
        damage = Math.max(0, damage);

        console.log(`BATTLE: ${attacker.team} ${attackerType} hits ${target.team} ${targetArmor}`);
        console.log(`Mult: ${multiplier}, Final Dmg: ${damage}, Target HP before: ${target.hp}`);

        // Apply damage ONLY ONCE
        target.hp -= damage;
        if (target.takeDamage) target.takeDamage(damage); // Use for visual effects only

        // ... Counter attack logic (Same cleanup) ...
        if (target.hp > 0) {
            const counterMultiplier = (DAMAGE_MATRIX[target.attackType] && DAMAGE_MATRIX[target.attackType][attacker.armorType]) || 1.0;
            const baseRet = 3; 
            let counterDamage = Math.round(target.getEffectivePower(baseRet) * counterMultiplier);
            
            console.log(`Counter: ${counterDamage} dmg`);
            attacker.hp -= counterDamage;
            attacker.takeDamage(counterDamage);
        }

        // 3. Final Cleanup: Check if anyone died
        this.cleanupDeadUnit(target);
        this.cleanupDeadUnit(attacker);

        // 4. Check for Game Over
        this.checkVictory();
    }

    cleanupDeadUnit(unit) {
        if (unit.hp <= 0) {
            unit.isDead = true;
            if (unit.sprite) unit.sprite.destroy(); 
            
            // Remove from the logic array
            this.units = this.units.filter(u => u !== unit);
            
            console.log(`${unit.team} ${unit.attackType} was destroyed!`);
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
    }

    update() {
        this.highlightGraphics.clear();

        // If nothing is selected, clear the screen and stop immediately
        if (!this.currentRangeTiles) {
            this.highlightGraphics.clear();
            return; 
        }
        
        if (this.currentRangeTiles) {
            // Use the pulsing alpha from our tween
            // Inside update(), before filling the rectangles
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
        // Terrain tile spritesheet
        this.load.image('terrain_tiles', 'assets/spritesheet.png');
        this.load.image('structure_tiles', 'assets/spritesheet1.png');

        // Unit spritesheet
        this.load.spritesheet('units', 'assets/unit-sprites.png', { 
            frameWidth: 16, 
            frameHeight: 16 
        });

        this.load.tilemapTiledJSON('map', 'assets/pdsmallmap1.json');
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
            key: 'blue_infantry_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 3, end: 5 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_mech_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 6, end: 8 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_mech_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 9, end: 11 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_recon_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 12, end: 14 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_recon_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 15, end: 17 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_tank_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 18, end: 20 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_tank_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 21, end: 23 }),
            frameRate: 5,
            repeat: -1,
            yoyo: true
        });
        this.anims.create({
            key: 'red_heavy_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 24, end: 26 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_heavy_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 27, end: 29 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_apc_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 30, end: 32 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_apc_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 33, end: 35 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_aa_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 36, end: 38 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_aa_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 39, end: 41 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });this.anims.create({
            key: 'red_arty_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 42, end: 44 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_arty_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 45, end: 47 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_rocket_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 48, end: 50 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_rocket_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 51, end: 53 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_missile_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 54, end: 56 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_missile_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 57, end: 59 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_fighter_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 60, end: 62 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_fighter_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 63, end: 65 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_bomber_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 66, end: 68 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_bomber_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 69, end: 71 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_helicopter_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 72, end: 74 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: false    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_helicopter_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 75, end: 77 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: false    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_transport_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 78, end: 80 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: false    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_transport_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 81, end: 83 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: false    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_bb_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 84, end: 86 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_bb_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 87, end: 89 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_ca_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 90, end: 92 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_ca_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 93, end: 95 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_lander_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 96, end: 98 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_lander_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 99, end: 101 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'red_sub_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 102, end: 104 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });
        this.anims.create({
            key: 'blue_sub_idle',
            frames: this.anims.generateFrameNumbers('units', { start: 105, end: 107 }),
            frameRate: 5, // 4 frames per second
            repeat: -1,   // -1 means loop forever
            yoyo: true    // Plays 0-1-2-3-2-1-0 (makes the bobbing look smoother)
        });

        // Inside create()
        this.highlightAlpha = 0.3; // Default starting alpha
        this.tweens.add({
            targets: this,
            highlightAlpha: 0.1, // Pulsing down to 0.1
            duration: 800,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
        });

        
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

        // DEBUG: This will show you exactly what your map looks like to the computer
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

        // Create the cursor
        
        this.cursor = this.add.rectangle(
            TILE_SIZE / 2, TILE_SIZE / 2, 
            TILE_SIZE, TILE_SIZE
        );
        this.cursor.setStrokeStyle(4, 0xffff00); 
        this.cursor.setDepth(3);

        // Setup Inputs
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
    }

    showActionMenu(x, y, options) {
        this.actionMenu.removeAll(true);
        this.menuOptions = options;
        this.menuIndex = 0;

        const menuWidth = 90;
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

            this.cursor.setPosition(
                this.cursorX * TILE_SIZE + TILE_SIZE / 2, 
                this.cursorY * TILE_SIZE + TILE_SIZE / 2
            );

            this.updateDamagePreview();
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
        // Step A: Find all units in range
        // 1. Get ALL units in range (1 for direct, 2-3 for artillery, etc.)
        const potentialTargets = this.getEnemyNeighbors(this.selectedUnit);

        const validTargets = potentialTargets.filter(enemy => {
            const atkType = this.selectedUnit.attackType;
            const defArmor = enemy.armorType;
            
            // If the attacker type doesn't even exist in the matrix, allow the attack
            // but warn us in the console.
            if (!DAMAGE_MATRIX[atkType]) {
                console.warn(`Attack Type "${atkType}" not found in Matrix!`);
                return true; 
            }

            const multiplier = DAMAGE_MATRIX[atkType][defArmor];

            // Only block if the multiplier is EXPLICITLY 0
            return multiplier !== 0;
        });


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
                }
            } else {
                // CLICKED EMPTY TILE: Show Map Menu to End Turn
                this.showActionMenu(this.cursorX, this.cursorY, ['End Turn', 'Cancel']);
                this.gameState = 'MAP_MENU';
            }
        }
        else if (this.gameState === 'MOVING') {
            const isReachable = this.currentRangeTiles.some(t => t.x === this.cursorX && t.y === this.cursorY);
            const isStayingPut = (this.cursorX === this.selectedUnit.gridX && this.cursorY === this.selectedUnit.gridY);
            const unitAtCursor = this.getUnitAt(this.cursorX, this.cursorY);

            if ((isReachable && !unitAtCursor) || isStayingPut) {
                this.selectedUnit.gridX = this.cursorX;
                this.selectedUnit.gridY = this.cursorY;
                this.selectedUnit.syncVisuals();

                if (this.highlightGraphics) {
                    this.highlightGraphics.clear();
                }
                
                // --- ADD THIS LINE ---
                // This removes the "map" the game uses to draw the blue tiles
                this.currentRangeTiles = null; 

                const enemies = this.getAdjacentEnemies(this.selectedUnit.gridX, this.selectedUnit.gridY, this.selectedUnit.team);
                let options = ['Wait'];
                if (enemies.length > 0) options.unshift('Attack');

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
                this.currentTargets = this.getAdjacentEnemies(this.selectedUnit.gridX, this.selectedUnit.gridY, this.selectedUnit.team);
                this.actionMenu.setVisible(false);
                this.highlightTargets();
                
                // SNAP cursor to the first available target so the player doesn't have to hunt for it
                if (this.currentTargets.length > 0) {
                    this.cursorX = this.currentTargets[0].gridX;
                    this.cursorY = this.currentTargets[0].gridY;
                    this.cursor.setPosition(
                        this.cursorX * TILE_SIZE + TILE_SIZE / 2, 
                        this.cursorY * TILE_SIZE + TILE_SIZE / 2
                    );
                }

                this.gameState = 'TARGETING';
            }
        }
        else if (this.gameState === 'TARGETING') {
            const targetUnit = this.getUnitAt(this.cursorX, this.cursorY);
            
            // Check if we actually clicked a valid enemy from our list
            if (targetUnit && this.currentTargets.includes(targetUnit)) {
                
                // 1. Run the combat
                this.executeAttack(this.selectedUnit, targetUnit);
                
                // 2. Clean up the units array (remove anyone who died)
                this.units = this.units.filter(u => !u.isDead);

                // 3. IMPORTANT: Finalize the attacker's turn
                // If the attacker survived the counter-attack, mark them as done
                if (!this.selectedUnit.isDead) {
                    this.selectedUnit.finishAction();
                }

                // 4. Reset the game state to IDLE
                this.finishTurn();
            }
        }
        // Add this to your handleSelect if you haven't yet!
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
        // 1. Create the graphics object if it doesn't exist yet
        if (!this.highlightGraphics) {
            this.highlightGraphics = this.add.graphics().setDepth(1);
        }
        
        // 2. Clear anything drawn previously
        this.highlightGraphics.clear();
        
        // 3. If we don't have any tiles to draw, just stop
        if (!tiles) return;

        // 4. Draw a semi-transparent blue square for every reachable tile
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
