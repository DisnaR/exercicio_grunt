module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        files: {
          "dist/main.css": "main.less"
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'dist/main.min.js': ['*.js']
        }
      }
    }
  });

  // Carregar os plugins do Grunt
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tarefa padrão
  grunt.registerTask('default', ['less', 'uglify']);
};
