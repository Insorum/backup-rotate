backup-rotate
=============

Backups rotations should work within backup spans of 1 hour <= time between backups <= 1 day

How it works
------------

When the script it run it will run the backup command given in `backup_command`. It will then look in the `backup_dir` 
directory for files that end in the extensions in `file_exts`. If files are found they are renamed to 
`name-<modify time>.<extension>` and copied into the relevant archive directories.

Folders
-------
`/latest`

This contains the very latest backup. 1 file only

`/hourly`

This directory contains all backups from the last 24 hours. Each file in `/latest` is copied here. May contain > 24
files if files are backed up more frequently than every hour

`/daily` 

This direcotry contains backups from previous days. When a file is backed up with a modify time on a new day, the 
previous backed up file is moved here.

`/weekly`

This directory contains backups from previous weeks. Contains up to `weekly_count` weeks worth of files. When a file is
backed up with a modify time on a new week, the previous backed up daily file is moved here.

Config Format
-------------

Example config:

    {
        "backup_command": "cp /opt/something/data /var/backups/",
        "backup_dir": "/var/backups",
        "archive_dir": "/var/backups/archive",
        "file_exts": [".tar", ".tar.gz", ".tar.bz2", ".zip"],
        "weekly_count": 10
    }    
    