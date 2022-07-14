const {src, dest, watch,series} =require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyle(){
    return src('styles/sass/**/*.scss').pipe(sass()).pipe(dest('./styles/css'));
}
function watchTask(){
    watch(['styles/sass/**/*.scss'], buildStyle)
}

exports.default = series(buildStyle,watchTask)