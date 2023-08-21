// readonly: thuộc tính chỉ đọc
class Person {
    readonly birthDay: Date;
    constructor(birth: Date) {
        birthDay: birth
    }
}

let person = new Person(new Date(1990, 12, 25));
// person.birthDay = new Date(1991,12,25);