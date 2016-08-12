import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.dev';
// import open from 'open';

let targetEntry = 'http://localhost:3000/';
config.entry.unshift("webpack-dev-server/client?" + targetEntry);

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'localhost', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:3000');
    // console.log('Opening your system browser...');
    // open(targetEntry);
  });
