// Giới thiệu union type

const addNumberOrString = (a: number | string, b: number | string) => {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a.concat(' ').concat(b);
    throw Error('Parameters must be numbers or strings')
}

// addNumberOrString("Trang", 16)
console.log(">>> check addNumberOrString: ", addNumberOrString(16, 5))
console.log(">>> check addNumberOrString: ", addNumberOrString("Nguyễn Thị", "Trang"))

