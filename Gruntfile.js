module.exports = function(grunt){
    'use strict';

    require('time-grunt')(grunt);

    require('jit-grunt')(grunt, {
        sass_compile_imports: 'grunt-sass-compile-imports',
        validation: 'grunt-html-validation'
    });


    grunt.initConfig({
        pkg:           grunt.file.readJSON('package.json'),
        configSass:    grunt.file.readJSON('_config/sass.json'),
        configProject: grunt.file.readJSON('_config/project.json'),

        sass: {
            dist: {
                files: {
                    '<%= configProject.prod %><%= configProject.dirs.styles %>screen.css': '<%= configProject.src %><%= configProject.dirs.styles %>screen.scss',
                    '<%= configProject.prod %><%= configProject.dirs.styles %>ie8.css': '<%= configProject.src %><%= configProject.dirs.styles %>ie8.scss',
                    '<%= configProject.prod %><%= configProject.dirs.styles %>ie9.css': '<%= configProject.src %><%= configProject.dirs.styles %>ie9.scss'
                }
            }
        },

        watch: {
            files: ['<%= configProject.src %><%= configProject.dirs.styles %>**/*.scss', '<%= configProject.dirs.components %>**/*.scss'],
            tasks: ['sass']
        },

        sass_compile_imports: {
            components: {
                target: '<%= configProject.src %><%= configProject.dirs.styles %>_partials.scss',
                files: [{
                    expand: true,
                    cwd   : '<%= configProject.dirs.components %>',
                    src   : ['**/*.scss']
                }]
            }
        },

        // ### Autoprefixer
        // NPM: grunt-autoprefixer
        //
        // Parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.
        autoprefixer: {
            main: {
                options: {
                    browsers: ['last 2 version']
                },
                src: '<%= configProject.prod %><%= configProject.dirs.styles %>screen.css',
                dest: '<%= configProject.prod %><%= configProject.dirs.styles %>screen.css'
            },
            IE8: {
                options: {
                    browsers: ['ie 8']
                },
                src: '<%= configProject.prod %><%= configProject.dirs.styles %>ie8.css',
                dest: '<%= configProject.prod %><%= configProject.dirs.styles %>ie8.css'
            },
            IE9: {
                options: {
                    browsers: ['ie 9']
                },
                src: '<%= configProject.prod %><%= configProject.dirs.styles %>ie9.css',
                dest: '<%= configProject.prod %><%= configProject.dirs.styles %>ie9.css'
            }
        },

        validation: {
            options: {
                reset: grunt.option('reset') || false,
                reportpath: '<%= configProject.dirs.reports %>html-validation/validation-report.json',
                statuspath: '<%= configProject.dirs.reports %>html-validation/status-report.json'
            },
            files: {
            src: ['index.html']
            }
        },
        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: '<%= configProject.prod %><%= configProject.dirs.styles %>',
              src: ['*.css', '!*.min.css'],
              dest: '<%= configProject.prod %><%= configProject.dirs.styles %>',
              ext: '.min.css'
            }]
          }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
              files: [{
                expand: true,                  // Enable dynamic expansion
                cwd: '<%= configProject.src %><%= configProject.dirs.images %>',                   // Src matches are relative to this path
                src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                dest: '<%= configProject.prod %><%= configProject.dirs.images %>'                  // Destination path prefix
              }]
            }
          }
    });

    
    grunt.registerTask('default', ['sass_compile_imports:components','sass', 'autoprefixer', 'watch']);
    grunt.registerTask('prod', ['cssmin', 'imagemin']);
    
    grunt.registerTask('validate', ['validation']);
};