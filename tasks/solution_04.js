{
    const uint8View = new Uint8Array(instance.exports.memory.buffer);
    const uint32View = new Uint32Array(instance.exports.memory.buffer);

    console.log("memory size      ", instance.exports.memory.buffer.byteLength);
    console.log("memory size [u8] ", uint8View.length);
    console.log("memory size [u32]", uint32View.length);

    console.log("Bytes:");
    for(let i = 0; i < 16; i++) {
        console.log(uint8View[i]);
    }

    console.log("Ints:");
    for(let i = 0; i < 4; i++) {
        console.log(uint32View[i]);
    }
}
