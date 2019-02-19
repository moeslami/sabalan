## Basic usage

```js
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
```

To use jsdom, you will primarily use the `JSDOM` constructor, which is a named export of the jsdom main module. Pass the constructor a string. You will get back a `JSDOM` object, which has a number of useful properties, notably `window`:

```js
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
```

(Note that jsdom will parse the HTML you pass it just like a browser does, including implied `<html>`, `<head>`, and `<body>` tags.)

The resulting object is an instance of the `JSDOM` class, which contains a number of useful properties and methods besides `window`. In general, it can be used to act on the jsdom from the "outside," doing things that are not possible with the normal DOM APIs. For simple cases, where you don't need any of this functionality, we recommend a coding pattern like

```js
const { window } = new JSDOM(`...`);
// or even
const { document } = (new JSDOM(`...`)).window;
```
