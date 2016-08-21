import gulp from 'gulp'
import del from 'del'
import scss from 'gulp-sass'
import BrowserSync from 'browser-sync'
// import webpack from 'webpack'
import webpack from 'webpack-stream'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from './webpack.config.js'
import ghPages from 'gulp-gh-pages'

const browserSync = BrowserSync.create()

const paths = {
  html: 'src/index.html',
  scss: 'src/index.scss',
  assets: 'src/assets/*',
  watch: {
    scss: 'src/**/*.scss',
    reload: ['dist/assets/*', 'dist/**/*.{html,js}']
  },
  build: 'dist',
  deploy: '.publish'
}

// Clean dist/ and .publish/
let clean = () => {
  return del([paths.build, paths.deploy])
}

// Copy assets/
let assets = () => {
  return gulp.src(paths.assets, {base: 'src'})
    .pipe(gulp.dest(paths.build))
}

// Copy html to dist/
let html = () => {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.build))
}

// Compile scss into CSS & auto-inject into browsers
let styles = () => {
  return gulp.src(paths.scss)
    .pipe(scss())
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.stream())
}

// Transform es6 to es5
let scripts = () => {
  return webpack(webpackConfig)
    .pipe(gulp.dest(paths.build))
  
  // let bundler = webpack(webpackConfig)

  // browserSync.init({
  //   server: {
  //     baseDir: paths.build,
  //     middleware: [
  //       webpackDevMiddleware(bundler, {
  //         // IMPORTANT: dev middleware can't access config, so we should
  //         // provide publicPath by ourselves
  //         publicPath: webpackConfig.output.publicPath,
  //         // quiet: true,
  //         noInfor: true,

  //         // pretty colored output
  //         stats: { colors: true }

  //         // for other settings see
  //         // http://webpack.github.io/docs/webpack-dev-middleware.html
  //       }),

  //       // bundler should be the same as above
  //       webpackHotMiddleware(bundler)
  //     ]
  //   },
  //   open: false
  //   // plugins: [
  //   //   {
  //   //     module: 'bs-html-injector',
  //   //     options: {
  //   //       files: [paths.watch.html]
  //   //     }
  //   //   }
  //   // ]
  // })

}

// Watch files' change and reload
let watch = () => {
  browserSync.init({
    server: paths.build,
    open: false
  })

  gulp.watch(paths.assets, assets)
  gulp.watch(paths.html, html)
  gulp.watch(paths.watch.scss, styles)

  gulp.watch(paths.watch.reload).on('change', browserSync.reload)
}

// Publish to GitHub pages
let deploy = () => {
  return gulp.src(paths.build)
    .pipe(ghPages())
}

let build = gulp.series(clean, gulp.parallel(assets, html, styles), gulp.parallel(scripts, watch))

export {deploy}
export default build