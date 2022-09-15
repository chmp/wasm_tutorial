console.log(
    "Task 4: access the imported memory as an `UInt8Array` and an " + 
    "`UInt32Array`, print the memory and array sizes and dump out the " + 
    "first 16 bytes (or the first 4 Int32 values) "+ 
    "\n\n" +
    "The memory is exported under the name `\"memory\"`." +
    "\n\n" +
    "Warning: WebAssembly memory can be resized from within the " +
    "WebAssembly module. This operation will reset the array views (in " +
    "this case the  byteLength / length of the array views will be zero)." +
    "\n\n" + 
    "Relevant API:" + 
    "\n\n" + 
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory\n" +
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array\n" +
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array\n" +
    "\n\n"
)
