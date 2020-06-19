import { UserPrefixPipe } from './user-prefix.pipe';

describe('UserPrefixPipe', () => {
  it('create an instance', () => {
    const pipe = new UserPrefixPipe();
    expect(pipe).toBeTruthy();
  });
});
