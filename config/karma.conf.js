'use strict';
module.exports = function (karma) {karma.set({
  basePath : '../',
  files : [
    'app/lib/angular/angular.js',
    'app/lib/angular/angular-*.js',
    'test/lib/angular/angular-mocks.js',
    'app/js/**/*.js',
    'test/unit/**/*.js'
  ],
  frameworks: ["jasmine"],
  autoWatch : true,
  browsers : ['Chrome'],
  junitReporter : {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
  }
})}
