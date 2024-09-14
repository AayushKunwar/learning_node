# Node builtin globals

## node global 
node has global object

```js
global.companyName = "foobar";
// the global scope variable will automatically be inside the global object

console.log(companyName);
console.log(global)
```

## process
gives the background info of the system
process, process.env

## file specific globals

__filename: gives the name of the current file

__dirname: gives the current directory

require(): used to import module or packages

module, module.exports, exports

# Module system 
There are two module System

1. Common JS (module, module.exports, require)
2. EcmaScript Modules (import, export, export default, export) (use this)

```js
// common JS

module.exports = {fun1, fun2}
// or
module.exports.fun1 = ??;

const {fun1, fun2} = require("./fileName");

// ES6
// are asynchronous
// (because node dont know this by default)
// file extension should be .mjs  
// do this instead
// package json ma "type": "module"
export function foo(){
    //...
}
// or 
export {foo};
// or 
export default function ...

// must be in top level
import {foo} from "./fileName";
```

# inBuilt Modules

- file System (fs)
- URL
- HTTP
- Crypto
- Internationalization
- ... OS, Path, bla bla bla