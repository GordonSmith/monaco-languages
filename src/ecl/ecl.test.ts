/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import { testTokenization } from '../test/testRunner';

testTokenization('ecl', [
	// Tests
	[{
		line: '/* Block comment. */',
		tokens: [
			{ startIndex: 0, type: 'comment.ecl' }
		]
	}],

	[{
		line: '/* //*/ a',
		tokens: [
			{ startIndex: 0, type: 'comment.ecl' },
			{ startIndex: 7, type: '' },
			{ startIndex: 8, type: 'identifier.ecl' }
		]
	}],

	[{
		line: '// Inline comment.',
		tokens: [
			{ startIndex: 0, type: 'comment.ecl' }
		]
	}],

	[{
		line: '',
		tokens: [

		]
	}],

	[{
		line: 'import {',
		tokens: [
			{ startIndex: 0, type: 'keyword.import.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '  "io"',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'string.ecl' }
		]
	}],

	[{
		line: '}',
		tokens: [
			{ startIndex: 0, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '',
		tokens: [

		]
	}],

	[{
		line: 'type name struct {',
		tokens: [
			{ startIndex: 0, type: 'keyword.type.ecl' },
			{ startIndex: 4, type: '' },
			{ startIndex: 5, type: 'identifier.ecl' },
			{ startIndex: 9, type: '' },
			{ startIndex: 10, type: 'keyword.struct.ecl' },
			{ startIndex: 16, type: '' },
			{ startIndex: 17, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '  firstname string',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 11, type: '' },
			{ startIndex: 12, type: 'keyword.string.ecl' }
		]
	}],

	[{
		line: '  lastname string',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 10, type: '' },
			{ startIndex: 11, type: 'keyword.string.ecl' }
		]
	}],

	[{
		line: '}',
		tokens: [
			{ startIndex: 0, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '',
		tokens: [

		]
	}],

	[{
		line: 'func testTypes() {',
		tokens: [
			{ startIndex: 0, type: 'keyword.func.ecl' },
			{ startIndex: 4, type: '' },
			{ startIndex: 5, type: 'identifier.ecl' },
			{ startIndex: 14, type: 'delimiter.parenthesis.ecl' },
			{ startIndex: 16, type: '' },
			{ startIndex: 17, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '  a int;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.int.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  b uint;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.uint.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  c uintptr;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.uintptr.ecl' },
			{ startIndex: 11, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  d string;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.string.ecl' },
			{ startIndex: 10, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  e byte;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.byte.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  f rune;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.rune.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  g uint8;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.uint8.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  h uint16;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.uint16.ecl' },
			{ startIndex: 10, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  i uint32;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.uint32.ecl' },
			{ startIndex: 10, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  j uint64;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.uint64.ecl' },
			{ startIndex: 10, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  k int8;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.int8.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  l int16;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.int16.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  m int32;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.int32.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  n int64;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.int64.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  o float32;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.float32.ecl' },
			{ startIndex: 11, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  p float64;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.float64.ecl' },
			{ startIndex: 11, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  q complex64;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.complex64.ecl' },
			{ startIndex: 13, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  r complex128;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'keyword.complex128.ecl' },
			{ startIndex: 14, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '}',
		tokens: [
			{ startIndex: 0, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '',
		tokens: [

		]
	}],

	[{
		line: 'func testOperators() {',
		tokens: [
			{ startIndex: 0, type: 'keyword.func.ecl' },
			{ startIndex: 4, type: '' },
			{ startIndex: 5, type: 'identifier.ecl' },
			{ startIndex: 18, type: 'delimiter.parenthesis.ecl' },
			{ startIndex: 20, type: '' },
			{ startIndex: 21, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '  ',
		tokens: [
			{ startIndex: 0, type: '' }
		]
	}],

	[{
		line: '  var a;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.var.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  var b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.var.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  ',
		tokens: [
			{ startIndex: 0, type: '' }
		]
	}],

	[{
		line: '  a + b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a - b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a * b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a / b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a % b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a & b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a | b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a ^ b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a << b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a >> b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a &^ b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a += b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a -= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a *= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a /= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a %= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a &= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a |= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a ^= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a <<= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 7, type: '' },
			{ startIndex: 8, type: 'identifier.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a >>= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 7, type: '' },
			{ startIndex: 8, type: 'identifier.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a &^= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 7, type: '' },
			{ startIndex: 8, type: 'identifier.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a && b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a || b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a <- b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a++;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  b--;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a == b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a < b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.angle.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a > b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.angle.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a = b; ',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' },
			{ startIndex: 8, type: '' }
		]
	}],

	[{
		line: '  !a;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'delimiter.ecl' },
			{ startIndex: 3, type: 'identifier.ecl' },
			{ startIndex: 4, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a != b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a <= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a >= b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a := b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a...;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  (a)',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'delimiter.parenthesis.ecl' },
			{ startIndex: 3, type: 'identifier.ecl' },
			{ startIndex: 4, type: 'delimiter.parenthesis.ecl' }
		]
	}],

	[{
		line: '  [a]',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'delimiter.square.ecl' },
			{ startIndex: 3, type: 'identifier.ecl' },
			{ startIndex: 4, type: 'delimiter.square.ecl' }
		]
	}],

	[{
		line: '  a.b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: 'delimiter.ecl' },
			{ startIndex: 4, type: 'identifier.ecl' },
			{ startIndex: 5, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a, b;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: 'delimiter.ecl' },
			{ startIndex: 4, type: '' },
			{ startIndex: 5, type: 'identifier.ecl' },
			{ startIndex: 6, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  a : b; ',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'identifier.ecl' },
			{ startIndex: 3, type: '' },
			{ startIndex: 4, type: 'delimiter.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' },
			{ startIndex: 8, type: '' }
		]
	}],

	[{
		line: '}',
		tokens: [
			{ startIndex: 0, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '',
		tokens: [

		]
	}],

	[{
		line: 'func keywords() {',
		tokens: [
			{ startIndex: 0, type: 'keyword.func.ecl' },
			{ startIndex: 4, type: '' },
			{ startIndex: 5, type: 'identifier.ecl' },
			{ startIndex: 13, type: 'delimiter.parenthesis.ecl' },
			{ startIndex: 15, type: '' },
			{ startIndex: 16, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '  ',
		tokens: [
			{ startIndex: 0, type: '' }
		]
	}],

	[{
		line: '  var a;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.var.ecl' },
			{ startIndex: 5, type: '' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  break;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.break.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  switch(a) {',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.switch.ecl' },
			{ startIndex: 8, type: 'delimiter.parenthesis.ecl' },
			{ startIndex: 9, type: 'identifier.ecl' },
			{ startIndex: 10, type: 'delimiter.parenthesis.ecl' },
			{ startIndex: 11, type: '' },
			{ startIndex: 12, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '    case 1:',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 4, type: 'keyword.case.ecl' },
			{ startIndex: 8, type: '' },
			{ startIndex: 9, type: 'number.ecl' },
			{ startIndex: 10, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '      fallthrough;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 6, type: 'keyword.fallthrough.ecl' },
			{ startIndex: 17, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '    default:',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 4, type: 'keyword.default.ecl' },
			{ startIndex: 11, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '      break;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 6, type: 'keyword.break.ecl' },
			{ startIndex: 11, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  }',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '  ',
		tokens: [
			{ startIndex: 0, type: '' }
		]
	}],

	[{
		line: '  chan;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.chan.ecl' },
			{ startIndex: 6, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  const;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.const.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  continue;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.continue.ecl' },
			{ startIndex: 10, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  defer;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.defer.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  if (a)',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.if.ecl' },
			{ startIndex: 4, type: '' },
			{ startIndex: 5, type: 'delimiter.parenthesis.ecl' },
			{ startIndex: 6, type: 'identifier.ecl' },
			{ startIndex: 7, type: 'delimiter.parenthesis.ecl' }
		]
	}],

	[{
		line: '    return;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 4, type: 'keyword.return.ecl' },
			{ startIndex: 10, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '  else',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 2, type: 'keyword.else.ecl' }
		]
	}],

	[{
		line: '    return;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 4, type: 'keyword.return.ecl' },
			{ startIndex: 10, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   for (i = 0; i < 10; i++);',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.for.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'delimiter.parenthesis.ecl' },
			{ startIndex: 8, type: 'identifier.ecl' },
			{ startIndex: 9, type: '' },
			{ startIndex: 10, type: 'delimiter.ecl' },
			{ startIndex: 11, type: '' },
			{ startIndex: 12, type: 'number.ecl' },
			{ startIndex: 13, type: 'delimiter.ecl' },
			{ startIndex: 14, type: '' },
			{ startIndex: 15, type: 'identifier.ecl' },
			{ startIndex: 16, type: '' },
			{ startIndex: 17, type: 'delimiter.angle.ecl' },
			{ startIndex: 18, type: '' },
			{ startIndex: 19, type: 'number.ecl' },
			{ startIndex: 21, type: 'delimiter.ecl' },
			{ startIndex: 22, type: '' },
			{ startIndex: 23, type: 'identifier.ecl' },
			{ startIndex: 24, type: 'delimiter.ecl' },
			{ startIndex: 26, type: 'delimiter.parenthesis.ecl' },
			{ startIndex: 27, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   ecl;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.ecl.ecl' },
			{ startIndex: 5, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   eclto;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.eclto.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   interface;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.interface.ecl' },
			{ startIndex: 12, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   map;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.map.ecl' },
			{ startIndex: 6, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   package;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.package.ecl' },
			{ startIndex: 10, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   range;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.range.ecl' },
			{ startIndex: 8, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   return;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.return.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   select;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.select.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   struct;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.struct.ecl' },
			{ startIndex: 9, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   type;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.type.ecl' },
			{ startIndex: 7, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   ',
		tokens: [
			{ startIndex: 0, type: '' }
		]
	}],

	[{
		line: '   var x = true;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.var.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: '' },
			{ startIndex: 9, type: 'delimiter.ecl' },
			{ startIndex: 10, type: '' },
			{ startIndex: 11, type: 'keyword.true.ecl' },
			{ startIndex: 15, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   var y = false;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.var.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: '' },
			{ startIndex: 9, type: 'delimiter.ecl' },
			{ startIndex: 10, type: '' },
			{ startIndex: 11, type: 'keyword.false.ecl' },
			{ startIndex: 16, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '   var z = nil;',
		tokens: [
			{ startIndex: 0, type: '' },
			{ startIndex: 3, type: 'keyword.var.ecl' },
			{ startIndex: 6, type: '' },
			{ startIndex: 7, type: 'identifier.ecl' },
			{ startIndex: 8, type: '' },
			{ startIndex: 9, type: 'delimiter.ecl' },
			{ startIndex: 10, type: '' },
			{ startIndex: 11, type: 'keyword.nil.ecl' },
			{ startIndex: 14, type: 'delimiter.ecl' }
		]
	}],

	[{
		line: '}',
		tokens: [
			{ startIndex: 0, type: 'delimiter.curly.ecl' }
		]
	}],

	[{
		line: '`Hello world() ""`',
		tokens: [
			{ startIndex: 0, type: 'string.ecl' }
		]
	}]
]);
