'use strict';

// https://github.com/sindresorhus/pageres
var Pageres = require('pageres');

var params = {
	url : 'http://yandex.ru',
	delay : 1,
};

for (var i = 0; i < process.argv.length; i++) {
	var arr = process.argv[i].split('=');
	params[arr[0]] = arr[1];
}

var pageres = new Pageres({
		delay: params.delay,
		//format : 'jpg',
		//selector : '#profile-registration',
		//hide
		filename : '<%= size %>',
	})
	.src(params.url, ['320x480', '768x1024', '1280x1024', '1366x768', '1920x1080'], {crop : false})
	.dest('./img')
	.on('warn', function(error){
		console.log(error);
	})
	.run()
	.then(function(){
		console.log('Task finished');
	})
	;