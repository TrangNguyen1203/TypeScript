// Interfaces
/**
 * Giới thiệu về interfaces:
 * TypeScript Interface 'định nghĩa' cách chúng ta viết code, bằng cách cung cấp các công cụ để keiemr soát chặt chẽ việc khai báo 'type
 */

interface IPerson {
    readonly firstName: string,
    lastName?: string,
    address: string
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`
}

let person28 = {
    firstName: "Trang",
    // lastName: "Nguyễn",
    address: 'Hà Nội'
}

console.log(getFullName(person28));
