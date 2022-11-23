import Daemon from '../Daemon';
import Magician from '../Magician';

test('под дурманом', () => {
  const Rumpel = new Magician('Rumpel');
  Rumpel.attack = 100;
  Rumpel.stoned = true;
  const result = Rumpel.attack;
  expect(result(2)).toEqual(85);
});

test('без дурмана', () => {
  const Bobin = new Daemon('Bobin');
  Bobin.attack = 100;
  const result = Bobin.attack;
  expect(result(2)).toEqual(90);
});