const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Chunk } = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        main: ['babel-polyfill', path.resolve(__dirname,'src/index.js')],
        discount : ['babel-polyfill',path.resolve(__dirname,'src/discount.js')],
        search: ['babel-polyfill',path.resolve(__dirname,'src/search.js')]
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        port:3000,
        open: true,
        hot: true,
        watchContentBase: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /nodeModules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        },
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options : {
                    name: '[name].[ext]',
                    outputPath: 'img',
                    publicPath: 'img'
                }
        }]
        }
    ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'F2P',
        filename: 'index.html',
        template: path.resolve(__dirname,'src/temp.html'),
        chunks: ['main']
    }),
    new HtmlWebpackPlugin({
        title: 'F2P',
        filename: 'discount.html',
        template: path.resolve(__dirname,'src/discount.html'),
        chunks: ['discount']
    }),
    new HtmlWebpackPlugin({
        title: 'F2P',
        filename: 'search.html',
        template: path.resolve(__dirname,'src/discount.html'),
        chunks: ['search']
    })

    ]
}