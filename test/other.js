/*!
 * strip-comments <https://github.com/jonschlinkert/strip-comments>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT license.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const strip = require('../index');

const fixture = path.join.bind(path, __dirname, 'fixtures/other');
const expected = path.join.bind(path, __dirname, 'expected/other');
const read = src => fs.readFileSync(src, 'utf-8').replace(/\r*\n/g, '\n');;

describe('other languages', () => {
  it('should strip Ada comments', () => {
    const name = 'ada';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name, preserveNewlines: true });
    assert.strictEqual(actual, output);
  });

  it('should strip APL comments', () => {
    const name = 'apl';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name, preserveNewlines: true });
    assert.strictEqual(actual, output);
  });

  it('should strip C comments', () => {
    const name = 'c';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name, preserveNewlines: true });
    assert.strictEqual(actual, output);
  });

  it('should strip AppleScript comments', () => {
    const name = 'AppleScript';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip Haskell comments', () => {
    const name = 'haskell';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip Lua comments', () => {
    const name = 'lua';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip MATLAB comments', () => {
    const name = 'matlab';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip OCaml comments', () => {
    const name = 'ocaml';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip Pascal comments', () => {
    const name = 'pascal';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip PHP comments', () => {
    const name = 'php';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip Perl comments', () => {
    const name = 'perl';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip Python comments', () => {
    const name = 'python';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip Ruby comments', () => {
    const name = 'ruby';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip shebang comments', () => {
    const name = 'shebang';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip SQL comments', () => {
    const name = 'sql';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip Swift comments', () => {
    const name = 'swift';
    const input = read(fixture(`${name}.txt`));
    const output = read(expected(`${name}.txt`));
    const actual = strip(input, { language: name });
    assert.strictEqual(actual, output);
  });

  it('should strip combined JavaScript + CSS code: simple', () => {
    const input = read(fixture('js-and-css-in-html-1.html'));
    const output = read(expected('js-and-css-in-html-1.html'));
    const actual = strip(input);
    assert.strictEqual(actual, output);
  });

  it('should strip combined JavaScript + CSS code: Style block with attributes', () => {
    const input = read(fixture('js-and-css-in-html-2.html'));
    const output = read(expected('js-and-css-in-html-2.html'));
    const actual = strip(input);
    assert.strictEqual(actual, output);
  });

  it('should strip combined JavaScript + CSS code: skipping line comments in CSS', () => {
    const input = read(fixture('js-and-css-in-html-3.html'));
    const output = read(expected('js-and-css-in-html-3.html'));
    const actual = strip(input);
    assert.strictEqual(actual, output);
  });

  it('should leave combined JavaScript + CSS code without comments', () => {
    const input = read(fixture('js-and-css-in-html-4.html'));
    const output = input;
    const actual = strip(input);
    assert.strictEqual(actual, output);
  });
});
