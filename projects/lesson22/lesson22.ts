//Typescripst access modifiers
/**
 * Access modifiers cung cấp công cụ về quyền truy cập và sử dụng biến/functions với class
 * Typescript cung cấp 3 Access modifiers:
 * public
 * private
 * protected
 */
class Employee {
    readonly empCode: string;
    readonly empName: string;
    constructor(empCode: string, empName: string) {
        this.empCode = empCode;
        this.empName = empName;
    }
}

let emp = new Employee("123", "Trang");

console.log(">>>Check emp: ", emp);
