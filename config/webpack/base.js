
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const resolve = (...paths) => path.resolve(process.cwd(),...paths);

const noCssModulesPaths = [
  resolve('node_modules/antd'),
  resolve('node_modules/wangct-react')
];

module.exports = {
  entry:{
    index:resolve('src/index')
  },
  lessRules:[
    {
      test: /\.(less|css)$/,
      use: ['style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true
          }
        }
      ],
      exclude:noCssModulesPaths
    },
    {
      test: /\.(less|css)$/,
      use: ['style-loader', 'css-loader',
        {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true
          }
        }
      ],
      include:noCssModulesPaths
    }
  ],
  noCssModulesPaths:[
    resolve('node_modules/antd')
  ],
  module:{
    rules:[
      {
        test: /\.(ts|js)x?$/,
        use: [
          {
            loader:'babel-loader',
            options:{
              presets: ['@babel/preset-react','@babel/preset-env'],
              plugins:[
                ['import', {
                  libraryName: 'antd',
                  style: true
                },'ant'],
                ['import',{
                  libraryName:'wangct-react',
                  customName(name){
                    return `wangct-react/lib/${name}`
                  }
                },'wct']
              ]
            }
          }
        ]
      },
      {
        test:/\.(gif|jpg|jpeg|png|svg)$/,
        use:[
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'static/[name]_[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:resolve('public/index.html')
    })
  ]
};