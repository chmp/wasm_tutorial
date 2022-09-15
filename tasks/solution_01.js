const module = await WebAssembly.compile(module_data);

console.log("Imports");
WebAssembly.Module.imports(module).forEach(imp => console.log(imp));

console.log("Exports");
WebAssembly.Module.exports(module).forEach(imp => console.log(imp));
