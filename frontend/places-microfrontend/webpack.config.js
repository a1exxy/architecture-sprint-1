import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';
module.exports = {
  devServer: {
    port: 2001,
  },
//  output: {
//    publicPath: 'http://localhost:2001/', // or auto
//  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cards',
      filename: 'remoteEntry.js',
      exposes: {
        // Set the modules to be exported, default export as '.'
        './App': './src/components/App',
      },
//      shared: {
//        react: {
//          singleton: true,
//        },
//        'react-dom': {
//          singleton: true,
//        },
//      },
    }),
  ],
};