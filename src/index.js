import initializeGame from './views/initialize';
import ShooterGame from './scenes/game';

const user = JSON.parse(localStorage.getItem('playerName'));
if (!user) {
  window.addEventListener('DOMContentLoaded', initializeGame);
} else {
  ShooterGame();
}
