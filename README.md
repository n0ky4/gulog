<h1 align="center">
    gulog
</h1>

> A simple console logger.

## Install

```console
$ npm install gulog
```

## Usage

```js
const log = require('gulog');

// All possible options
log.setup({
    prefix: "[My Application]",
    prefix_color: "magenta",
    info: {
        prefix: "[INFO]",
        prefix_color: "cyan",
        text_color: "blue",
        show_prefix: false
    },
    error: {
        prefix: "[ERROR MESSAGE WOW]",
        prefix_color: "red",
        text_color: "red",
        show_prefix: true
    },
    warning: {
        prefix: "[WARNING MESSAGE WOW]",
        prefix_color: "yellow",
        text_color: "white",
        show_prefix: true
    }
});

log.info("Hey!");
log.error("This is a error :o");
log.warn("This is a warning :o");
```

### Result

<img src="media/example_result.png" />