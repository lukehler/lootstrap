module.exports = function(grunt) {

	var paths = grunt.config.get('paths');

	grunt.config.set(
		'cssmin',
		{
			dist: {
				src: paths.dest + '/style.css',
				dest: paths.dest + '/style.min.css',
			},
			lib: {
				src: paths.dest + '/lootstrap.css',
				dest: paths.dest + '/lootstrap.min.css',
			}
		}
	);
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
