/* eslint-disable no-alert */

const isFieldValid = field => field.search(/^[a-h][1-8]$/) === 0;

const firstLetterKeyCode = 97;

const fieldToPair = field => {
  const x = field.charCodeAt(0) - firstLetterKeyCode;
  const y = Number(field[1]) - 1;
  return [x, y];
};

const pairToField = ([x, y]) => {
  const firstLetter = String.fromCharCode(x + firstLetterKeyCode);
  const secondLetter = (y + 1).toString();
  return `${firstLetter}${secondLetter}`;
};

const pairsToFiels = pairs => pairs.map(pairToField).sort();

const getPosibleMoviesPair = ([x, y]) => {
  const boardSize = 7;
  // массив всех ходов
  const allMovies = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];
  const movies = allMovies.map(([mX, mY]) => [x + mX, y + mY]);
  // оставляем возможные ходы
  const posibleMovies = movies.filter(
    ([mX, mY]) => mX >= 0 && mX <= boardSize && mY >= 0 && mY <= boardSize
  );
  return posibleMovies;
};

export const getPosibleMovies = field => {
  const pair = fieldToPair(field);
  const posiblePairs = getPosibleMoviesPair(pair);
  const posibleMovies = pairsToFiels(posiblePairs);
  return posibleMovies;
};

export default () => {
  const fieldEl = document.getElementById('field');

  const form = document.getElementById('mainForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const field = fieldEl.value.trim().toLowerCase();
    if (isFieldValid(field)) {
      const posibleMovies = getPosibleMovies(field);
      const result = posibleMovies.map(item => item.toUpperCase()).join(' ');
      alert(`Возможные варианты хода: ${result}`);
    } else {
      alert('Введено некорректное значение начальной позиции коня');
    }
  });
};
