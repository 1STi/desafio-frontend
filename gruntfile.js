module.exports = grunt => {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON("package.json"),
		concat: {
			dist: {
				src: [
					"public/js/helpers/*.js",
					"public/js/services/*.js",
					"public/js/views/View.js",
					"public/js/views/CapitalsView.js",
					"public/js/views/CardView.js",
					"public/js/controllers/*.js"
				],
				dest: "public/js/app.es6.js",
			},
		},
		babel: {
	        options: {
	            presets: ["es2015"]
	        },
	        dist: {
	            files: [{
	                src: ["public/js/app.es6.js"],
	                dest: "public/js/app.js"
	            }]
	        }
	    },
	    uglify: {
		   	dist: {
				options: {
					sourceMap: true
				},
				files: {
					"public/js/app.min.js": ["public/js/app.js"],
				}
		   }
		},
		sass: {
			options: {
	      		style: "expanded",
	      		sourcemap: "none"
		    },
			dist: {
				files: {
		        	"public/css/style.css": "public/css/style.scss"
	      		}
			}
	  	},
		cssmin: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					"public/css/style.min.css": ["public/css/style.css"]
				}
			}
		}
	})

	grunt.registerTask("default", ["sass", "cssmin", "concat", "babel", "uglify"]);
}