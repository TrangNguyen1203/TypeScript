// continue
//Bài 1:
//Viết một chương trình TypeScript để tìm tất cả các số nguyên dương từ 1 đến 1000 chia hết cho 5 hoặc 7, sử dụng từ khóa continue để bỏ qua các số không phù hợp.In ra mảng các số tìm được.
const arrNumber: number[] = [];
const findAllInt = () => {
    for (let i = 1; i <= 1000; i++) {
        if (i % 5 != 0 && i % 7 != 0) {
            continue;
        } else arrNumber.push(i);

    }
}
findAllInt();
console.log(">>> Các số chia hết cho 5 và 7 là: ", arrNumber);
/*
Viết một chương trình TypeScript để tìm tất cả các số nguyên dương từ 1 đến 1000 chia hết cho 5 hoặc 7 nhưng không chia hết cho cả 5 và 7 đồng thời, sử dụng từ khóa continue để bỏ qua các số không phù hợp. In ra mảng các số tìm được.
*/
const numbers: number[] = []
const abc = () => {
    for (let i = 1; i <= 1000; i++) {
        if (i % 5 !== 0 && i % 7 !== 0 || ((i % 5 == 0 && i % 7 == 0))) {
            continue
        } else numbers.push(i)
    }
}

abc()
console.log(">>> Check mảng chia hết cho 5 hoặc 7 nhưng không chia hết cho cả hai: ", numbers);
