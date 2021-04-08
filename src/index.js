// eslint-disable-next-line import/no-unresolved
import './stylesheets/style.css';
import Phaser from 'phaser';
import SceneMainMenu from './scenes/sceneMainMenu';
import SceneMain from './scenes/sceneMain';
import SceneGameOver from './scenes/sceneGameOver';
import LeaderBoardScene from './scenes/leaderboardScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [SceneMainMenu, SceneMain, SceneGameOver, LeaderBoardScene],

  parent: '#container',
  dom: {
    createContainer: true,
  },

  autoCenter: true,
  pixelArt: true,
  roundPixels: true,
};
export default new Phaser.Game(config);
