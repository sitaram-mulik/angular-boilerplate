/* eslint-disable */

module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'tsconfigRootDir': __dirname,
		'project': ['./tsconfig.json']
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'@typescript-eslint/no-explicit-any': [
			'error'
		],
		'@typescript-eslint/explicit-function-return-type': [
			'error'
		],
		'max-lines': [
			'error',
			400
		],
		'max-lines-per-function': [
			'error',
			75
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				'selector': ['variableLike', 'memberLike', 'property', 'method'],
				'format': ['strictCamelCase']
			},
			{
				'selector': ['typeLike', 'typeProperty'],
				'format': ['StrictPascalCase']
			},
			{
				'selector': ['enumMember', 'typeProperty'],
				'format': ['UPPER_CASE']
			},
			{
				'selector': ['variable'],
				'modifiers': ['global', 'const'],
				'types': ['number', 'string'],
				'format': ['UPPER_CASE']
			}
		],
		'@typescript-eslint/no-inferrable-types': 'off'
	}
};
