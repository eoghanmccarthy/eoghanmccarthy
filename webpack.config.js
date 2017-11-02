const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: [
        './assets/src/js/global-navigation/index.jsx',
        './assets/src/js/lightbox/index.jsx',
        './assets/src/scss/main.scss'
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
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        { loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                config: {
                                    path: './postcss.config.js'
                                },
                                plugins: (loader) => [
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: './assets/dist/media/'
                        }  
                    }
                ]
            }
		]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './assets/dist/css/main.css',
            disable: false,
            allChunks: true
        }),
    ]
    // plugins: [
    //     new UglifyJSPlugin()
    // ]
};
