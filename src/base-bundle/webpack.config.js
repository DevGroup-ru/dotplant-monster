var webpack = require("webpack");

/// settings start
var supportedBrowsers = [
  'last 2 versions',
  'ie >= 10',
  'Android >= 4',
  'iOS >= 7',
];
var bundlesToPack = [
	'bundle',
	'core',
	'visual-builder',
];


var csso = require('postcss-csso');
var doiuse = require('doiuse');
var stylelint = require('stylelint');
var lost = require('lost');
var postbem = require('postcss-bem');
var nested = require('postcss-nested');
// var bemLinter = require('postcss-bem-linter');
var pxtorem = require('postcss-pxtorem');
var cssnext = require('postcss-cssnext');
var precss = require('precss');
var flexbugs = require('postcss-flexbugs-fixes');
var reporter = require('postcss-reporter');
var map = require('postcss-map');
var postcssImport = require('postcss-partial-import');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WriteFilePlugin = require("write-file-webpack-plugin");
var thePostCSS = require('postcss');


var ColumnHelper = thePostCSS.plugin('ColumnHelper', function(){
  return function(css) {
    css.walkAtRules('_', function (rule) {
      var nodes = [];
      var medias = [
        '--big',
        '--desktop-wide',
        '--desktop',
        '--tablet',
        '--mobile',
      ];
      params = rule.params.split(' ');
      for (index in medias) {
        if (medias.hasOwnProperty(index)) {
          var media = medias[index];
          var bigRule = thePostCSS.atRule({
            name: 'media',
            params: '(' + media + ')'
          });
          thePostCSS.atRule({
            name: 'mixin',
            params: 'col_' + params[index] + '_of_12',
          }).moveTo(bigRule);
          nodes.push(bigRule);
        }
      }

      rule.replaceWith(nodes);
    });

  };
});

var dev = process.env.ENV === 'dev';
var minPostfix = dev ? '' : '.min';
var bundles = {};
for (var index in bundlesToPack) {
	if (bundlesToPack.hasOwnProperty(index)) {
		var bundle = bundlesToPack[index];
		bundles[bundle] = './' + bundle + '/bundle.js';
	}
}
var plugins = [
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.OccurrenceOrderPlugin(),
	new ExtractTextPlugin("[name]/styles" + minPostfix + ".css"),
  new WriteFilePlugin()
];
if (!dev) {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
}
var output = {
  path: "./",
  filename: "[name]/scripts" + minPostfix + ".js"
};
module.exports = {
  cache: true,
  entry: bundles,
  stats: {
      colors: true,
      reasons: true
  },
  debug: true,
  "output": output,
  "plugins": plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|prism\.js|bower_components)/,
        loader: 'babel',
        query: {
          // plugins: ['transform-runtime'],
          cacheDirectory: true
        }
      },
      {
        test:   /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader" + (!dev?'!csso-loader':''))
      }
    ]
  },
  devtool: dev ? 'source-map' : '',
  postcss: function () {
    return [
      stylelint(),
      flexbugs(),
      map({
        maps: ['settings.yml']
      }),
      postcssImport(),


      doiuse({
        browsers: supportedBrowsers,
        ignore: [
          'rem',
          'css-fixed',
        ]
      }),

      pxtorem({
          prop_white_list: ['width', 'font', 'font-size', 'line-height', 'letter-spacing']
      }),
      ColumnHelper(),
      precss(),
      postbem({
          defaultNamespace: undefined, // default namespace to use, none by default
          style: 'bem', // suit or bem, suit by default,
          separators: {
              namespace: '-',
              descendent: '__',
              modifier: '--'
          },
          shortcuts: {
            component: 'b',
            modifier: 'm',
            descendent: 'e'
          }
      }),
      nested(),
      cssnext({
        browsers: supportedBrowsers,
        features: {
          autoprefixer: false
        }
      }),
      cssnext({
        browsers: supportedBrowsers
      }),
      reporter({clearMessages:true})
    ];
  },
  devServer: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: output.path
  },
};
