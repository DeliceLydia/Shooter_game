import SprBg0 from '../assets/sprBg0.png';
import SprBg1 from '../assets/sprBg1.png';
import SprExplosion from '../assets/sprExplosion.png';
import SprEnemy0 from '../assets/sprEnemy0.png';
import SprEnemy1 from '../assets/sprEnemy1.png';
import SprEnemy2 from '../assets/sprEnemy2.png';
import Bomb from '../assets/bomb.png';
import SprLaserPlayer from '../assets/sprLaserPlayer.png';
import SprPlayer from '../assets/sprPlayer.png';
import SndExplode0 from '../assets/sndExplode0.wav';
import SndExplode1 from '../assets/sndExplode1.wav';
import SndLaser from '../assets/sndLaser.wav';

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
    this.load.audio('sndExplode0', SndExplode0);
    this.load.audio('sndExplode1', SndExplode1);
    this.load.audio('sndLaser', SndLaser);
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
    this.sfx = {
      explosions: [
        this.sound.add('sndExplode0'),
        this.sound.add('sndExplode1'),
      ],
      laser: this.sound.add('sndLaser'),
    };
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprPlayer',
    );
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
