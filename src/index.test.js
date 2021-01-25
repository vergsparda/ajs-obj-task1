import orderByProps from './index';

test('order return check', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const order = ['name', 'level', 'health'];
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'health', value: 10 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
  ];

  expect(orderByProps(obj, order)).toEqual(result);
  expect(orderByProps(obj, order)).not.toBe(result);
});

test('not ordered array return check in aplhabetical order', () => {
  const obj = {
    a: 'a',
    health: 22,
    attack: 40,
    b: 'b',
    defense: 30,
  };
  const order = [];
  const result = [
    { key: 'a', value: 'a' },
    { key: 'attack', value: 40 },
    { key: 'b', value: 'b' },
    { key: 'defense', value: 30 },
    { key: 'health', value: 22 },
  ];
  expect(orderByProps(obj, order)).toEqual(result);
  expect(orderByProps(obj, order)).not.toBe(result);
});

test('return empty array check', () => {
  const obj = [];
  const order = [];
  const result = [];

  expect(orderByProps(obj, order)).toEqual(result);
  expect(orderByProps(obj, order)).not.toBe(result);
});
