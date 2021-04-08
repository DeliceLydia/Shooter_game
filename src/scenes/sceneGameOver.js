import Phaser from 'phaser';
import { url, postScores } from '../api/leaderboardApi';
import SprBtnRestartHover from '../assets/sprBtnRestartHover.png';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'SceneGameOver' });
  }

  init(data) {
    this.finalScore = data.score;
  }

  preload() {
    this.load.image('sprBtnRestartHover', SprBtnRestartHover);
  }

  create() {
    this.add
      .text(this.scale.width * 0.5, this.scale.height * 0.1, 'Game Over', {
        fontSize: 48,
        color: '#f00',
      })
      .setOrigin();
    this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.2,
        `Final score: ${this.finalScore}`,
        { fontSize: 24 },
      )
      .setOrigin();
    // reset button
    const resetButton = this.add
      .image(
        this.scale.width * 0.5,
        this.scale.height * 0.5,
        'sprBtnRestartHover',
      )
      .setScale(0.5);
    resetButton.setInteractive({ useHandCursor: true });
    resetButton.on('pointerdown', () => {
      this.scene.start('SceneMain');
    });
    // submit score
    const form = document.createElement('form');
    form.innerHTML = `
      <input type="text" name="name" placeholder="Enter your name" required minLength="3" maxLength="10" autofocus/>
      <button type="submit">Submit</button>
    `;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.querySelector('input[name="name"]').value;
      postScores(user, this.finalScore, url)
        .then(() => {
          this.scene.start('leaderboard');
        })
        .catch(() => {
          this.add
            .text(
              this.scale.width * 0.5,
              this.scale.height * 0.8,
              'Network Error. Please try again later.',
            )
            .setOrigin();
        });
    });
    this.add.dom(this.scale.width * 0.5, this.scale.height * 0.3, form);
  }
}
