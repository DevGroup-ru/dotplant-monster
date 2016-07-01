import webpack from 'webpack';
/* eslint-disable prefer-template */
// settings start
const supportedBrowsers = [
  'last 2 versions',
  'ie >= 10',
  'Android >= 4',
  'iOS >= 7',
];
const bundlesToPack = [
  'bundle',
  'core',
  'visual-builder',
];


// import csso from 'postcss-csso';
// import doiuse from 'doiuse';
// import stylelint from 'stylelint';
import postbem from 'postcss-bem';
import nested from 'postcss-nested';
// var bemLinter = require('postcss-bem-linter');
import pxtorem from 'postcss-pxtorem';
import cssnext from 'postcss-cssnext';
import precss from 'precss';
import flexbugs from 'postcss-flexbugs-fixes';
import reporter from 'postcss-reporter';
import map from 'postcss-map';
import postcssImport from 'postcss-partial-import';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WriteFilePlugin from 'write-file-webpack-plugin';
import thePostCSS from 'postcss';
import postAssets from 'postcss-assets';


const columnHelper = thePostCSS.plugin('columnHelper', () =>
  function plugin(css) {
    css.walkAtRules('_', rule => {
      const nodes = [];
      const medias = [
        '--big',
        '--desktop-wide',
        '--desktop',
        '--tablet',
        '--mobile',
      ];
      const params = rule.params.split(' ');
      Object.keys(medias).forEach(index => {
        if (medias.hasOwnProperty(index)) {
          const media = medias[index];
          const bigRule = thePostCSS.atRule({
            name: 'media',
            params: '(' + media + ')',
          });
          thePostCSS.atRule({
            name: 'mixin',
            params: 'col_' + params[index] + '_of_12',
          }).moveTo(bigRule);
          nodes.push(bigRule);
        }
      });

      rule.replaceWith(nodes);
    });
  }
);

const dev = process.env.ENV === 'dev';
const minPostfix = dev ? '' : '.min';
const bundles = {};
Object.keys(bundlesToPack).forEach(index => {
  if (bundlesToPack.hasOwnProperty(index)) {
    const bundle = bundlesToPack[index];
    bundles[bundle] = './' + bundle + '/bundle.js';
  }
});
const plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new ExtractTextPlugin(`[name]/styles${minPostfix}.css`),
  new WriteFilePlugin(),
];
if (!dev) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}
const output = {
  path: './',
  filename: `[name]/scripts${minPostfix}.js`,
};
module.exports = {
  cache: true,
  entry: bundles,
  stats: {
    colors: true,
    reasons: true,
  },
  debug: dev,
  externals: { jquery: 'jQuery' },
  output,
  plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|prism\.js|bower_components)/,
        loader: 'babel',
        query: {
          // plugins: ['transform-runtime'],
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader' + (!dev ? '!csso-loader' : '')
        ),
      },
    ],
  },
  devtool: dev ? 'inline-source-map' : '',
  postcss: function postcss() {
    return [
      flexbugs(),
      map({
        maps: ['settings.yml'],
      }),
      postcssImport(),


      // doiuse({
      //   browsers: supportedBrowsers,
      //   ignore: [
      //     'rem',
      //     'css-fixed',
      //   ],
      // }),

      pxtorem({
        prop_white_list: ['width', 'font', 'font-size', 'line-height', 'letter-spacing'],
      }),
      columnHelper(),
      precss(),
      postbem({
        defaultNamespace: undefined, // default namespace to use, none by default
        style: 'bem', // suit or bem, suit by default,
        separators: {
          namespace: '-',
          descendent: '__',
          modifier: '--',
        },
        shortcuts: {
          component: 'b',
          modifier: 'm',
          descendent: 'e',
        },
      }),
      nested(),
      cssnext({
        browsers: supportedBrowsers,
        features: {
          autoprefixer: false,
        },
      }),
      cssnext({
        browsers: supportedBrowsers,
      }),
      postAssets(),
      reporter({
        clearMessages: true,
      }),
    ];
  },
  devServer: {
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
    outputPath: output.path,
  },
};
