module.exports = {
	entry: [
		'./assets/src/js/global-navigation/app.jsx',
		'./assets/src/js/lightbox/index.jsx'
	],
	output: {
		path: __dirname,
		filename: './assets/dist/js/bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules)/
			}
		]
	}
};
