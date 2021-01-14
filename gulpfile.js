// 插件的使用需要先引入gulp模块; 
var gulp = require("gulp");
// 引入外部模块
var connect = require("gulp-connect");
// gulp-sass  : 依赖 sass插件; 
var sass = require("gulp-sass");
sass.compiler  = require("sass");
var babel = require("gulp-babel");

// 使用外部模块; 
// 这个模块一定是在指令之中使用的;
gulp.task("connect" , async ()=>{
      connect.server({
            // 根目录 : 默认的根目录就是gulpfile.js 存在的目录; 
            root : "./src",
            // 端口号 : 默认的端口号是 8080
            port : 3000,
            // 自动刷新功能; 
            livereload : true
      });
});
// 1. 转存html的指令; 

gulp.task("html", async()=>{
      await gulp.src(["./src/*.html"]).pipe( gulp.dest("./dist"))
      // 多增加一个指令 
      .pipe( connect.reload() );
});
// css转存过去; 
gulp.task("scss" , async()=>{
      // **/* 表示查找任意层级的文件; 
      await gulp.src(["./src/scss/**/*.scss"])
      // 转存之前先去使用sass插件处理一下数据; 
      // sass的错误处理事件 : 
      // 错误不终止监听; 
      .pipe(sass().on("error", sass.logError))
      .pipe( gulp.dest("./src/css") )
      .pipe( connect.reload() )
});
// JS
// 需求 : ES6 => ES5;
gulp.task("js",async()=>{
      gulp.src(["./src/javascripts/**/*.js"])
      .pipe(babel({
            presets: ['@babel/env']
      }))
      .pipe(gulp.dest("./dist/javascripts"))
      .pipe(connect.reload())
});
// 指令需要监听; 

// 2. 监听指令; 
gulp.task("watch" , async()=>{
      gulp.watch("./src/*.html" , gulp.series("html"));
      gulp.watch("./src/scss/**/*.scss" , gulp.series("scss"));
      gulp.watch("./src/javascripts/**/*.js" , gulp.series("js"));
})

// 3. 同时开启监听和 服务器功能; 

gulp.task("default" , gulp.parallel("watch" , "connect"));

// gulp-htmlmin 
// gulp-cssmin
// gulp-uglify

// 建立一个全新的功能 : 压缩代码放入到 dist文件夹下; 
// gulp-htmlmin , gulp-cssmin , gulp-uglify

const htmlmin = require("gulp-htmlmin");
const cssmin  = require("gulp-cssmin");
const uglify  = require("gulp-uglify-es").default;

gulp.task("htmlmin" , async ()=>{
      gulp.src(["./src/*.html"]).pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest("./dist"));
});
gulp.task("cssmin" , async()=>{
      gulp.src(["./src/scss/**/*.scss"])
      .pipe(sass())
      .pipe(cssmin())
      .pipe(gulp.dest("./dist/css"));
});
// JS压缩 
gulp.task("jsmin" , async()=>{
      gulp.src(["./src/javascripts/**/*.js"])
      .pipe(babel({
            presets: ['@babel/env']
      }))
      .pipe(uglify())
      .pipe(gulp.dest("./dist/javascripts"))
});
// 单纯的转存指令; 
gulp.task("assert" , async ()=>{
      await gulp.src(["./src/assert/**/*.js"])
      .pipe(uglify())
      .pipe(gulp.dest("./dist/assert"));
      await gulp.src(["./src/assert/**/*.css"]).pipe(gulp.dest("./dist/assert"));
      await gulp.src(["./src/assert/**/*.+(jpg|jpeg|gif|png)"]).pipe(gulp.dest("./dist/assert"));
})

gulp.task("build" , gulp.series("assert","htmlmin","cssmin","jsmin"));
