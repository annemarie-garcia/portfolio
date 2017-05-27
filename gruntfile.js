module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.initConfig({
        concat: {
            dist: {
                src: [
                    'src/js/jquery-3.2.1.min.js',
                    'src/js/bootstrap.min.js',
                    'src/js/scripts.js'  // This specific file
                ],
                dest: 'dist/js/production.js',
            }
        },
        responsive_images: {
                dev: {
                    options: {
                        sizes: [{
                            width: 400
                        },{
                            width: 800
                        },
                        {
                            width: 1600
                        }]
                    },
                    files: [{
                        expand: true,
                        src: ['**/*.{gif,jpeg,jpg,png}'],
                        cwd:'src/images/',
                        dest: 'dist/images/'
                    }]
                }
        }
   });

    //orders it to execute the task.
    grunt.registerTask('default', [
        'concat',
        'responsive_images'
    ]);
}