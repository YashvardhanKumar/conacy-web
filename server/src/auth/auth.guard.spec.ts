import { CustomAuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new CustomAuthGuard()).toBeDefined();
  });
});
