import Phaser from 'phaser';
import SceneMainMenu from '../scenes/sceneMainMenu';
import SceneMain from '../scenes/sceneMain';
import SceneGameOver from '../scenes/sceneGameOver';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
    },
  },
  scene: [SceneMainMenu, SceneMain, SceneGameOver],

  parent: '#container',
  dom: {
    createContainer: true,
  },

  autoCenter: true,
};

const game = new Phaser.Game(config);

export default game;
