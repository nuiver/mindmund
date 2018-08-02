const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const babel = require('gulp-babel')

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
    .pipe(tsProject());
  return tsResult.js
  .pipe(gulp.dest('dist'))
  // .pipe(rename({
  //   suffix: "-min"
  // }))
  // .pipe(babel({
  //   presets: ['es2015']
  // }))
  // .pipe(uglify())
  // .pipe(gulp.dest('dist/minified'))
  ;
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', function () {
  return gulp.src(JSON_FILES)
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets']);
