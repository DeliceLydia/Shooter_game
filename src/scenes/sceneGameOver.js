import Phaser from 'phaser';
import Background from '../assets/background.png';
import leadershipBoard from '../views/leadershipBoard';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  // eslint-disable-next-line class-methods-use-this
  init({ score }) {
    localStorage.setItem('userScore', JSON.stringify(score));
  }

  preload() {
    this.load.image('background', Background);
  }

  create() {
    const s = this.add.image(0, 0, 'background');
    s.displayOriginX = 0;
    s.displayOriginY = 0;

    const parentContainer = this.add.dom(0, 0, leadershipBoard());
    parentContainer.displayOriginY = 0;
    parentContainer.displayOriginX = 0;

    this.keys = {
      r: this.input.keyboard.addKey('R'),
    };

    this.keys.r.on(
      'down',
      () => {
        window.location.reload();
      },
      this,
    );
  }
}
