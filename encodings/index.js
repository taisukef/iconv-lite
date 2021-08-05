//export { internal } from "./internal.js";
import utf32 from "./utf32.js";

const modules = [
    utf32,
];

/*
// Update this array if you add/rename/remove files in this directory.
// We support Browserify by skipping automatic module discovery and requiring modules directly.
var modules = [
    require("./internal"),
    require("./utf32"),
    require("./utf16"),
    require("./utf7"),
    require("./sbcs-codec"),
    require("./sbcs-data"),
    require("./sbcs-data-generated"),
    require("./dbcs-codec"),
    require("./dbcs-data"),
];
*/

// Put all encoding/alias/codec definitions to single object and export it.
const exports = {};

for (const module of modules) {
    for (const enc in module) {
        if (Object.prototype.hasOwnProperty.call(module, enc)) {
            exports[enc] = module[enc];
        }
    }
}

export default exports;
