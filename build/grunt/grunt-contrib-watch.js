module.exports = function(grunt) {

	var paths = grunt.config.get('paths');

	grunt.config.set(
		'watch',
		{
			options: {
				expand: true
			},
			css: {
				files: [
					paths.src + '/styles/**',
				],
				tasks: ['css'],
				options: {
					livereload: 2112,
					// Need to include the following line at the end of your page to use it:
					// 	<script src="//localhost:2112/livereload.js"></script>
				},
			},
			html: {
				files: [
					paths.src + '/content/**',
				],
				tasks: ['html']
			}
		}
	);

	grunt.loadNpmTasks('grunt-contrib-watch');
};
