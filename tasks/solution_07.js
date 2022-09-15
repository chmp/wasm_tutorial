{
    const stringLength = 11;
    const stringPtr = instance.exports.__wbindgen_malloc(stringLength);
    {
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
    }
    const objectPtr = instance.exports.evenstringlength_new(stringPtr, stringLength);
    console.log("is even?", instance.exports.evenstringlength_new(objectPtr) == 0);

    {
        const uint32View = new Uint32Array(instance.exports.memory.buffer);
        for(let i = 0; i < 5; i++) {
            console.log(`[${i}]: ${uint32View[objectPtr / 4 + i]}`);
        }
        console.log(".");

        const stringPtr = uint32View[objectPtr / 4 + 1];
        const stringLength = uint32View[objectPtr / 4 + 2];
        const uint8View = new Uint8Array(instance.exports.memory.buffer);
        
        for(let i = 0; i < stringLength; i++) {
            console.log(`[${i}] ${uint8View[stringPtr + i]}`)
        }
    }


    instance.exports.__wbg_evenstringlength_free(objectPtr);
}
