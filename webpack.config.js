var path = require("path")

var disDirectory = path.resolve(__dirname,"dist")
var srcDirectory = path.resolve(__dirname,"src")

var config = {
	entry: srcDirectory + "/app/index.js",
	output: {
		path: disDirectory + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders:[{
			
				test: /\.js?/,
				include:srcDirectory,
				loader: "babel-loader",
				query:{
					presets:["react","es2015","stage-2"]
				}
			
		}]
	}
}



module.exports = config;