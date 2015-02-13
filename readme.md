# basic build with node.js and socket.io

## Installation

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