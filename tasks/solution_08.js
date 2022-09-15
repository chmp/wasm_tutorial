{
    let objectPtr;
    {
        const stringLength = 11;
        const stringPtr = instance.exports.__wbindgen_malloc(stringLength);
    
        const uint8View = new Uint8Array(instance.exports.memory.buffer);
        uint8View[stringPtr + 0] = 104;
        uint8View[stringPtr + 1] = 101;
        uint8View[stringPtr + 2] = 108;
        uint8View[stringPtr + 3] = 108;
        uint8View[stringPtr + 4] = 111;
        uint8View[stringPtr + 5] = 32;
        uint8View[stringPtr + 6] = 119;
        uint8View[stringPtr + 7] = 111;
        uint8View[stringPtr + 8] = 114;
        uint8View[stringPtr + 9] = 108;
        uint8View[stringPtr + 10] = 100;
        objectPtr = instance.exports.evenstringlength_new(stringPtr, stringLength);
    }
    
    const returnPtr = instance.exports.__wbindgen_malloc(8);
    instance.exports.evenstringlength_get_message(returnPtr, objectPtr);
    
    let stringPtr, stringLength;
    {
        const uint32View = new Uint32Array(instance.exports.memory.buffer);
        stringPtr = uint32View[returnPtr / 4 + 0];
        stringLength = uint32View[returnPtr / 4 + 1];
    }
    instance.exports.__wbindgen_free(returnPtr, 8);

    {
        const uint8View = new Uint8Array(instance.exports.memory.buffer);
        console.log(uint8View.subarray(stringPtr, stringPtr + stringLength));
    }
    instance.exports.__wbindgen_free(stringPtr, stringLength);
}