//===============================
//========REST===================
//===============================
// Rest parameter là cú pháp cho phép gộp các tham số còn lại của một hàm thành một mảng duy nhất
let a, b, last;
const arr1 = [1, 2, 3, 4, 5];
[a, b, ...last] = arr1;
console.log(last);
