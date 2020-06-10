import { calcEndAmount } from './utils';

describe('callEndAmount', () => {
  it('returns correct end', () => {
    expect(calcEndAmount(100, 7, 1)).toEqual('107,00');
    expect(calcEndAmount(25000, 4, 24)).toEqual('64.082,60');
  });
});
