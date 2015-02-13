# basic build with node.js and socket.io

## Installation

Do one of the following

* Clone the git repo - git@github.com:andrewbrandwood/node-basic-site.git
* install from bower - bower install node-site-basic

then...  

### Node (Server side setup).

* Open command prompt (or Terminal on mac).
* Navigate to the project root.
* run - npm install
* run - node website.js

### Grunt (Client side setup).

* Open a new command prompt (or Terminal on mac).
* Navigate to public folder from the root of the website
* run - grunt


### Note: issue with namespacing
This is using express 4.11.2 and socket.io 1.3.3
there is an issue with socket.io client  https://github.com/Automattic/socket.io-client/pull/803

if you want to use namespacing.  you should roll back your version of socket.io