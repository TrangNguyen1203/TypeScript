// type annotations: ép buộc chính xác kiểu dữ liệu 
const nameUser: string = "Trang"
console.log(">>> Chieu dai cua chuoi: ", nameUser.length)
console.log(">>> Chuoi sau khi viet hoa: ", nameUser.toUpperCase())

let names2: number[] = [12, 10, 2003]
console.log(">>>Check names2: ", names2)
// Type  Inference: Tự động gán kiểu dữ liệu
let test = [12, 10, 2003, "Trang"]
console.log(">>> check test: ", test)
console.log(typeof test)

// Kiểu dữ liệu number
let x: number = 5;
// Với kiểu dữ liệu cực lớn bạn có thể khai báo với kiểu dữ liệu bigint