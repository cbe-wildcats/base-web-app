({
	appDir: 'build/work',
	baseUrl: '.',
	dir: 'build/minified',

	name: 'almond',
	include: ['cs!main'],
	stubModules: ['cs'],
	excludeShallow: [
		'coffee-script'
	],

	paths: {
		'almond': 'lib/almond',
		'cs': 'lib/cs',
		'coffee-script': 'lib/coffee-script'
	},

	useStrict: true,

	optimize: 'uglify2',
	preserveLicenseComments: false,
	generateSourceMaps: true,
	uglify2: {
		output: {
			ie_proof: false,
			space_colon: false,
		},
		compress: {
			unsafe: true,
		},
		warnings: true,
	},

	optimizeCss: 'standard',
})
