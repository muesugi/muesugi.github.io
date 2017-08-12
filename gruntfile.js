// module.exports = function (grunt) {
//     'use strict';
//     require('load-grunt-tasks')(grunt);
//   	var webpack = require("webpack");
//   	var webpackConfig = require("./webpack.config.js");
//     var path = require('path');
//
//     grunt.initConfig({
//         'pkg': grunt.file.readJSON('package.json'),
//         'sass': {
//             'options': {
//                 'outputStyle': 'compressed'
//             },
//             'dist': {
//                 'files': {
//                     'dist/css/styles.css': './src/scss/main.scss'
//                 }
//             }
//         },
//         'watch': {
//             options: {
//                livereload: true,
//              },
//             'scss': {
//                 'files': ['src/**/*.scss'],
//                 'tasks': ['sass'],
//                   options: {
//                      livereload: false,
//                    },
//             },
//             'css': {
//                 'files': ['dist/css/*.css']
//             },
//             'html': {
//                 'files': ['src/**/*.html'],
//                 'tasks': ['copy']
//             }
//         },
//         'copy': {
//             'main': {
//                 'files': [{
//                     'expand': true,
//                     'cwd': 'src/',
//                     'src': [
//                         '*.html',
//                         'fonts/**',
//                         'img/**',
//                         '.htaccess'
//                     ],
//                     'dest': 'dist/'
//                 }]
//             }
//         },
//         'webpack': {
//           prod: webpackConfig,
//           dev: Object.assign({ watch: true }, webpackConfig)
//         },
//         'webpack-dev-server': {
//     			options: {
//     				webpack: webpackConfig
//     			},
//     			start: {
//     				webpack: {
//     					devtool: "eval"
//     				}
//     			}
//     		},
//         concurrent: {
//       		serve: {
//       			tasks: ['webpack-dev-server:start', 'watch'],
//       			options: {
//       				logConcurrentOutput: true
//       			}
//       		}
//       	},
//     });
//
//     grunt.registerTask('default', ['sass', 'copy', 'watch', webpack]);
//     // grunt.registerTask('build', ['sass', 'copy', 'webpack', 'webpack:prod']);
// };
