module.exports = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^(\\.\\.?\\/.+)\\.js$': '$1'
	},
	moduleFileExtensions: ['js', 'ts'],
	transform: {
        '\\.[jt]sx?$': 'ts-jest'
    },
    extensionsToTreatAsEsm: ['.ts'],
	setupFiles: [],
	transformIgnorePatterns: [
		'/node_modules/',
		'/public/'
	],
	testPathIgnorePatterns: [
		'__testUtils__'
	],
	maxWorkers: 1,
	clearMocks: true,
	restoreMocks: true,
	testMatch: [
		'**/*.spec.(js|ts)'
	],
	roots: [
		'<rootDir>/src'
	]
}