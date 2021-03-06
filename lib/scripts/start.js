

const {resolve} = require('@wangct/node-util');
const spawn = require('cross-spawn');
const {EnumEnv} = require("../utils/options");
require('../watch').start();

process.env.env = EnumEnv.dev;

spawn('webpack-dev-server',['--config',resolve(__dirname,'../config/dev.js')],{
  stdio:'inherit',
  stdout:'inherit',
  env:process.env,
});
