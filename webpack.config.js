module.exports = {
	entry: "./src/index.tsx",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"],
	},
	module:{
		rules:[
			{
			test: /\.tsx?$/,
				exclude: /node_modules/,
				use:[
					{
						loader: "babel-loader",
						options:{
							presets:[
								"@babel/preset-env",
								"@babel/preset-react",
								"@babel/preset-typescript",
							],
						},
					},
					"ts-loader"
				]
			},
			{
				test:/\.css$/i,
				use: ["style-loader", "css-loader"],
			}
		],
	}
}
