var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');
var babelify = require('babelify');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var livereactload = require('livereactload');

var config = {
  clientScripts: {
    src: 'app/client.jsx',
    dest: 'dist/app/static'
  },
  serverScripts: {
    src: ['app/*.js', 'app/**/*.{js,jsx}', '!app/{client.jsx}'],
    dest: 'dist/app',
  },
  testScripts: {
    src: ['test/**/*.{js,jsx}'],
    dest: 'dist/test/'
  },
  staticFiles: {
    src: ['app/static/**/*'],
    dest: 'dist/app/static/'
  },
  styles: {
    src: ['app/stylesheets/**/*.styl'],
    dest: 'dist/app/static'
  },
};

gulp.task('default', Object.keys(config));

gulp.task('watch', ['serverScripts', 'testScripts', 'staticFiles', 'styles'], function () {
  gulp.watch(config.serverScripts.src, ['serverScripts']);
  gulp.watch(config.testScripts.src, ['testScripts']);
  gulp.watch(config.staticFiles.src, ['staticFiles']);
  gulp.watch(config.styles.src, ['styles']);

  hotBundle(config.clientScripts.src);
});

gulp.task('clientScripts', function () {
  bundle(config.clientScripts.src)
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.clientScripts.dest));
});

gulp.task('serverScripts', release(config.serverScripts.src, config.serverScripts.dest));
gulp.task('testScripts', release(config.testScripts.src, config.testScripts.dest));

gulp.task('staticFiles', function () {
  gulp.src(config.staticFiles.src)
      .pipe(gulp.dest(config.staticFiles.dest));
});

gulp.task('styles', function () {
  gulp.src(config.styles.src)
      .pipe(stylus())
      .pipe(concat('app.css'))
      .pipe(gulp.dest(config.styles.dest));
});

function release (src, dest) {
  return function () {
    gulp.src(src)
        .pipe(babel({ stage: 0 }))
        .pipe(gulp.dest(dest));
  }
}

function bundle (src) {
  var bundler = browserify({
    entries: src,
    extensions: ['.jsx'],
    transform: [babelify],
    fullPaths: false
  });

  return bundler.bundle();
}

function hotBundle (src) {
  function rebundle () {
    watcher.bundle()
           .pipe(source('app.js'))
           .pipe(gulp.dest(config.clientScripts.dest));
  }

  var bundler = browserify({
    entries: src,
    extensions: ['.jsx'],
    transform: [babelify],
    plugin: [livereactload],
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  var watcher = watchify(bundler);
  rebundle();

  return watcher.on('error', console.warn.bind(console))
                .on('update', rebundle);
}
