import gulp from 'gulp';
import postcss from 'gulp-postcss';
import thePostCSS from 'postcss';
import precss from 'precss';

/* eslint-disable prefer-template */
const GeneratorPlugin = thePostCSS.plugin('GeneratorPlugin', () =>
  function handler(css) {
    css.walkRules(/\\@[^ ]*/, rule => {
      /* eslint no-param-reassign: ["error", { "props": false }] */
      rule.selector = rule.selector.replace(/\\@([^ ]*)/, '@$1');
    });
    css.walkDecls(/^col\-width$/, decl => {
      const cols = decl.value.split('/');
      const percents = parseInt(cols[0], 10) / parseInt(cols[1], 10) * 100;

      function humanize(x) {
        return x.toFixed(8).replace(/\.?0*$/, '');
      }

      decl.parent.insertBefore(decl, thePostCSS.decl({
        prop: 'width',
        value: humanize(percents) + '%',
      }));
      decl.remove();
    });
  }
);

gulp.task('css-12', () =>
  gulp.src('reflex/grid-12.css')
    .pipe(postcss([

      precss,
      GeneratorPlugin,

    ]))
    .pipe(gulp.dest('./bootstrap/'))
);

gulp.task('css-5', () =>
  gulp.src('reflex/grid-5.css')
    .pipe(postcss([
      precss,
      GeneratorPlugin,
    ]))
    .pipe(gulp.dest('./bootstrap/'))
);

gulp.task('css-common', () =>
  gulp.src('reflex/grid-common.css')
    .pipe(postcss([
      precss,
      GeneratorPlugin,
    ]))
    .pipe(gulp.dest('./core/'))
);

gulp.task('default', ['css-12', 'css-5'], () => {});
