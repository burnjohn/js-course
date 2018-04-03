// Common js

define(function(require, exports, module) {

  var encodeToASCII = require("encoder").encodeToASCII;

  exports.encodeSomeSource = function() {
    // Обработка изображения, затем вызов encodeToASCII
  }

});


// Require JS

function myModule() {
  this.hello = () => "hello!";

  this.goodbye = () => "goodbye!";
}

module.exports = myModule;


// index.js
const myModule = require("myModule");

const myModuleInstance = new myModule();

myModuleInstance.hello(); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!'