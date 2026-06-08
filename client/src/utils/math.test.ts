import { describe, it, expect } from 'vitest';
import { add } from '@utils/math';

describe('add function', () => {
  it('should correctly add two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
