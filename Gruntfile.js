/**
    Gruntfile.js

    @author:
      - Derek Johnston

    @desc:
      - Provide configuration for the Grunt taskrunner.
*/
module.exports = function (grunt) {
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ["es2015", "react", "stage-0"]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.js'],
            dest: 'dist'
          }
        ]
      }
    }
  });

  // Load NPM Grunt packages.
  grunt.loadNpmTasks("grunt-babel");

  // Configure the Grunt Tasks.
  grunt.registerTask("default", ["babel"]);
};
