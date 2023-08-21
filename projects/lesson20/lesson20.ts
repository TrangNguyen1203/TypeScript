// TypeScript Rest Parameters
// Rest: phần còn lại
/*
Với TypeScript, Rest prameters có các rules sau:
-1 Function chỉ có 1 tham số duy nhất rest parameter
- Phải là tham số cuối cùng trong danh sách tham số
-Phải sử dụng với array type
Cú pháp: 
const fn = (...res:type[]) => {
    //...
}
 */

const getTotal = (...numbers: number[]) => {
    const total = numbers.reduce((perValue, curValue) => {
        let sum = perValue;
        sum += curValue;
        return sum;
    })
    return total
}

const a = [10, 20, 30];
console.log(">>>Check total: ", getTotal(...a));

const multiply = (n: number, ...arr: number[]) => {
    return arr.map((item) => (n * item));
}

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(">>>Check mảng b sau khi nhân với phần tử 9: ", multiply(9, ...b));

