var gulp = require('gulp');
var concat = require('gulp-concat');
var size = require('gulp-size');
var merge = require('merge-stream');

var postcss = require('gulp-postcss');
var csso = require('postcss-csso');
var doiuse = require('doiuse');
var stylelint = require('stylelint');

var lost = require('lost');
var postbem = require('postcss-bem');
var nested = require('postcss-nested');
var bemLinter = require('postcss-bem-linter');
var pxtorem = require('postcss-pxtorem');
var cssnext = require('postcss-cssnext');
var precss = require('precss');
var flexbugs = require('postcss-flexbugs-fixes');
var reporter = require('postcss-reporter');
var rtlcss = require('gulp-rtlcss');
var rename = require('gulp-rename');
var map = require('postcss-map');

var fs = require('fs');
var path = require('path');

/// settings start
var bundlesToPack = [
  'core',
  'bundle',
];
var supportedBrowsers = [
  'last 2 versions',
  'ie >= 10',
  'Android >= 4',
  'iOS >= 7',
];

/// set processors
var processors = [
    stylelint(),
    flexbugs(),
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
    doiuse({
      browsers: supportedBrowsers
    }),
    precss(),
    map({
      maps: ['settings.yml']
    }),
    lost(),
    pxtorem({
        prop_white_list: ['width', 'font', 'font-size', 'line-height', 'letter-spacing']
    }),
    cssnext({
      browsers: supportedBrowsers
    }),
    reporter({clearMessages:true})

];

function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function(file) {
        return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

// loop through bundles
for (bundleIndex in bundlesToPack) {
  if (bundlesToPack.hasOwnProperty(bundleIndex)) {
    var bundle = bundlesToPack[bundleIndex];
    addBundleTasks(bundle);
  }
}

gulp.task('default', function() {
  console.log("Available gulp tasks:");
  for (task in gulp.tasks) {
    console.log('- ' + task);
  }
});

function addBundleTasks(bundle) {
  var bundleDependencies = [];

  var bundlePath = './' + bundle + '/';
  // get groups
  var groups = getFolders(bundlePath);
  var groupTasks = groups.map(function(group){
    //get blocks in group
    var blocks = getFolders(path.join(bundlePath, group));
    var blocksTasks = blocks.map(function(block) {
      var taskName = bundle + ':' + group + ':' + block + ':css';
      bundleDependencies.push(taskName);
      // block task
      return gulp.task(taskName, function(){
        return gulp.src(path.join(bundlePath, group, block, 'block.css'))
          .pipe(postcss(processors))
          .pipe(concat('styles.css'))
          .pipe(size({showFiles: true}))
          .pipe(gulp.dest(function(file) {
            return file.base;
          }))
          .pipe(postcss([csso]))
          .pipe(rename({suffix: '.min'}))
          .pipe(size({showFiles: true}))
          .pipe(gulp.dest(function(file) {
            return file.base;
          }));
      });
    });
    // group task
    var taskName = bundle + ':' + group + ':css';
    bundleDependencies.push(taskName);
    gulp.task(taskName, function (){
      return gulp.src(path.join(bundlePath, group, 'group.css'))
        .pipe(postcss(processors))
        .pipe(concat('styles.css'))
        .pipe(size({showFiles: true}))
        .pipe(gulp.dest(function(file) {
          return file.base;
        }))
        .pipe(postcss([csso]))
        .pipe(rename({suffix: '.min'}))
        .pipe(size({showFiles: true}))
        .pipe(gulp.dest(function(file) {
          return file.base;
        }));
    });
  });
  // bundle task
  gulp.task(bundle + ':__bundle__:css', function () {
    return gulp.src(bundlePath + 'bundle.css', { passthrough: true })
      .pipe(postcss(processors))
      .pipe(concat('styles.css'))
      .pipe(size({showFiles: true}))
      .pipe(gulp.dest(function(file) {
        return file.base;
      }))
      .pipe(postcss([csso]))
      .pipe(rename({suffix: '.min'}))
      .pipe(size({showFiles: true}))
      .pipe(gulp.dest(function(file) {
        return file.base;
      }));
  });
  // the whole bundle task
  bundleDependencies.push(bundle + ':__bundle__:css');
  gulp.task(bundle + ':css', bundleDependencies, function () {

  });
}
