import validateJSON from '../index';

describe('JSON validator util', () => {
  it('should run tests as expected', () => {
    expect(validateJSON()).toBe('Hello, world!');
  });
});
