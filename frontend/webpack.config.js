import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

module.exports = {
    devServer: {
        port: 2000,
    },
    plugins: [
        new ModuleFederationPlugin({
          name: 'host',
          remotes: {
              cards: "cards@http://localhost:2001/remoteEntry.js",
          },
//          shared: {
//            react: {
//              singleton: true,
//            },
//            'react-dom': {
//              singleton: true,
//            },
//          },
        }),
      ],
}



