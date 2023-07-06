let test: (string | number)[] = ["Trang"]
test.push()
console.log(">>> Check typescript arr: ", test)

//Tuple types là một biến thể của arr và giúp ép chặt kiểu dữ liệu arr hơn
let skills: (string | number)[] = ['Hỏi dân IT', 25]
skills.push('coding')

//tuple: dataType/size/order
let skills2: [string, number] = ["Trang", 20]