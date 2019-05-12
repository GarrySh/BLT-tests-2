const isFieldValid = field => field.search(/^[a-h][1-8]$/) === 0;

const firstLetterKeyCode = 97;

const fieldToPair = field => {
  const x = field.charCodeAt(0) - firstLetterKeyCode;
  const y = Number(field[1]) - 1;
  return [x, y];
};

const pairToField = pair => {
  const [x, y] = pair;
  const firstLetter = String.fromCharCode(x + firstLetterKeyCode);
  const secondLetter = (y + 1).toString();
  return `${firstLetter}${secondLetter}`;
};

const getPosibleMovies = pair => {
  const boardSize = 7;
  // массив всех ходов
  const allMovies = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
  const movies = allMovies.map(([x, y]) => [x + pair[0], y + pair[1]]);
  // оставляем возможные ходы
  const posibleMovies = movies.filter(([x, y]) => x > 0 && x < boardSize && y > 0 && y < boardSize);
  return posibleMovies;
};

export default () => {};
