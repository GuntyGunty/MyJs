/// <binding ProjectOpened='Watch - Development, Run - Production, Run - Development' />

'use strict';
const
	path = require('path'),
	webpack = require('webpack'),
	BrowserSync = require('browser-sync-webpack-plugin'),
	merge = require('webpack-merge'),
	PostCss = require('postcss-loader'),
	SvgSpritePlugin = require('webpack-svg-sprite-plugin'),
	//SvgSpritePlugin = require('svg-sprite-loader/plugin'),
	ImageLoader = require('image-webpack-loader'),
	//RemoveWebpackPlugin = require('remove-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin'),
	SpritesmithPlugin = require('webpack-spritesmith'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	environment = process.env.NODE_ENV,
	addresses = {
		libraries: {
			JS: [
				'./Scripts/blocks/button-open.js',
			],
		},
		home: {
			JS: './Scripts/script.js',
			CSS: 'style.css'
		}
	};

//let pathsToClean = [
//	path.resolve(__dirname, 'Images/*.*'),
//	path.resolve(__dirname, 'Scripts/*.*'),
//	path.resolve(__dirname, 'Styles/*.*')
//]

switch (environment) {
	case 'production':
		module.exports = () => {
			return main;
		};
		break;
	case 'development':
		module.exports = () => {
			return Object.assign(
				{},
				main
			);
		};
		break;
	default:
		break;
}

const main = {
	devtool: 'source-map',
	context: path.resolve(__dirname, ''),
	entry: {
		home: [addresses.home.JS],
		//additional:  addresses.additional.JS
	},
	output: {
		path: path.resolve(__dirname, ''),
		filename: 'Scripts/main.js',
		publicPath: '/static/'
	},
	plugins: [
		//new BrowserSync({
		//	host: '192.168.1.150',
		//	port: 8082,
		//	proxy: 'http://192.168.1.150:8082/',
		//	files: [path.resolve(__dirname, 'index.html')]
		//}
		//),

		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'Content/img/jpg/*.jpg'),
				to: path.resolve(__dirname, 'Images/jpg/[name].jpg')
			},
			{
				from: path.resolve(__dirname, 'Content/img/png/*.png'),
				to: path.resolve(__dirname, 'Images/png/[name].png')
			},
			{
				from: path.resolve(__dirname, 'Content/img/svg/*.svg'),
				to: path.resolve(__dirname, 'Images/svg/[name].svg')
			}
		]),
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, 'Content/img/png/sprite'),
				glob: '**/*.png'
			},
			target: {
				image: path.resolve(__dirname, 'Images/png/sprite.png'),
				css: path.resolve(__dirname, 'Images/png/sprite.css')
			},
			apiOptions: {
				cssImageRef: "~sprite.png"
			},
			classifier: {
				type: 'normal',
				normalName: 'Images/png/sprite.png',
				retinaName: 'Images/png/retina-sprite.png'
			}
		}),

		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
		//new HtmlWebpackPlugin({
		//	filename: 'Index.html',
		//	template: path.resolve(__dirname, 'Views/Home/Index.cshtml'),
		//	chunks: ['Home'],
		//	inject: false
		//}),
		//new HtmlWebpackPlugin({
		//	filename: 'Index.html',
		//	template: path.resolve(__dirname, 'Views/Additional/Index.cshtml'),
		//	chunks: ['Additional'],
		//	inject: false
		//})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
						plugins: [require('babel-plugin-transform-object-rest-spread')]
					}
				}
			},
			{
				test: /\.html$/,
				loader: "htmllint-loader",
				include: path.resolve(__dirname, './Views'),
				query: {
					config: path.resolve(__dirname, '.htmllintrc'),
					failOnError: true,
					failOnWarning: true
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract(
					{
						fallback: 'style-loader',
						use: [{
							loader: 'css-loader',
							options: {
								importLoaders: true
							}
						},
							'postcss-loader']
					}
				)
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					'file-loader?name=i/[hash].[ext]',
					{
						loader: 'image-webpack-loader',
						query: {
							pngquant: {
								quality: '6',
								speed: 4
							},
							mozjpeg: {
								quality: 3,
								progressive: true,
								optimizationLevel: 3
							}
						}
					}
				]
			},
			{
				test: /\.png$/, loaders: [
					'file-loader?name=i/[hash].[ext]'
				]
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				include: path.resolve(__dirname, 'Content/img/svg'),
				options: {
					extract: true,
					spriteFilename: 'sprite.svg'
				}
			}
		]
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 300
	}
};