# React Native Starter

A basic React-Native project to be used as a starting point for a new React Native project. 

It includes a good set of web development tools; Prettier, ESLint, Flow & Jest.  It is configured so that when files are git staged they will be linted, prettied and tested before being commited.

## Project Includes:

* [React-Native v0.56.0](https://facebook.github.io/react-native/) - The JavaScript framework
* [React 16.4.1](https://github.com/facebook/react/) - Flexible JavaScript library for building user interfaces
* [ESlint 5.3.0](https://eslint.org/) - An open source JavaScript linting utility
* [eslint-config-airbnb 17.1.0](https://www.npmjs.com/package/eslint-config-airbnb) - Airbnb's eslint config
* [Flow 0.75.0](https://flow.org/) Static type-checker for JavaScript
* [Prettier 1.14.2](https://github.com/prettier/prettier) - Opinionated code formatter
* [lint-staged 7.2.2](https://github.com/okonet/lint-staged) - Run linters against staged git files before commits   
    
## How to create/start a new project
I created this repo to help me learn React Native and give me a good starting point for new React Native projects.  One problem with using a boilerplate project like this is that React Native does not have an easy way to rename your project. So to solve that problem we'll use the node package [react-native-rename](https://www.npmjs.com/package/react-native-rename).  You can install it using:

```
yarn global add react-native-rename
or
npm install react-native-rename -g
```

So to create a new project the steps are

```
git clone https://github.com/szaske/RNStarter.git
cd RNStarter
yarn
react-native-rename <newname>
```

## License

Copyright 2018 [Steve Zaske](https://github.com/szaske)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

