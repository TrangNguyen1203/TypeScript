// TypeScript abstract classes

// Cú pháp: abstract class Employee{//...}
/**
 * Một abstract class có thể chứa:
 *      1 hoặc nhiều 'normal' method
 *      1 hoặc nhiều abstract method: đối với loại này, không chứa phần body, chỉ định nghĩa tên method
 */

abstract class Employee5 {
    constructor(private firstName: string, private lastName: string) {

    }
    abstract getSalary(): number;

    // normal method
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()}  a month.`
    }
}

class FullTimeEmployee extends Employee5 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName)
    }
    getSalary(): number {
        return this.salary;
    }
}

const test1 = new FullTimeEmployee("Trang", "Nguyễn", 2000);
console.log(">>>Check salary: ", test1.getSalary());
