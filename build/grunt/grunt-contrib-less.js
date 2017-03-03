module.exports = function(grunt) {

	var paths = grunt.config.get('paths');

	grunt.config.set(
		'less',
		{	
			dist: {
				src: paths.src + '/styles/style.less',
				dest: paths.dest + '/style.css'
			},
			lib: {
				src: paths.src + '/styles/lootstrap.less',
				dest: paths.dest + '/lootstrap.css'
			}
		}
	);
	grunt.loadNpmTasks('grunt-contrib-less');
};
