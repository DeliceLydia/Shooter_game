import Phaser from 'phaser';
import SprBg0 from '../assets/sprBg0.png';
import SprBg1 from '../assets/sprBg1.png';
import SprBtnPlay from '../assets/sprBtnPlay.png';
import SprBtnPlayHover from '../assets/sprBtnPlayHover.png';
import SprBtnPlayDown from '../assets/sprBtnPlayDown.png';
import SprBtnRestart from '../assets/sprBtnRestart.png';
import SprBtnRestartHover from '../assets/sprBtnRestartHover.png';
import SprBtnRestartDown from '../assets/sprBtnRestartDown.png';
import SndBtnOver from '../assets/sndBtnOver.wav';
import SndBtnDown from '../assets/sndBtnDown.wav';

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneMainMenu' });
  }

  preload() {
    this.load.image('sprBg0', SprBg0);
    this.load.image('sprBg1', SprBg1);
    this.load.image('sprBtnPlay', SprBtnPlay);
    this.load.image('sprBtnPlayHover', SprBtnPlayHover);
    this.load.image('sprBtnPlayDown', SprBtnPlayDown);
    this.load.image('sprBtnRestart', SprBtnRestart);
    this.load.image('sprBtnRestartHover', SprBtnRestartHover);
    this.load.image('sprBtnRestartDown', SprBtnRestartDown);
    this.load.audio('sndBtnOver', SndBtnOver);
    this.load.audio('sndBtnDown', SndBtnDown);
  }

  create() {
    this.sfx = {
      btnOver: this.sound.add('sndBtnOver'),
      btnDown: this.sound.add('sndBtnDown'),
    };
    this.btnPlay = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprBtnPlay',
    );
    this.btnPlay.setInteractive();
    this.btnPlay.on('pointerover', () => {
      this.btnPlay.setTexture('sprBtnPlayHover');
      this.sfx.btnOver.play();
    }, this);
    this.btnPlay.on('pointerout', () => {
      this.setTexture('sprBtnPlay');
    });
    this.btnPlay.on('pointerdown', () => {
      this.btnPlay.setTexture('sprBtnPlayDown');
      this.sfx.btnDown.play();
    }, this);
    this.btnPlay.on('pointerup', () => {
      this.btnPlay.setTexture('sprBtnPlay');
      this.scene.start('SceneMain');
    }, this);
    this.title = this.add.text(this.game.config.width * 0.5, 128, 'SKY SHOOTER', {
      fontFamily: 'monospace',
      fontSize: 48,
      fontStyle: 'bold',
      color: '#ffffff',
      align: 'center',
    });
    this.title.setOrigin(0.5);
  }
}
