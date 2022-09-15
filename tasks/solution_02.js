const imports = {
    wbg: {
        __wbindgen_throw: (messagePtr, messageLen) => { throw new Error("Not implemented"); },
    },
};

const instance = await WebAssembly.instantiate(module, imports);
console.log("instance", instance);
