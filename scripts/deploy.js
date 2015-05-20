var fs    = require('vinyl-fs');
var ftp   = require('vinyl-ftp');
var gutil = require('gulp-util');
var conn  = ftp.create({
              host:     process.env.FTP_HOST,
              user:     process.env.FTP_USER,
              password: process.env.FTP_PASSWORD,
              log:      gutil.log
            });

fs
  .src(['./build/*'], { buffer: false })
  .pipe(conn.dest('/public_html/react-dci'));
