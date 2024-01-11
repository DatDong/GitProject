function isPalindrome(s) {
    // Loại bỏ khoảng trắng và chuyển đổi tất cả thành chữ cái viết thường
    s = s.replace(/\s/g, '').toLowerCase();

    // Kiểm tra độ dài chuỗi
    if (s.length <= 1) {
        return true; // Nếu chuỗi có 0 hoặc 1 ký tự, nó luôn là chuỗi đối xứng
    } else {
        // So sánh ký tự đầu tiên và cuối cùng của chuỗi
        if (s[0] === s[s.length - 1]) {
            // Nếu giống nhau, đệ quy kiểm tra phần còn lại của chuỗi
            return isPalindrome(s.slice(1, s.length - 1));
        } else {
            return false; // Nếu không giống nhau, chuỗi không đối xứng
        }
    }
}

// Test
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("hello"));   // false