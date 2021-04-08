// eslint-disable-next-line import/no-unresolved
import './stylesheets/style.css';
import initializeGame from './views/initialize';
import game from './models/game';

const user = JSON.parse(localStorage.getItem('playerName'));
if (!user) {
  window.addEventListener('DOMContentLoaded', initializeGame);
} else {
  game();
}
