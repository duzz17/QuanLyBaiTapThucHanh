// ===============================================
// JAVASCRIPT OPERATORS
// ===============================================

// =================================================
// 1. ASSIGNMENT OPERATOR (=)
// =================================================

console.log("===== Assignment Operator(toán tử gán) =====");

let x = 10;
console.log(x);

let y = 5;
let z = x + y;

console.log(z);

// =================================================
// 2. ARITHMETIC OPERATORS
// =================================================

console.log("\n===== Arithmetic Operators =====");

let a = 10;
let b = 3;

console.log("Cộng (+):", a + b);
console.log("Trừ (-):", a - b);
console.log("Nhân (*):", a * b);
console.log("Chia (/):", a / b);
console.log("Chia lấy dư (%):", a % b);
console.log("Lũy thừa (**):", a ** b);

let count = 5;

console.log("trước khi ++ :", count);
count++;
console.log("sau khi ++ :", count);

console.log("trước khi -- :", count);
count--;
console.log("sau khi -- :", count);

// =================================================
// 3. STRING CONCATENATION (+)
// =================================================

console.log("\n===== Cộng chuỗi, ghép chuỗi =====");

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

console.log(fullName);

let text = "Hello ";
text += "World";

console.log(text);

console.log(5 + 5); // 10
console.log("5" + 5); // "55", chuỗi + số => chuỗi
console.log("Hello " + 5); // "Hello 5"

// =================================================
// 4. ASSIGNMENT OPERATORS
// =================================================

console.log("\n===== Assignment Operators =====");

let number = 10;

console.log("Original:", number);

number += 5;
console.log("+= :", number);

number -= 3;
console.log("-= :", number);

number *= 2;
console.log("*= :", number);

number /= 4;
console.log("/= :", number);

number %= 3;
console.log("%= :", number);

number **= 2;
console.log("**= :", number);

// =================================================
// 5. Toán Tử so sánh (Comparison Operators)
// =================================================

console.log("\n===== Comparison Operators =====");

let n1 = 5;
let n2 = "5";

console.log("==  :", n1 == n2); // true, so sánh giá trị
console.log("=== :", n1 === n2); // false, so sánh giá trị và kiểu dữ liệu
console.log("!=  :", n1 != n2); // false, so sánh giá trị
console.log("!== :", n1 !== n2); // true, so sánh giá trị và kiểu dữ liệu

console.log(">  :", n1 > 3); // true
console.log("<  :", n1 < 3); // false
console.log(">= :", n1 >= 5); // true
console.log("<= :", n1 <= 5); // true

// So sánh chuỗi

let text1 = "A";
let text2 = "B";

console.log(text1 < text2); // true, so sánh theo bảng mã ASCII

// =================================================
// 6. TOÁN TỬ LOGICAL (Logical Operators)
// =================================================

console.log("\n===== Logical Operators =====");

let age = 20;
let hasLicense = true;

// AND
console.log(age >= 18 && hasLicense);

// OR
console.log(age < 18 || hasLicense);

// NOT
console.log(!hasLicense);

// =================================================
// 7. TOÁN TỬ KẾT HỢP (Combined Operators)
// =================================================

console.log("\n===== Combined Example =====");

let score = 85;

console.log(score >= 50); // true
console.log(score >= 50 && score <= 100); // true
console.log(score < 50 || score > 100); // false
console.log(!(score >= 50)); // false
