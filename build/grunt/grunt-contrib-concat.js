module.exports = function(grunt) {

	var paths = grunt.config.get('paths');

	grunt.config.set(
		'concat',
		{
			html: {
				src: [
					paths.src + '/content/open.html',
					paths.src + '/content/header.html',
					paths.src + '/content/sections/*.html',
					paths.src + '/content/close.html',
				],
				dest: paths.dest + '/index.html'
			}
		}
	);
	grunt.loadNpmTasks('grunt-contrib-concat');
};
