// Read the comments in the webpack.config.js file in testing--webpack-and-babel repo for understanding the significance of each field: https://github.com/rohan-v8rma/testing--webpack-and-babel

const path = require('path');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const mode = process.env.NODE_ENV || "development";


module.exports = {

    // This changes the base directory for resolving entry-points from the npm project directory to the directory that is specified using the path utility.
    context: path.resolve(__dirname, ''),

    mode: mode,

    plugins: [new BundleAnalyzerPlugin({
        analyzerMode: process.env.STATS || "disabled"
    })],

    devtool: 'inline-source-map',

    entry: './src/main.js',

    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, ''),
    },

    /* 
    ? The default value of "static" path is '.' relative to the npm project directory
    
    It is important to specify the static path properly. 
    
    Otherwise, the `webpack-dev-server` would serve the files that it bundles and keeps in memory (these files are determined by the "output" field)  at the root of the server but the index.html that is responsible for referencing these files and finally showing the output would be at an inner route of the server.

    ! A potential issue that could be caused would be that suppose we forget to specify the "static" path. So the bundled file would be served at the root of the server being hosted; as usual.
    ! BUT, our index.html is present in a sub-directory called 'dist', which actually references the bundled js files would be present at the 'dist' path of the server.
    ! So, when we navigate to the 'dist' path of the server, we would be able to see the index.html file, but the index.html file would be referencing the pre-bundled js file and the bundled files wouldn't be being served by the dev-server at that path (since dev-server always serves bundled files at the root path WHEN ENTRY POINT IS WELL DEFINED, WHICH IT IS IN THIS CASE), leading to the displayed output being out-of-date in relation to the current code because the realtime-bundling by webpack isn't being taken advantage of.

    ? By specifying our "static" field as 'dist', the dev-server would stay consistent by serving the bundled files at the root of the server, but it would take the files in the local 'dist' directory of the project (that includes our index.html file), and serve them as well at the root of the server.
    ? This would allow us to see our HTML page, as well as observe updates to the bundled code when we change the code that is being bundled.
    
    */
    devServer: {
        // static: '.',
        static: './three-js-book/world-app',
        port: 1372
    }


}