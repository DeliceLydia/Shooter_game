import updateScores from '../api/updateScores';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ldQnWhU0zIUqeav3ulen/scores';

global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({ result: 'Leaderboard score created correctly.' }),
}));

beforeEach(() => {
  fetch.mockClear();
});

test('postScores resolves successfully', () => {
  updateScores(url)
    .then(response => response.json())
    .then(data => {
      expect(data.result).toEqual('Leaderboard score created correctly.');
    });
});

test('fetch gets called only once', () => {
  updateScores(url);
  expect(fetch).toHaveBeenCalledTimes(1);
});

test('postScores does not call another url', () => {
  updateScores(url);
  expect(fetch).not.toHaveBeenCalledWith('https://google.com');
});
