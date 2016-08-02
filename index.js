'use strict';
const isDOM = require('is-dom');
const isFunction = require('is-function');
let pervScrollTop = 0;

module.exports = (element,cb) => {
  
  if (!(isDOM(element))) {
    throw new Error('Expected a DOM element.');
  }

  if (!(isFunction(cb))) {
    throw new Error('Expected a callback.');
  }

  element.addEventListener('scroll',() => { 
     let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
     if (currentScrollTop > pervScrollTop) {
        pervScrollTop = currentScrollTop;
        return cb(0);
     } else {
        pervScrollTop = currentScrollTop;
        return cb(1);
     }
     pervScrollTop = currentScrollTop;
  }, false);
};
