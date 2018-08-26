const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './js/script.js', //plik wejsciowy
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'out.js' //plik wyjściowy - nie wskazujemy jego sciezki w htmlu / sam sie tworzy w chmurze i podpina do htmla / nie mozna go podgladnac
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['env', 'stage-2', 'react']
					}
				}
      },
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
      },
			{
				test: /\.(png|jpg|svg|gif|webp)/,
				use: 'file-loader'
      }
    ]
	},
	plugins: [
    new HtmlWebpackPlugin({
			template: './index.html' //wskazujemy ścieżkę naszego pliku HTML
		})
  ],
	devServer: {
		historyApiFallback: true
	}
};
