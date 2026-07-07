//=========================================================================
//=======Destructuring Assignment Syntax (Cú pháp gán giải cấu trúc)=======
//=========================================================================
/*
Destructuring Assignment là cú pháp cho phép LẤY DỮ LIỆU TỪ OBJECT hoặc ARRAY VÀ GÁN CHÚNG TRỰC TIẾP VÀO CÁC BIẾN MỚI
*/
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

// cách thông thường
/*
let firstName = person.firstName; // John
let lastName = person.lastName; //Doe
*/
// cách destructuring
let { firstName, lastName, country = "USA" } = person; //{John, Doe} và không có age vì không được khai báo
// lưu ý : ĐỐI VỚI OBJECT, TÊN BIẾN PHẢI TRÙNG VỚI TÊN THUỘC TÍNH CỦA OBJECT, THỨ TỰ KHÔNG QUAN TRỌNG, CÓ THỂ BỎ QUA MỘT SỐ THUỘC TÍNH CỦA OBJECT
// lưu ý: Destructuring KHÔNG LÀM THAY ĐỔI OBJECT GỐC, NÓ CHỈ LẤY DỮ LIỆU TỪ OBJECT GỐC VÀ GÁN VÀO BIẾN MỚI
// ----------------GIÁ TRỊ MẶC ĐỊNHH CỦA ĐỐI TƯỢNG-----------------------
console.log(country); // USA
// ++++++++ đổi tên biến khi destructuring +++++++++++++
let { firstName: name } = person; // đổi tên biến firstName thành name
console.log(name); // John     (name = person.firstName)

//+++++++++++String Destructuring+++++++++++++++++++++++
let name2 = "W3Schools";
let [a1, a2, a3, a4, a5] = name2;
console.log(a1); // W
console.log(a2); // 3
// ngoài ra nó còn sử dụng được với string, array, map, set, generator,... những đối tượng có thể lặp đc
//++++++++++++Array Destructuring+++++++++++++++++++++++
const fruits = [
  "Bananas",
  "Oranges",
  "Apples",
  "Mangos",
  "Grapes",
  "Pineapples",
  "Strawberries",
  "Blueberries",
];

let [fruit1, fruit2] = fruits;
console.log(fruit1);
console.log(fruit2);
// lưu ý: ĐỐI VỚI ARRAY, THỨ TỰ CỦA CÁC PHẦN TỬ TRONG MẢNG LÀ QUAN TRỌNG, CÓ THỂ BỎ QUA MỘT SỐ PHẦN TỬ CỦA MẢNG
// Lưu ý: MUỐN BỎ QUA TA DÙNG "," để bỏ qua phần tử trong mảng
let [, , fruit3, , fruit5] = fruits;
console.log(fruit3); // Apples
console.log(fruit5); // Grapes
//+++++++++++++++Array Position Values+++++++++++++++++++++++
let { [0]: firstFruit, [6]: fourthFruit } = fruits;
console.log(firstFruit); // Bananas
console.log(fourthFruit); // Strawberries
//+++++++++++++++The Rest Property+++++++++++++++++++++++++++
const numbers = [10, 20, 30, 40, 50, 60, 70];

const [a, b, ...rest] = numbers;
console.log(rest); // [30, 40, 50, 60, 70]
//+++++++++++++++Destructuring Maps+++++++++++++++++++++++++++
const fruits2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

for (const [key, value] of fruits2) {
  console.log(key, value);
}
//++++++++++++++Swapping JavaScript Variables+++++++++++++++++++++
let firstName2 = "John";
let lastName2 = "Doe";

[firstName2, lastName2] = [lastName2, firstName2];
//Đây là cách hoán đổi (swap) hai biến mà không cần biến trung gian:
