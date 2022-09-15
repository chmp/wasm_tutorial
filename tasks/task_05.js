console.log(
    "Task 5: construct an adder object, call it's add function and free it" +
    "\n\n" +
    "Equivalent Python class:" +
    "\n\n" +
    "    class Adder:\n" +
    "        def __init__(self, value: int):\n" +
    "            self.value = value\n" +
    "\n" +
    "        def add(self, other: int):\n" +
    "            return self.value + other\n" +
    "\n\n" +
    "Exported functions:" + 
    "\n\n" +
    "- `adder_new(value: int32) -> uint32` returns the ptr of the object\n" + 
    "- `adder_add(ptr: uint32, other: int32) -> int32`\n" +
    "- `__wbg_adder_free(ptr: uint32)`\n" +
    "\n\n"
);