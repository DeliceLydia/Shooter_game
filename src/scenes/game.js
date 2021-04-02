import Phaser from 'phaser';
// import SceneMainMenu from './SceneMainMenu';
// import SceneMain from './SceneMain';
// import SceneGameOver from './SceneGameOver';

const shooterGame = () => {
  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 'black',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { x: 0, y: 0 },
      },
    },
    // scene: [
    //   SceneMainMenu,
    //   SceneMain,
    //   SceneGameOver
    // ],

    parent: '#container',
    dom: {
      createContainer: true,
    },

    autoCenter: true,
    pixelArt: true,
    roundPixels: true,
  };
  return new Phaser.Game(config);
};

export default shooterGame;
