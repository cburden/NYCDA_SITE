module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		develop:{
			server:{
				file: 'server.js'
			}
		},
	    jshint: {
	      options:{
	      },
	      all: ['*.js']
	    },
		watch: {
			options: {
		        livereload: true,
		    },
		    scripts: {
		        files: ['javascript/*.js'],
		        tasks: ['default'],
		        options: {
		            spawn: false,
		        },
		    }, 
		    html:{
		    	files: ['**/*.html'],
		    	tasks: ['default'],
		    	options:{
		    		spawn: false,
		    	},
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-develop');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('serve', ['default', 'develop', 'watch']);
};