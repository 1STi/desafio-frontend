# Weather

![Weather]("https://github.com/Jessica7/desafio-frontend/assets/images/wheater-icon.png")

Description

> NOTE: I choose include the sass on project, because some third libs can has files writed
using sass.
When you to install the node-sass module frequently happen some errors
and the mostly comuns are fixed:
- [The libsass binding was not found](https://github.com/sass/node-sass/issues/1162)
- [Error: Missing binding](https://github.com/sass/node-sass/issues/1527)

## Stack:

**Front-End:**
* ReactJS
* Redux
* Stylus
* Webpack

**Back-End**
* Node
* Express

### Run the project locally

### Prepare the environment:

You must install:
* Node 6
* Webpack
* BrowserSync is a global module
* Babel
* node-sass global

### Install the dependencies:

Local dependences
```
npm install
// or
sudo npm install
```

Global dependences
```
npm install -g browser-sync
npm install -g node-sass
```

### Start project

```JS
npm run dev
```

You can view the app on the url `http://localhost:4000`.

### Improves:

. Add transition on card
. Remove especial characters, spaces on search and transform in lowercase.
. Using debouce on search
. Using geolocation when the browser has support
. TDD
. Media querys of iphone
. Create message on search not found
. Make a loader
. Calculate thermal sensation
. Create autocomplete
. Create sort list
. acentuação
. translation
. Show all citie's capitals
. When to click in a capital to loading information on the card
. Create loading action when to make the second search to active loader again
>>>>>>> jessicanascimento
