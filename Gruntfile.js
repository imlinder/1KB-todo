module.exports = function(grunt){

  grunt.initConfig({

    inline: {
      dist: {
        options:{
            cssmin: true,
            uglify: true,
            tag: ''
        },
        src: [ 'src/index.html' ],
        dest: [ 'dist/index.html' ]
      }
    },

    htmlmin: {
        dist: {
            options: {
              removeComments: true,
              collapseWhitespace: true
            },
            files: {
              'dist/index.html': 'dist/index.html'
          }
      }
    },

    watch: {
        files: ['src/**/*'],
        tasks: ['default'],
      }

  });

  grunt.registerTask('default', ['inline', 'htmlmin']);
  grunt.registerTask('watch', ['default', 'watch']);


  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};