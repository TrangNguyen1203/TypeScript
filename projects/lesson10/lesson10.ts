const handleException = (errorMessage: string) => {
    throw Error(errorMessage);
}

handleException("Nguyễn Thị Trang")

// Kiểu dữ liệu never không trả về bất kỳ dữ liệu nào
// còn void vẫn trả về kiểu underfine