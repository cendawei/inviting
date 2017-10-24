/**
 * Created by cendawei on 2017/10/9.
 */
const fs = require('fs')
const gulp = require('gulp')
const gutil = require('gulp-util')
const clean = require('gulp-clean')
const uglify = require('gulp-uglify')
const minifycss = require('gulp-minify-css')
const rev = require('gulp-rev')
const sass = require('gulp-sass')
const spritesmith = require('gulp.spritesmith')
const ejs = require('gulp-ejs')
const webpack = require('webpack')
const devWebpackConfig = require('./configs/webpack.dev.config')
const prodWebpackConfig = require('./configs/webpack.prod.config')

function buildJs(env) {
    const webpackConfig = env === 'development' ? devWebpackConfig : prodWebpackConfig
    webpack(webpackConfig, (err, stats) => {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString())
    })
}
function render(env) {
    const cssMap = env === 'development' ? {} : JSON.parse(fs.readFileSync('../statics/build/css/rev-manifest.json'))
    return gulp.src('./views/**/*.html')
        .pipe(ejs({
            cssMap,
            env: env
        }).on('error', gutil.log))
        .pipe(gulp.dest('./tmpViews'))
}
const rmdirSync = (function(){
    function iterator(url,dirs){
        var stat = fs.statSync(url);
        if(stat.isDirectory()){
            dirs.unshift(url);//收集目录
            inner(url,dirs);
        }else if(stat.isFile()){
            fs.unlinkSync(url);//直接删除文件
        }
    }
    function inner(path,dirs){
        var arr = fs.readdirSync(path);
        for(var i = 0, el ; el = arr[i++];){
            iterator(path+"/"+el,dirs);
        }
    }
    return function(dir,cb){
        cb = cb || function(){};
        var dirs = [];
        try{
            iterator(dir,dirs);
            for(var i = 0, el ; el = dirs[i++];){
                fs.rmdirSync(el);//一次性删除所有收集到的目录
            }
            cb()
        }catch(e){//如果文件或目录本来就不存在，fs.statSync会报错，不过我们还是当成没有异常发生
            e.code === "ENOENT" ? cb() : cb(e);
        }
    }
})();

gulp.task("clean-statics-css", function (done) {
    rmdirSync("../statics/build/css", function (e) {
        done()
    })
})

gulp.task("set-env-dev", function (done) {
    process.env.NODE_ENV = 'development'
    done()
})

gulp.task("set-env-prod", function (done) {
    process.env.NODE_ENV = 'production'
    done()
})

gulp.task("build-dev", ['set-env-dev', 'render-dev'], function (done) {
    gulp.src('build/js', {read: false})
        .pipe(clean())
    buildJs('development')
    done()
})

gulp.task("build-prod", ['set-env-prod', 'render-prod'], function (done) {
    rmdirSync('../statics/build/js', function (e) {
    })
    buildJs('production')
    done()
})

gulp.task("webpack", function () {
    buildJs('development')
})

gulp.task("sass", function () {
    return gulp.src('./style/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css/'))
})

gulp.task("minifycss", ["clean-statics-css", "sass"], function () {
    return gulp.src('build/css/**/*.css')
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest('../statics/build/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('../statics/build/css'))
})

gulp.task("copy-views", function () {
    return gulp.src('./views/*.html')
        .pipe(gulp.dest('../views'))
})

gulp.task("copy-statics", function () {
    gulp.src('images/**/*')
        .pipe(gulp.dest('../statics/images'))
    gulp.src('plugins/**/*')
        .pipe(gulp.dest('../statics/plugins'))
    gulp.src('*.ico')
        .pipe(gulp.dest('../statics'))
})

gulp.task("render-dev", function () {
    return render('development')
})

gulp.task("render-prod", ['minifycss'], function () {
    return render('production')
})

gulp.task("watch", ["sass", "build-dev"], function () {
    gulp.watch('./style/sass/**/*.scss', ['sass'])
    gulp.watch('./**/*.vue', ['webpack'])
    gulp.watch('./views/**/*.html', ['dev'])
})

gulp.task("png", function () {
    const spritedirs = fs.readdirSync(path.resolve(__dirname, './sprites/'))
    spritedirs.forEach(dir => {
        const subSpritedirs = fs.readdirSync(path.resolve(__dirname, '/sprites/', dir, '/'))
        subSpritedirs.forEach(spritedir => gulp
            .src(`sprites/${dir}/${spritedir}/*.png`)
            .pipe(spritesmith({
                imgName: spritedir + '.png',
                cssName: spritedir + '.css'
            })))
            .pipe(gulp.dest('images/' + dir + '/'))
    })
})

gulp.task('dev', ['set-env-dev', 'copy-views', 'sass', 'render-dev', 'build-dev', 'watch'])
gulp.task('build', ['set-env-prod', 'copy-views', 'copy-statics', 'clean-statics-css', 'sass', 'minifycss', 'render-prod', 'build-prod'])