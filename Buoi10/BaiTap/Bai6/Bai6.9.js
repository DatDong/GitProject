
function countOccurrences(arr, char) {
    const filteredChars = arr.filter(element => element === char);

    if (filteredChars.length > 0) {
        return filteredChars.length;
    } else {
        return -1;
    }
}

// Kiểm tra ví dụ
const charArray = ['a', 'b', 'c', 'a', 'd', 'e'];
const searchChar = 'a';

const occurrences = countOccurrences(charArray, searchChar);

if (occurrences !== -1) {
    console.log(`Ký tự '${searchChar}' xuất hiện ${occurrences} lần trong mảng.`);
} else {
    console.log(`Ký tự '${searchChar}' không xuất hiện trong mảng.`);
}
