"use strict";
module.exports = function(grunt){
    grunt.initConfig({
        jshint: {
            test: {
                src: ['js/lib/*.js','js/*.js']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
