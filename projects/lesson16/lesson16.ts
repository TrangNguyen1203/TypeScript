let sum = 0, i = 1;
while (2) {
    sum += i;
    if (i > 10) break;
    i++;
}

console.log(">>> Giá trị của biến sum là: ", sum);

do {
    console.log(">>> Đây là vòng lặp do-while và i = ", i);
    i++;
} while (i < 50);
