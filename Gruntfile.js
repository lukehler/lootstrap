module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		//	paths is just a variable for common storage during the build and templating process
		paths: {
			src: 'src',		// source directory for content
			dest: 'dest',	// final document root, symlink this into htdocs
			build: 'build',	// build directory for all the tooling to build the content
		}
	});

	// Load Grunt plugins.
	grunt.loadTasks( 'build/grunt' );

	
	grunt.registerTask(
		'css',
		[
			'less',
			'postcss',
			'cssmin',
		]
	);
	grunt.registerTask(
		'html',
		[
			'concat',
		]
	);

	grunt.registerTask(
		'default',
		[
			'css',
			'html',
		]
	)

};
