// Typescript function overloading
/**
 * Lưu ý: Overloading của TypeScript khác với các ngôn ngữ lập trình khác, ví dụ C# hay java
 */

function addNumbers(a: number, b: number) {
    return a + b;
}

function addString(a: string, b: string) {
    return a.concat(" ").concat(b);
}

function addNumbersOrStrings(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b
    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}

function addNew(a: number, b: number): number;
function addNew(a: string, b: string): string;
function addNew(a: any, b: any) {
    return a + b;
}

console.log(">>>check add new: ", addNew("Nguyễn Thị ", "Trang"));


