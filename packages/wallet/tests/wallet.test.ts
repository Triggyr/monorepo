import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';

vi.mock('axios');

describe('Wallet', () => {
   it('should pass', () => {
      expect(1).toEqual(1);
   });
});
