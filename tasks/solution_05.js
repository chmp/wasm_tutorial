{
    const ptr = instance.exports.adder_new(2);
    console.log("2 + 3 =>", instance.exports.adder_add(ptr, 3));
    instance.exports.__wbg_adder_free(ptr);
}
