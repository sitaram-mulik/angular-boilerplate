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
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'@typescript-eslint/no-explicit-any': [
			'error'
		]
	}
};
