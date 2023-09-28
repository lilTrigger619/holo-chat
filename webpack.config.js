const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	module:{
		rules:[
			{
			test: /\.jsx?$/,
				exclude: /node_modules/,
				use:"babel-loader" 
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "ts-loader"
			},
			{
				test:/\.css$/i,
				use: ["style-loader", "css-loader"],
			}
		],
	},

	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/')
    }
  },
}
