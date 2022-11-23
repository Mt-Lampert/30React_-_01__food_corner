import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import  matchers from '@testing-library/jest-dom/matchers'

// extend Vitest's expect matchers with react testing-library matchers
expect.extend(matchers);

// runs a cleanup after each spec example
afterEach(() => {
  cleanup()
})