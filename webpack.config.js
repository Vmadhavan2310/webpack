
const { watch } = require('fs')
const path = require('path')
module.exports = {
   entry: ['./index.js','./main.js'],
   output: {
       filename: "bundle.app.js",
        path: path.resolve(__dirname,'./dist')
    },
   module : {
    rules: [
        {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader', 
                options: {
                    presets:['@babel/preset-env','@babel/preset-react']
                }
            }
           
        }

    ]
   },
   resolve: {
    extensions: ['.js', '.jsx'], // Automatically resolve .js and .jsx extensions
  },
    mode: "development",
    watch: true
}