var path = require("path");

module.exports = {
    devtool: 'inline-source-map',

    entry: './src/app.ts',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js',
        publicPath: './'
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                {
                   loader: "ts-loader",
                }
            ],
            exclude: /node_modules/,
        }],
    },

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },

    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    }
}