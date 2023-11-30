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
		'/node_modules/'
	],
	testPathIgnorePatterns: [
		'__testUtils__'
	],
 
	clearMocks: true,
	restoreMocks: true,
	testMatch: [
		'**/*.spec.(js|ts)'
	],
	roots: [
		'<rootDir>/src'
	]
}