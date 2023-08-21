// TYPESCPRIPT GETTERS AND SETTER

class Person1 {
    private _age: number;
    private firstName: string;
    private lastName: string;
    constructor(age: number, firstName: string, lastName: string) {
        this._age = age,
            this.firstName = firstName,
            this.lastName = lastName
    }
    get age() {
        return this._age;
    }
    set age(age: number) {
        if (age < 0) {
            throw Error("Tuổi không thể nhỏ hơn không được:>")
        } else {
            this._age = age
        }
    }
}

let person1 = new Person1(29, "Trang", "Nguyễn");
person1.age = 20;

// person1.setAge(19);
console.log(">>>Check person1: ", person1.age);
