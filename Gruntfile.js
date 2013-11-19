module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
            dev: {
                options: {
                    file: 'server.js',
                    args: [],
                    ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
                    watchedExtensions: ['js'],
                    watchedFolders: ['app', 'config'],
                    debug: true,
                    delayTime: 1,
                    env: {
                        PORT: 4000,
												NODE_ENV: 'development'
                    },
                    cwd: __dirname										
                }
            },
            exec: {
                options: {
                    exec: 'less'
                }
            }
        }
    });

    // Load NPM tasks 
    grunt.loadNpmTasks('grunt-nodemon');

    // Default task(s)
    grunt.registerTask('default', ['nodemon']);
};