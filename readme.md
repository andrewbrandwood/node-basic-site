# Basic site setup build with node.js

This repository sets you up with a ready to run node.js website using express.

The site uses [Gulp](https://www.google.com) as a task runner.

The site is setup to use Harry Roberts [csswizardry's](https://github.com/csswizardry) ITCSS (inverted triangle) methodology. See [Managing CSS Projects with ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) for further details.

This setup is purposely light of gulp tasks and does the very basics to get you up and running. It is highly recommended that you add minification tasks for any production code.

## Installation

Do one of the following

* Clone the git repo - [git@github.com:andrewbrandwood/node-basic-site.git](git@github.com:andrewbrandwood/node-basic-site.git)
* install from bower - bower install node-site-basic

then...	  

### Node (Server side setup).

* Open command prompt (or Terminal on mac).
* Navigate to the project root.
* run - npm install
* run - node website.js

### Gulp (Client side setup).

* Open a new command prompt (or Terminal on mac).
* Navigate to the project root.
* run - gulp
