{
    const uint32View = new Int32Array(instance.exports.memory.buffer);
    const ptr = instance.exports.adder_new(42);

    for(let i = 0; i < 5; i++) {
        console.log(ptr / 4 + i, uint32View[ptr / 4 + i]);
    }
    instance.exports.__wbg_adder_free(ptr);
}
