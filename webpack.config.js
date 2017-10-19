module.exports = {
	entry: [
		'./assets/src/js/global-navigation/index.jsx',
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
		rules: [
			{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            'transform-class-properties',
                            'transform-es2015-classes',
                            'transform-object-rest-spread'
                        ]
                    }
                }
			}
		]
	}
};
