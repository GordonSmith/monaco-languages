/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;

export const conf: IRichLanguageConfiguration = {
	"comments": {
		// symbol used for single line comment. Remove this entry if your language does not support line comments
		"lineComment": "//",
		// symbols used for start and end a block comment. Remove this entry if your language does not support block comments
		"blockComment": ["/*", "*/"]
	},
	// symbols used as brackets
	"brackets": [
		["{", "}"],
		["[", "]"],
		["(", ")"]
	],
	// symbols that are auto closed when typing
	"autoClosingPairs": [
		{ open: "{", close: "}" },
		{ open: "[", close: "]" },
		{ open: "(", close: ")" },
		{ open: "'", close: "'" }
	],
	// symbols that that can be used to surround a selection
	"surroundingPairs": [
		{ open: "{", close: "}" },
		{ open: "[", close: "]" },
		{ open: "(", close: ")" },
		{ open: "\"", close: "\"" },
		{ open: "'", close: "'" },
		{ open: "function", close: "end;" },
		{ open: "Function", close: "End;" },
		{ open: "FUNCTION", close: "END;" },
		{ open: "module", close: "end;" },
		{ open: "Module", close: "End;" },
		{ open: "MODULE", close: "END;" },
		{ open: "interface", close: "end;" },
		{ open: "Interface", close: "End;" },
		{ open: "INTERFACE", close: "END;" },
		{ open: "transform", close: "end;" },
		{ open: "Transform", close: "End;" },
		{ open: "TRANSFORM", close: "END;" },
		{ open: "record", close: "end;" },
		{ open: "Record", close: "End;" },
		{ open: "RECORD", close: "END;" },
		{ open: "beginc++", close: "endc++;" },
		{ open: "Beginc++", close: "Endc++;" },
		{ open: "BEGINC++", close: "ENDC++;" },
		{ open: "macro", close: "endmacro;" },
		{ open: "MACRO", close: "ENDMACRO;" },
		{ open: "Macro", close: "Endmacro;" },
		{ open: "functionmacro", close: "endmacro;" },
		{ open: "Functionmacro", close: "Endmacro;" },
		{ open: "FUNCTIONMACRO", close: "ENDMACRO;" }
	]
};

export const language = <ILanguage>{

	defaultToken: '',
	tokenPostfix: '.ecl',

	keywords: [
		'break',
		'case',
		'chan',
		'const',
		'continue',
		'default',
		'defer',
		'else',
		'fallthrough',
		'for',
		'func',
		'go',
		'goto',
		'if',
		'import',
		'interface',
		'map',
		'package',
		'range',
		'return',
		'select',
		'struct',
		'switch',
		'type',
		'var',
		'bool',
		'true',
		'false',
		'uint8',
		'uint16',
		'uint32',
		'uint64',
		'int8',
		'int16',
		'int32',
		'int64',
		'float32',
		'float64',
		'complex64',
		'complex128',
		'byte',
		'rune',
		'uint',
		'int',
		'uintptr',
		'string',
		'nil',
	],

	operators: [
		'+', '-', '*', '/', '%', '&', '|', '^', '<<', '>>', '&^',
		'+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '&^=',
		'&&', '||', '<-', '++', '--', '==', '<', '>', '=', '!', '!=', '<=', '>=', ':=', '...',
		'(', ')', '', ']', '{', '}', ',', ';', '.', ':'
	],

	// we include these common regular expressions
	symbols: /[=><!~?:&|+\-*\/\^%]+/,
	escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,


	// The main tokenizer for our languages
	tokenizer: {
		root: [
			// identifiers and keywords
			[/[a-zA-Z_]\w*/, {
				cases: {
					'@keywords': { token: 'keyword.$0' },
					'@default': 'identifier'
				}
			}],

			// whitespace
			{ include: '@whitespace' },

			// [[ attributes ]].
			[/\[\[.*\]\]/, 'annotation'],

			// Preprocessor directive
			[/^\s*#\w+/, 'keyword'],

			// delimiters and operators
			[/[{}()\[\]]/, '@brackets'],
			[/[<>](?!@symbols)/, '@brackets'],
			[/@symbols/, {
				cases: {
					'@operators': 'delimiter',
					'@default': ''
				}
			}],

			// numbers
			[/\d*\d+[eE]([\-+]?\d+)?/, 'number.float'],
			[/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
			[/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex'],
			[/0[0-7']*[0-7]/, 'number.octal'],
			[/0[bB][0-1']*[0-1]/, 'number.binary'],
			[/\d[\d']*/, 'number'],
			[/\d/, 'number'],

			// delimiter: after number because of .\d floats
			[/[;,.]/, 'delimiter'],

			// strings
			[/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
			[/"/, 'string', '@string'],
			[/`/, "string", "@rawstring"],

			// characters
			[/'[^\\']'/, 'string'],
			[/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
			[/'/, 'string.invalid']
		],

		whitespace: [
			[/[ \t\r\n]+/, ''],
			[/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
			[/\/\*/, 'comment', '@comment'],
			[/\/\/.*$/, 'comment'],
		],

		comment: [
			[/[^\/*]+/, 'comment'],
			// [/\/\*/, 'comment', '@push' ],    // nested comment not allowed :-(
			// [/\/\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/
			[/\*\//, 'comment', '@pop'],
			[/[\/*]/, 'comment']
		],
		//Identical copy of comment above, except for the addition of .doc
		doccomment: [
			[/[^\/*]+/, 'comment.doc'],
			// [/\/\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(
			[/\/\*/, 'comment.doc.invalid'],
			[/\*\//, 'comment.doc', '@pop'],
			[/[\/*]/, 'comment.doc']
		],

		string: [
			[/[^\\"]+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/"/, 'string', '@pop']
		],

		rawstring: [
			[/[^\`]/, "string"],
			[/`/, "string", "@pop"]
		],
	},
};
