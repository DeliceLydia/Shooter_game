import Phaser from 'phaser';
import leadershipBoard from '../views/leaderboard';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  // eslint-disable-next-line class-methods-use-this
  init({ score }) {
    localStorage.setItem('userScore', JSON.stringify(score));
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
