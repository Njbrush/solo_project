const path = require('path');

module.exports = {
    // entry: 'client/index.js',
    devServer: {
        liveReload: true,
        watchContentBase: true,
        publicPath: path.resolve(__dirname,'/build/'),
        // contentBase: path.join(__dirname, 'dist'),
        // compress: true,
        port: 8080,
        proxy: {
            '/server/**': {
              target: 'http://localhost:3000/',
              secure: false,
              hot: true,
            },
          },  
    },
    entry: path.resolve(__dirname,'./server/index.js'),
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss','.css']
    }
}