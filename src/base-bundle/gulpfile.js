var gulp = require('gulp');
var postcss    = require('gulp-postcss');
var thePostCSS = require('postcss');

var GeneratorPlugin = thePostCSS.plugin('GeneratorPlugin', function(){
  return function(css, result) {
    css.walkRules(/\\@[^ ]*/, function (rule, i) {
      rule.selector = rule.selector.replace(/\\@([^ ]*)/, '@$1');
    });
    css.walkDecls(/^col\-width$/, function(decl) {
      var cols = decl.value.split('/');
      var percents = parseInt(cols[0])/parseInt(cols[1])*100,
        percentsWithFix = percents-0.1;

      function humanize(x){
        return x.toFixed(8).replace(/\.?0*$/,'');
      }

      decl.parent.insertBefore(decl, thePostCSS.decl({
        'prop': 'width',
        'value': humanize(percents) + '%'
      }));
      decl.remove();
    });
  };
})

gulp.task('css-12', function () {
  return gulp.src('reflex/grid-12.css')
    .pipe( postcss([

      require('precss'),
      GeneratorPlugin,

    ]) )
    .pipe( gulp.dest('./bootstrap/') );
});

gulp.task('css-5', function () {
  return gulp.src('reflex/grid-5.css')
  .pipe( postcss([

    require('precss'),
    GeneratorPlugin,

  ]) )
  .pipe( gulp.dest('./bootstrap/') );
});

gulp.task('default', ['css-12', 'css-5'], function (){
  
})
