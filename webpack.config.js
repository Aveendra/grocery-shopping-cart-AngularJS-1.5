var path = require('path');
var embedFileSize = 65536;
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname)) + '/app/!html'
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    cacheDirectory: true
                }
            },
            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?url=false!sass-loader')
            },
            {
                test: /\.svg$/, 
                loader: `url?limit=${embedFileSize}&mimetype=image/svg+xml`
            },
            {
                test: /\.png$/, 
                loader: `url?limit=${embedFileSize}&mimetype=image/png`
            },
            {
                test: /\.jpg$/, 
                loader: `url?limit=${embedFileSize}&mimetype=image/jpeg`
            },
            {
                test: /\.gif$/, 
                loader: `url?limit=${embedFileSize}&mimetype=image/gif`
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/style.css")
    ],
    context: __dirname,
    entry: "./app/index.js",
    output: {
        path: path.join(__dirname, "js"),
        filename: "bundle.js"
    },
    devtool: "source-map"
}
