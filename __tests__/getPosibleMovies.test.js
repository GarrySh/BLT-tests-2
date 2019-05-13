import { getPosibleMovies } from '../src/app';

test('empty value', () => {
  expect(getPosibleMovies('')).toEqual([]);
});

test('central positions', () => {
  expect(getPosibleMovies('d4')).toEqual(['b3', 'b5', 'c2', 'c6', 'e2', 'e6', 'f3', 'f5']);
  expect(getPosibleMovies('c3')).toEqual(['a2', 'a4', 'b1', 'b5', 'd1', 'd5', 'e2', 'e4']);
  expect(getPosibleMovies('f3')).toEqual(['d2', 'd4', 'e1', 'e5', 'g1', 'g5', 'h2', 'h4']);
  expect(getPosibleMovies('f6')).toEqual(['d5', 'd7', 'e4', 'e8', 'g4', 'g8', 'h5', 'h7']);
});

test('side positions', () => {
  expect(getPosibleMovies('a5')).toEqual(['b3', 'b7', 'c4', 'c6']);
  expect(getPosibleMovies('b4')).toEqual(['a2', 'a6', 'c2', 'c6', 'd3', 'd5']);
  expect(getPosibleMovies('g6')).toEqual(['e5', 'e7', 'f4', 'f8', 'h4', 'h8']);
  expect(getPosibleMovies('g1')).toEqual(['e2', 'f3', 'h3']);
});

test('angle positions', () => {
  expect(getPosibleMovies('a1')).toEqual(['b3', 'c2']);
  expect(getPosibleMovies('a8')).toEqual(['b6', 'c7']);
  expect(getPosibleMovies('h8')).toEqual(['f7', 'g6']);
  expect(getPosibleMovies('h1')).toEqual(['f2', 'g3']);
});
