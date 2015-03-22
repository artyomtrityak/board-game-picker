var webpack = require('webpack'),
    path = require('path');

//TODO: just get all folder names from bower_components folder
var VENDOR_LIBS = [
    'react',
    'react-router',
    'flux',
    'immutable',
    'jquery',
    'bluebird'
];

module.exports = {
    entry: {
        app: './app/javascript/routes.jsx',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, '/app/build'),
        filename: "bundle.js",
        publicPath: 'http://localhost:8899/app/build/',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules', 'bower_components'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: /node_modules|bower_components/
            }
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */"vendor", /* filename= */"vendor.bundle.js"
        )
    ],
    devtool: 'source-map' // source maps with debugging, slow
    //devtool: 'eval-source-map'
};