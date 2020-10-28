module.exports = {
	entry: './src/main.js',
	output: {
		path: 'build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.(png|jpg)$/,
				// if an image is > 20kb, a direct URL is create to the image asset
				loader: 'url-loader?limit=20000'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
	 ]
	}
};