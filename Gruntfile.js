/**
    Gruntfile.js

    @author:
      - Derek Johnston

    @desc:
      - Provide configuration for the Grunt taskrunner.
*/
var path = require("path");

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
    },
    webpack: {
      default: {
        entry: {
          index: "./dist/client/index.js"
        },
        output: {
          path: path.join(__dirname, "public/scripts"),
          filename: "[name].bundle.js"
        }
      }
    }
  });

  // Load NPM Grunt packages.
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-webpack");

  // Configure the Grunt Tasks.
  grunt.registerTask("default", ["babel", "webpack"]);
};
