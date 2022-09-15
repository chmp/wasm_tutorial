console.log(
    "Task 7: construct EvenStringLengthCopy object and check whether the " +
    "passed string has an even length" +
    "\n\n" +
    "Equivalent Python class:" +
    "\n\n" +
    "    class EvenStringLengthCopy:\n" +
    "        def __init__(self, msg: str):\n" +
    "            self.msg = msg\n" +
    "\n" +
    "        def is_message_len_even(self):\n" +
    "            return len(self.msg) % 2 == 0\n"+
    "\n" +
    "        def get_message(self):\n" +
    "            return self.message\n" +
    "\n" +
    "        def get_first_part(self):\n" + 
    "            return self.message.split()[0]\n" +
    "\n" +
    "Example string byte values:\n" +
    "\n" + 
    "    [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]\n" +
    "\n" + 
    "Exported functions:\n" +
    "\n" +
    "- `__wbindgen_malloc(size: uint32)`\n" + 
    "- `evenstringlength_new(stringPtr: uint32, stringLength: uint32) -> uint32`\n" + 
    "- `evenstringlength_is_message_len_even`(objectPtr: uint32) -> uint32\n" +
    "- `__wbg_evenstringlength_free(objectPtr: uint32)`\n" +
    "\n\n"
);
