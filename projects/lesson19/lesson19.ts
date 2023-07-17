// lesson 19: optional params
let sum4 = (a: number, b: number, c?: number) => {
    if (c) return a + b + c
    else return a + b
}

// c: optional parameter

console.log(">>> Kết quả của sum4: ", sum4(4, 6));
// default parameter

let sum5 = (a: number, b: number, c: number = 0) => {
    return a + b + c;
}

console.log(">>> Check sum5: ", sum5(5, 1));

