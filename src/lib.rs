use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(x: i32, y: i32) -> i32 {
    x + y
}

#[wasm_bindgen]
pub struct Adder {
    value: i32,
}

#[wasm_bindgen]
impl Adder {
    #[wasm_bindgen(constructor)]
    pub fn new(value: i32) -> Self {
        Self { value }
    }

    pub fn add(&self, other: i32) -> i32 {
        self.value + other
    }
}

#[wasm_bindgen]
pub struct EvenStringLength {
    msg: String
}

#[wasm_bindgen]
impl EvenStringLength {
    #[wasm_bindgen(constructor)]
    pub fn new(msg: String) -> Self {
        Self { msg }
    }

    pub fn is_message_len_even(&self) -> bool {
        self.msg.len() % 2 == 0
    }

    pub fn get_message(&self) -> String {
        self.msg.clone()
    }
}
