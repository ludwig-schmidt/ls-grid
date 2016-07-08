module.exports = function(grunt) {



    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {                    
            dist: {                  
                options: {        
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {                         
                    'sass/_compiled/style.css': 'sass/style.sass'      
                }
            }
        },

        postcss: {

            options: {
                processors: [
                    require('autoprefixer')(),
                ]
            },
            dist: {
                src: 'sass/_compiled/style.css',
                dest: 'deploy/style.css'
            }

        },


    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');


    grunt.registerTask('default', ['sass']);
};