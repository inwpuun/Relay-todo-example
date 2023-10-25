// eslint-disable-next-line no-undef
module.exports = {
	env: { browser: true, es2020: true },
	extends: ['react'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
	},
};
