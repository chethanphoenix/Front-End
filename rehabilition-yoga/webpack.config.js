const resolve = require('path').resolve;

module.exports = () => {
	return {
		context: resolve('src'),
		entry: './bootstrap.js',
		output:{
			filename: "bundle.js",
		},
		module: {
			loaders:[
				{ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
				{
					test: /\.(jpg|png|jpe?g|svg)$/,
					use:[
							'file-loader',
							{
									loader: 'image-webpack-loader',
									options: {
											bypassOnDebug: true
									}
							}
					]
				}
			],
		}
	}	
}
