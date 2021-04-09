import { API } from '../constant';

const sorter = (object) => object.sort((a, b) => (a.score > b.score ? -1 : 1));

const getScores = async () => {
  try {
    const res = await fetch(`${API}/games/e6FswbwKCQlYuZ8I567k/scores`, {
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    });
    const { result } = await res.json();
    const sortedResult = sorter(result);

    return sortedResult.slice(0, 9);
  } catch (error) {
    throw new Error(error);
  }
};

export default getScores;
