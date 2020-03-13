const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        library: 'TemplatePackageName',  // TODO CHANGEME
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(t|j)s$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
};
