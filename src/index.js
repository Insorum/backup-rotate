console.log('WARNING: Script incomplete, work in progress');

var argv = require('minimist')(process.argv.slice(2));
var path = require('path');

// if parameter isnt set look for config.js/json/node in the working directory
if(!argv.c) {
    argv.c = './config';
}

// attempt to load the config file
try {
    var config = require(path.resolve(process.cwd(), argv.c));
} catch(err) {
    console.error('Must provide a valid config file location');
    return;
}

// check our config parameters exist
if(!config.hasOwnProperty('backup_command')) {
    console.error('Config file requires a backup_command parameter');
    return;
}

if(!config.hasOwnProperty('backup_dir')) {
    console.error('Config file requires a backup_dir parameter');
    return;
}

if(!config.hasOwnProperty('archive_dir')) {
    console.error('Config file requires a archive_dir parameter');
    return;
}

if(!config.hasOwnProperty('file_exts') || !(config.file_exts instanceof Array)) {
    console.error('Config file requires a file_exts array parameter');
    return;
}

if(!config.hasOwnProperty('weekly_count')) {
    console.error('Config file requires a weekly_count parameter');
    return;
}

console.log(config);