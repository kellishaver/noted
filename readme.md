Noted
=====

A simple NodeJS note taking app for the command line.

### Installation:

Clone the repo:

    git clone git@github.com:kellishaver/noted.git

From within the directory, install node modules:

    npm install

### Usage

Run the app without any paramaters to see a list of commands.

    node app.js

### Make an Alias

For your convenience, set up an alias for the app inside of your `.bash_profile` or `.profile`

    alias noted="node /path/to/app.js"

Then reload:

    source .bash_profile

or

    source .profile

Next, you must update the notes save path to use an absolute path. Otherwise, you can't run it outside of the notes directory (which kind of defeats the purpose of making a handy alias).

Open notes.js and change

    const path = "./data/notes.json"

to the full path for your data file, e.g.:

    const path = "/home/kelli/notes/data/notes.json"

Now you can simply run the `notes` command, e.g.:

    noted list

  