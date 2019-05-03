# @legendaryrob/countrify

[![npm (scoped)](https://img.shields.io/npm/v/@legendaryrob/countrify.svg)](https://github.com/Ruberto/countrify) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@legendaryrob/countrify.svg)](https://github.com/Ruberto/countrify)

## Install
`$ npm install @legendaryrob/countrify`

## Usage
```javascript
const tiny = require("@legendaryrob/countrify")

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//     at tiny (<anonymous>:2:41)
//     at <anonymous>:1:1
```