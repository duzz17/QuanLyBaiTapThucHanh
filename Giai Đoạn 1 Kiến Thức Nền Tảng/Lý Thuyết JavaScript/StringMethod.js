//==================================================
// JavaScript String Methods
// Template Literals và các phương thức String
//==================================================

//==================================================
// Khởi tạo String
//==================================================

const firstName = "Nguyễn";

const lastName = "Văn A";

const message = "   Hello JavaScript   ";

//==================================================
// Template Literals
//==================================================

// Template Literals sử dụng dấu ` (backtick)
// để tạo chuỗi.

// Có thể xuống dòng.

// Có thể chèn biến bằng ${}

// Cách cũ

const fullName1 = firstName + " " + lastName;

console.log(fullName1);

// Template Literals

const fullName2 = `${firstName} ${lastName}`;

console.log(fullName2);

//==================================================
// Chèn biểu thức
//==================================================

const a = 10;

const b = 20;

console.log(`Tổng = ${a + b}`);

//==================================================
// Xuống dòng
//==================================================

const text = `Xin chào

JavaScript

ES6`;

console.log(text);

//==================================================
// trim()
//==================================================

// Xóa khoảng trắng đầu và cuối chuỗi.

console.log(message);

console.log(message.trim());

//==================================================
// trimStart()
//==================================================

// Xóa khoảng trắng đầu chuỗi.

console.log(message.trimStart());

//==================================================
// trimEnd()
//==================================================

// Xóa khoảng trắng cuối chuỗi.

console.log(message.trimEnd());

//==================================================
// toLowerCase()
//==================================================

// Chuyển thành chữ thường.

const email = "ADMIN@GMAIL.COM";

console.log(email.toLowerCase());

//==================================================
// toUpperCase()
//==================================================

// Chuyển thành chữ hoa.

const country = "vietnam";

console.log(country.toUpperCase());

//==================================================
// includes()
//==================================================

// Kiểm tra chuỗi có chứa ký tự hay không.

const language = "JavaScript";

console.log(language.includes("Java"));

console.log(language.includes("Python"));

//==================================================
// startsWith()
//==================================================

// Kiểm tra bắt đầu bằng.

console.log(language.startsWith("Java"));

//==================================================
// endsWith()
//==================================================

// Kiểm tra kết thúc bằng.

console.log(language.endsWith("Script"));

//==================================================
// slice()
//==================================================

// Cắt chuỗi.

// slice(start,end)

const word = "JavaScript";

console.log(word.slice(0, 4));

console.log(word.slice(4));

console.log(word.slice(-6));

//==================================================
// substring()
//==================================================

// Tương tự slice()
// nhưng không hỗ trợ số âm.

console.log(word.substring(0, 4));

//==================================================
// replace()
//==================================================

// Thay thế chuỗi đầu tiên.

const sentence = "I love Java";

console.log(sentence.replace("Java", "JavaScript"));

//==================================================
// replaceAll()
//==================================================

// Thay thế tất cả.

const str = "JS JS JS";

console.log(str.replaceAll("JS", "JavaScript"));

//==================================================
// split()
//==================================================

// Chuyển String thành Array.

const fruits = "Apple,Banana,Orange";

const array = fruits.split(",");

console.log(array);

//==================================================
// join()
//==================================================

// Chuyển Array thành String.

const names = ["An", "Bình", "Cường"];

console.log(names.join("-"));

//==================================================
// indexOf()
//==================================================

// Trả về vị trí đầu tiên.

console.log(word.indexOf("Script"));

//==================================================
// lastIndexOf()
//==================================================

// Trả về vị trí cuối.

const test = "Java Java Java";

console.log(test.lastIndexOf("Java"));

//==================================================
// charAt()
//==================================================

// Lấy ký tự theo vị trí.

console.log(word.charAt(0));

//==================================================
// at()
//==================================================

// Có thể dùng số âm.

console.log(word.at(-1));

//==================================================
// length
//==================================================

// Độ dài chuỗi.

console.log(word.length);

//==================================================
// Ví dụ thực tế
//==================================================

// Chuẩn hóa Email

const userEmail = "   ADMIN@GMAIL.COM   ";

const result = userEmail

  .trim()

  .toLowerCase();

console.log(result);

//==================================================
// Ví dụ thực tế
//==================================================

// Kiểm tra Email Gmail

const email2 = "abc@gmail.com";

if (email2.includes("@gmail.com")) {
  console.log("Email hợp lệ");
}

//==================================================
// Ví dụ thực tế
//==================================================

// Tách họ tên

const fullName = "Nguyễn Văn A";

const words = fullName.split(" ");

console.log(words);

//==================================================
// Ví dụ thực tế
//==================================================

// Lấy tên cuối

const last = words[words.length - 1];

console.log(last);

//==================================================
// Ví dụ thực tế
//==================================================

// Viết hoa chữ đầu

const name = "javascript";

const newName = name.charAt(0).toUpperCase() + name.slice(1);

console.log(newName);

//==================================================
// Tổng kết
//==================================================

// Template Literals
// -------------------
// `${}`

// trim()
// -------------------
// Xóa khoảng trắng.

// split()
// -------------------
// String → Array.

// join()
// -------------------
// Array → String.

// slice()
// -------------------
// Cắt chuỗi.

// includes()
// -------------------
// Kiểm tra chứa.

// replace()
// -------------------
// Thay chuỗi.

// toLowerCase()
// -------------------
// Chữ thường.

// toUpperCase()
// -------------------
// Chữ hoa.

// startsWith()
// -------------------
// Bắt đầu bằng.

// endsWith()
// -------------------
// Kết thúc bằng.

//==================================================
// Bài tập
//==================================================

// 1.
// Viết chương trình nhập:

// "   hello javascript   "

// In ra:

// HELLO JAVASCRIPT

// 2.
// Tách:

// "HTML,CSS,JavaScript"

// thành Array.

// 3.
// Kiểm tra:

// "abc@gmail.com"

// có phải Gmail không.

// 4.
// Thay:

// "I love Java"

// thành

// "I love JavaScript"

// 5.
// Lấy:

// "Script"

// từ:

// "JavaScript"

//==================================================
// Hết chương String Methods
//==================================================
