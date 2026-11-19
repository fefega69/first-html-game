export class BattleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BattleScene' });
    }

    init(data) {
        this.battleData = data;
    }

    create() {
        const { attacker, defender } = this.battleData;
        const width = this.cameras.main.width;        
        const height = this.cameras.main.height;
        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        this.attackerSprite = this.add.sprite(width * 0.25, centerY + 50, 'battle', 0).setScale(2);
        this.defenderSprite = this.add.sprite(width * 0.75, centerY + 50, 'battle', 0).setScale(2).setFlipX(true);

        const attackerAnim = `${attacker.team}_${attacker.textureBattle}`; 
        const defenderAnim = `${defender.team}_${defender.textureBattle}`;

        if (this.anims.exists(attackerAnim)) {
            this.attackerSprite.play(attackerAnim);
        } else {
            console.warn(`Missing animation: ${attackerAnim}`);
        }

        if (this.anims.exists(defenderAnim)) {
            this.defenderSprite.play(defenderAnim);
        }

        this.attackerHPText = this.add.text(width * 0.1, height * 0.1, `HP: ${attacker.hp}`, { 
            fontSize: `${height * 0.08}px`, color: '#fff', stroke: '#000', strokeThickness: 4 
        });

        this.defenderHPText = this.add.text(width * 0.7, height * 0.1, `HP: ${defender.hp}`, { 
            fontSize: `${height * 0.08}px`, color: '#fff', stroke: '#000', strokeThickness: 4 
        });

        const barHeight = height * 0.15;
        this.attackerHPText.setY(barHeight / 4).setDepth(1);
        this.defenderHPText.setY(barHeight / 4).setDepth(1);
        this.add.rectangle(centerX, barHeight / 2, width, barHeight, 0x000000);
        this.add.rectangle(centerX, height - (barHeight / 2), width, barHeight, 0x000000);
        

        this.time.delayedCall(500, () => this.playBattleSequence());
    }

    playBattleSequence() {
        this.tweens.add({
            targets: this.attackerSprite,
            x: 250,
            duration: 500,
            yoyo: true,
            onComplete: () => this.applyDamageToDefender()
        });
    }

    applyDamageToDefender() {
        const { defender, damageToDefender } = this.battleData;

        this.defenderSprite.setTint(0xff0000);
        this.cameras.main.shake(100, 0.005);

        const newHp = Math.max(0, defender.hp - damageToDefender);
        
        if (this.defenderHPText) {
            this.defenderHPText.setText(`HP: ${newHp}`);
        }

        this.time.delayedCall(300, () => {
            this.defenderSprite.clearTint();
            
            if (newHp > 0 && this.battleData.damageToAttacker > 0) {
                this.playRetaliation();
            } else {
                this.time.delayedCall(500, () => this.endBattle());
            }
        });
    }

    playRetaliation() {
        this.tweens.add({
            targets: this.defenderSprite,
            x: 550,
            duration: 200,
            yoyo: true,
            onComplete: () => this.applyDamageToAttacker()
        });
    }

    applyDamageToAttacker() {
        const { attacker, damageToAttacker } = this.battleData;

        this.attackerSprite.setTint(0xff0000);
        const newHp = Math.max(0, attacker.hp - damageToAttacker);
        
        if (this.attackerHPText) {
            this.attackerHPText.setText(`HP: ${newHp}`);
        }

        this.time.delayedCall(500, () => {
            this.attackerSprite.clearTint();
            this.endBattle();
        });
    }

    endBattle() {
        const mainScene = this.scene.get('Start');

        this.scene.resume('Start');

        mainScene.events.emit('battleFinished', {
            attacker: this.battleData.attacker,
            defender: this.battleData.defender,
            attackerDamageTaken: this.battleData.damageToAttacker,
            defenderDamageTaken: this.battleData.damageToDefender
        });

        this.scene.stop();
    }
}