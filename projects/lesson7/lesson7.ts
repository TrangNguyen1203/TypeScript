//Enum: (liệt kê ) là 1 nhóm các giá trị hằng số
enum API_STATUS {
    PENDDING = "PENDDING",
    FULFILLED = "FULFILLED",
    REJECTED = "REJECTED"
}
enum API_STATUS1 {
    PENDDING,
    FULFILLED,
    REJECTED
}
let a = API_STATUS.FULFILLED;
let b = API_STATUS.REJECTED;
console.log(">>> check enum: ", a, b);

// frontend: syntax
