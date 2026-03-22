const { getWinner } = require('../gamelogic');

test('rock beats scissors', () => {
    expect(getWinner('rock', 'scissors')).toBe('WIN');
});

test('paper beats rock', () => {
    expect(getWinner('paper', 'rock')).toBe('WIN');
});

test('scissors beats paper', () => {
    expect(getWinner('scissors', 'paper')).toBe('WIN');
});

test('same choice is tie', () => {
    expect(getWinner('rock', 'rock')).toBe('TIE');
});
