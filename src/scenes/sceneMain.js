import Phaser from 'phaser';
import SprBg0 from '../assets/sprBg0.png';
import SprBg1 from '../assets/sprBg1.png';
import SprExplosion from '../assets/sprExplosion.png';
import SprEnemy0 from '../assets/sprEnemy0.png';
import SprEnemy1 from '../assets/sprEnemy1.png';
import SprEnemy2 from '../assets/sprEnemy2.png';
import Bomb from '../assets/bomb.png';
import SprLaserPlayer from '../assets/sprLaserPlayer.png';
import SprPlayer from '../assets/sprPlayer.png';
import Player from '../models/player';
import GunShip from '../models/gunship';

export default class SceneMain extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMain' });
  }

  preload() {
    this.load.image('sprBg0', SprBg0);
    this.load.image('sprBg1', SprBg1);
    this.load.spritesheet('sprExplosion', SprExplosion, {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('sprEnemy0', SprEnemy0, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprEnemy1', SprEnemy1);
    this.load.spritesheet('sprEnemy2', SprEnemy2, {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('bomb', Bomb);
    this.load.image('sprLaserPlayer', SprLaserPlayer);
    this.load.spritesheet('sprPlayer', SprPlayer, {
      frameWidth: 16,
      frameHeight: 16,
    });
  }

  create() {
    this.anims.create({
      key: 'sprEnemy0',
      frames: this.anims.generateFrameNumbers('sprEnemy0'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'sprEnemy2',
      frames: this.anims.generateFrameNumbers('sprEnemy2'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion'),
      frameRate: 20,
      repeat: 0,
    });

    this.anims.create({
      key: 'sprPlayer',
      frames: this.anims.generateFrameNumbers('sprPlayer'),
      frameRate: 20,
      repeat: -1,
    });
    // this.sfx = {
    //   explosions: [
    //     this.sound.add('sndExplode0'),
    //     this.sound.add('sndExplode1'),
    //   ],
    //   laser: this.sound.add('sndLaser'),
    // };
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprPlayer',
    );
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE,
    );
    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();
    this.time.addEvent({
      delay: 1000,
      callback() {
        const enemy = new GunShip(
          this,
          Phaser.Math.Between(0, this.game.config.width),
          0,
        );
        this.enemies.add(enemy);
      },
      callbackScope: this,
      loop: true,
    });
  }

  update() {
    this.player.update();

    if (this.keyW.isDown) {
      this.player.moveUp();
    } else if (this.keyS.isDown) {
      this.player.moveDown();
    }

    if (this.keyA.isDown) {
      this.player.moveLeft();
    } else if (this.keyD.isDown) {
      this.player.moveRight();
    }
  }
}
