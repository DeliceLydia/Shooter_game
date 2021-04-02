import initializeGame from '../views/initialize';
import shooter_game from '../src/js/Game';


const user = JSON.parse(localStorage.getItem('playerName'));
if (!user) {
  window.addEventListener('DOMContentLoaded', initializeGame);
} else {
  shooter_game();
}

