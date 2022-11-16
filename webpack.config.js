const path = require("path");
MiniCssExtractPlugin = require("mini-css-extract-plugin");
BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
	context: __dirname,
	entry: { frontend_v026: ["./src/index.js", "./src/sass/style.scss"] },
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle_v026.js",
		clean: true,
	},
	mode: "development",
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				enforce: "pre",
				exclude: /node_modules/,
				test: /\.jsx$/,
				loader: "eslint-loader",
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].css" }),
		new BrowserSyncPlugin({
			files: "**/*.php",
			injectChanges: true,
			proxy: "http://pluriversidadnomade.local",
		}),
	],
};
