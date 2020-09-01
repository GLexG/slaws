// import type { Serverless } from 'serverless/aws';
//
// const serverlessConfiguration: Serverless = {
//   service: {
//     name: 'aws-typescript-api',
//     // app and org for use with dashboard.serverless.com
//     // app: your-app-name,
//     // org: your-org-name,
//   },
//   frameworkVersion: '>=1.72.0',
//   custom: {
//     webpack: {
//       webpackConfig: './webpack.config.js',
//       includeModules: true
//     },
//     tableName: 'WebsocketUsers',
//   },
//   // Add the serverless-webpack plugin
//   plugins: ['serverless-webpack'],
//   provider: {
//     name: 'aws',
//     runtime: 'nodejs12.x',
//     // profile: 'serverlessUser', we can set user here for deploying to aws
//     apiGateway: {
//       minimumCompressionSize: 1024,
//     },
//     environment: {
//       AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
//       tableName: custom.tableName,
//     },
//   },
//   functions: {
//     getCityInfo: {
//       handler: 'src/getCityInfo.handler',
//       events: [{
//         http: {
//           path: 'get-city/{city}',
//           method: 'get',
//           cors: true,
//         }
//       }]
//     },
//     getOauthToken: {
//       handler: 'src/getOauthToken.handler',
//       events: [{
//         http: {
//           path: 'get-token',
//           method: 'get',
//           cors: true,
//         }
//       }]
//     }
//   }
// }
//
// module.exports = serverlessConfiguration;
