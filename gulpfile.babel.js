import fs from 'fs'
import url from 'url'
import path from 'path'
import gulp from 'gulp'
import del from 'del'
import scss from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import precss from 'precss'
import BrowserSync from 'browser-sync'
import webpack from 'webpack-stream'
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
    .pipe(scss({
      outputStyle: 'compressed'
    }))
    .pipe(postcss([autoprefixer, precss]))
    .pipe(gulp.dest(paths.build))
    .pipe(browserSync.stream())
}

// Transform es6 to es5
let scripts = () => {
  return webpack(webpackConfig)
    .pipe(gulp.dest(paths.build))
}

// Watch files' change and reload
let watch = () => {
  browserSync.init({
    server: {
      baseDir: paths.build,
      middleware: (req, res, next) => {
        let defaultURL
        let url = req.url
        
        url += url.indexOf('.') == -1 ? '/' : ''
        url = url.split('/')

        if (url.indexOf('assets') == -1) {
          defaultURL = url.pop()
        } else {
          defaultURL = 'assets/' + url.pop()
        }

        req.url = '/' + defaultURL

        return next()
      }
    },
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