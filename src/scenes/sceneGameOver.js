import Phaser from 'phaser';
import leadershipBoard from '../views/leadershipBoard';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
    this.isGameOver = false;
    this.score = 1;
    this.scoreText = null;
  }

  init({ score }) {
    localStorage.setItem('userScore', JSON.stringify(score));
  }

  create() {
    this.init();
    this.drawScore();
  }

  gameOver() {
    this.isGameOver = true;
    this.scene.start('SceneGameOver', { score: this.score });
  }

  // eslint-disable-next-line class-methods-use-this
  drawScore() {
    const text = 'Score: 1';
    const style = {
      font: '40px Roboto',
      fill: '#FFFFFF',
      align: 'center',
      shadow: {
        offsetX: 2,
        offsetY: 2,
        color: '#000',
        blur: 2,
        fill: true,
      },
    };
    this.scoreText = this.add.text(0, 0, text, style);
  }
  }
}
