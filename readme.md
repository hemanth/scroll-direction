# scroll-direction

> Get the scroll direction!

## Install

```
$ npm install --save scroll-direction
```


## Usage

```js
const scrollDirection = require('scroll-direction');

scrollDirection(window, direction => (console.log(direction))); 
```

## API

### scrollDirection(domElement, cb)

#### domElement

Type: `node`

The DOM element on which you are intrested to listen on scroll.

#### cb

Type: `function`

The `callback` function, which responds with the `direction`

P.S: `direction` -> `1` is scroll up and `0` is scroll down.


## License

MIT © [Hemanth.HM](https://h3manth.com)
