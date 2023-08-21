// TypeScript Static Methods and Properties

/**
 * Để truy cập 1 thuộc tính static: <ClassName> <StaticMember>
 * chúng ta sử dụng class name và do notation, mà không cần "tạo mới" 1 object
 */

class Circle {
    static pi: number = 3.14;
    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}

console.log(">>>Check pi: ", Circle.pi);
console.log(">>>Check calculateArea: ", Circle.calculateArea(5));

