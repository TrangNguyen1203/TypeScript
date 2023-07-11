// typescript if else
// if(condition)
// {
//     if-statement
// }

const checkAge = (age: number) => {
    if (age > 18) console.log(">>> Tui đã đủ tuổi để sống tự lập!");
    else console.log(">>> Tui vẫn còn bé lắm!")
    age > 6 ? console.log(">>> Tui đủ tuổi xem phim siêu nhân!") : console.log(">>> tui chưa đủ tuổi xem siêu nhân");


}

checkAge(19)