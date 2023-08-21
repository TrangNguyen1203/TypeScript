// TypeScript Inheritance

/*
 * Một class có thể tái sử dụng lại thuộc tính và method cảu class khác.
 * Đây gọi là kế thừa.
 * Tương tự việc "con cái" kế thừa hưởng lại tài sản(properities/method) 'cha mẹ' để lại.
 * Bằng cách sử dụng tính năng kế thừa, chúng ta không cần phải 'code lại' class đã có sẵn
 */

class Person3 {
    constructor(private firstName: string, private lastName: string) {
        this.lastName = lastName,
            this.firstName = firstName
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}`
    }
}

// Để kế thừa 1 class, chúng ta sử dụng keyword extends
//overwrite, overloading: ghi đề method

class Employee1 extends Person3 {
    private jobTitle: string;
    constructor(
        firstName: string,
        lastName: string,
        jobTitle: string
    ) {
        super(firstName, lastName)
        this.jobTitle = jobTitle
    }
    describe(): string {
        return `describe: ${super.describe()}`;
    }
}


let Employee2 = new Employee1("Trang", "Nguyễn", "Sinh Viên")
// console.log(">>>Check empolyee2: ", Employee2);
console.log(">>>Check Employee's fullName: ", Employee2.describe());

