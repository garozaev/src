import { strict as assert } from 'node:assert';
import capitalize from '../capitalize.js';

assert.deepEqual(capitalize(''), '');
assert.deepEqual(capitalize('hello'), 'Hello');
console.log('All tests passed!');