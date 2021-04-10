import { API } from '../constant';
import getScores from './getScores';

const updateScores = async ({ user, score }) => {
  try {
    const res = await fetch(`${API}/games/CC3mqEjnBUCB3jkSJNI5/scores`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        user,
        score,
      }),
    });
    await res.json();

    return getScores();
  } catch (error) {
    throw new Error(error);
  }
};

export default updateScores;
