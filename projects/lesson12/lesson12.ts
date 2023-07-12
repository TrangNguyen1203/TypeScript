// type aliases cho phép chúng ta tạo mới 
//1 kiểu type từ những type đã tồn tại
//Cú pháp: type alias = existingType
type itemType = number | string;
const addNumberOrStringOther = (a: itemType, b: itemType) => {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a.concat(' ').concat(b);
    throw Error('Parameters must be numbers or strings')
}

// addNumberOrString("Trang", 16)
console.log(">>> check addNumberOrStringOther: ", addNumberOrStringOther(16, 5))
console.log(">>> check addNumberOrStringOther: ", addNumberOrStringOther("Nguyễn Thị", "Trang"))

