const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    // Mode webpack should use (see production and deveopment)
    mode: "development",

    // Where to look for the main JS source file
    entry: {
        bundle: path.resolve(__dirname, "src/index.js")
    },

    // Build output config
    output: {
        // Where to put the build result
        path: path.resolve(__dirname, "dist"),

        // What to call the build result
        // Uses the name of the 'bundle' key in entry object
        // Uses hash to aid with caching
        filename: "[name][contenthash].js",

        // Remove old files from dist folder when project is rebuilt
        clean: true,

        // Config the assets output using the resource's file name and extension
        assetModuleFilename: "[name][ext]"
    },

    // Configure source maps
    devtool: "source-map",

    // Config development server
    devServer: {
        // Serve the HTML file from the dist folder
        static: {
            directory: path.resolve(__dirname, "dist")
        },

        // Set the port to serve to
        port: 3000,

        // Open the browser automatically when dev server starts
        open: true,

        // Use hot reloading on the dev server
        hot: true,

        // Enable Gzip compression
        compress: true,

        // ???
        historyApiFallback: true
    },

    // Handle loaders
    module: {
        rules: [
            {
                // Regex gets all files of type .scss
                test: /\.scss$/,

                // Using style, css, and sass loaders to process styling
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                // Regex gets all files of type .js
                test: /\.js$/,

                // Exclude the project's node modules
                exclude: /node_modules/,

                // Using babel loader to compile JS for compatibility
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                // Regex gets most image file types
                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                // Resource loader is already integrated into Webpack
                // No packages need to be installed for this loader
                // Just tell webpack what type of resources these are
                type: "asset/resource"
            }
        ]
    },

    // Handle plugins
    plugins: [
        // Config HTML plugin for page generation
        new HtmlWebpackPlugin({
            // Set the <title> element value of the generated file
            title: "Legio Mortis Webpack",

            // Set the name of the generated file
            filename: "index.html",

            // Use a template HTML file to generate the new file from
            template: "src/template.html"
        }),

        // Config bundle analyzer for project size visualization
        // new BundleAnalyzerPlugin()
    ]
}