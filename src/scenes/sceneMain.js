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
    super({ key: "SceneMain" });
  }

  preload() {
    this.load.image("sprBg0", SprBg0);
    this.load.image("sprBg1", SprBg1);
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
    
  }
}
