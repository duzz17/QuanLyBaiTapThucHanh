//==================================================
// JavaScript Advanced Array Methods
// map(), filter(), reduce(), find(), some(), every()
//==================================================

//==================================================
// Dữ liệu mẫu
//==================================================

const products = [
  { id: 1, name: "Laptop", price: 25000 },

  { id: 2, name: "Mouse", price: 500 },

  { id: 3, name: "Keyboard", price: 1000 },

  { id: 4, name: "Monitor", price: 4500 },
];

//==================================================
// map()
//==================================================

// map() tạo ra một mảng mới bằng cách
// biến đổi từng phần tử của mảng cũ.

// Cú pháp

// array.map((value, index, array) => {
//      return giá_trị_mới;
// });

// Ví dụ 1

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);

// [2,4,6,8,10]

// Ví dụ 2

const names = products.map((product) => product.name);

console.log(names);

// ["Laptop","Mouse","Keyboard","Monitor"]

// Ví dụ 3

const prices = products.map((product) => product.price);

console.log(prices);

//==================================================
// filter()
//==================================================

// filter() lọc các phần tử thỏa điều kiện.

// Cú pháp

// array.filter((value)=>{
//      return điều_kiện;
// });

// Ví dụ 1

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);

// [2,4]

// Ví dụ 2

const expensiveProducts = products.filter((product) => product.price > 3000);

console.log(expensiveProducts);

// Ví dụ 3

const cheapProducts = products.filter((product) => product.price <= 1000);

console.log(cheapProducts);

//==================================================
// find()
//==================================================

// find() trả về phần tử đầu tiên
// thỏa điều kiện.

// Nếu không tìm thấy
// trả về undefined.

// Ví dụ

const product = products.find((item) => item.id === 3);

console.log(product);

//==================================================
// findIndex()
//==================================================

// Trả về vị trí của phần tử.

const index = products.findIndex((item) => item.id === 3);

console.log(index);

//==================================================
// reduce()
//==================================================

// reduce() dùng để gộp toàn bộ mảng
// thành một giá trị.

// Cú pháp

// array.reduce((accumulator,currentValue)=>{
//
// }, initialValue);

// accumulator
// Giá trị tích lũy.

// currentValue
// Phần tử hiện tại.

//==================================================
// Ví dụ 1
//==================================================

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(total);

// 15

//==================================================
// Ví dụ 2
//==================================================

const totalPrice = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(totalPrice);

//==================================================
// Ví dụ 3
//==================================================

const cart = [
  { name: "Laptop", quantity: 1, price: 20000 },

  { name: "Mouse", quantity: 2, price: 300 },

  { name: "Keyboard", quantity: 1, price: 1000 },
];

const totalMoney = cart.reduce((sum, item) => {
  return sum + item.quantity * item.price;
}, 0);

console.log(totalMoney);

//==================================================
// some()
//==================================================

// some()
// Kiểm tra xem có ÍT NHẤT 1 phần tử
// thỏa điều kiện hay không.

// Ví dụ

const hasExpensive = products.some((product) => {
  return product.price > 20000;
});

console.log(hasExpensive);

// true

//==================================================
// every()
//==================================================

// every()
// Kiểm tra xem TẤT CẢ phần tử
// đều thỏa điều kiện.

// Ví dụ

const allPositive = numbers.every((number) => {
  return number > 0;
});

console.log(allPositive);

// true

//==================================================
// Ví dụ tổng hợp
//==================================================

// Lấy tên sản phẩm giá trên 1000

const result = products

  .filter((product) => product.price > 1000)

  .map((product) => product.name);

console.log(result);

//==================================================
// Chain nhiều phương thức
//==================================================

const totalExpensive = products

  .filter((product) => product.price > 1000)

  .map((product) => product.price)

  .reduce((sum, price) => sum + price, 0);

console.log(totalExpensive);

//==================================================
// So sánh
//==================================================

// map()
// --------------------
// Biến đổi dữ liệu.

// filter()
// --------------------
// Lọc dữ liệu.

// find()
// --------------------
// Tìm phần tử đầu tiên.

// findIndex()
// --------------------
// Tìm vị trí phần tử.

// reduce()
// --------------------
// Gộp dữ liệu.

// some()
// --------------------
// Có ít nhất 1 phần tử đúng.

// every()
// --------------------
// Tất cả phần tử đều đúng.

//==================================================
// Bài tập
//==================================================

// 1.
// Dùng map()
// tạo mảng bình phương.

// [1,2,3,4]

// 2.
// Dùng filter()
// lấy các số chia hết cho 3.

// 3.
// Dùng find()
// tìm sản phẩm có id = 2.

// 4.
// Dùng reduce()
// tính tổng:

// [5,10,15,20]

// 5.
// Dùng some()
// kiểm tra có số âm không.

// 6.
// Dùng every()
// kiểm tra tất cả đều là số dương.

// 7.
// Từ mảng products

// Lọc sản phẩm >1000

// Sau đó lấy tên

// Sau đó in ra.

//==================================================
// Tổng kết
//==================================================

// map()
// -> Biến đổi dữ liệu.

// filter()
// -> Lọc dữ liệu.

// find()
// -> Lấy phần tử đầu tiên.

// findIndex()
// -> Lấy vị trí.

// reduce()
// -> Gộp dữ liệu.

// some()
// -> Có ít nhất một phần tử đúng.

// every()
// -> Tất cả phần tử đúng.

//==================================================
// Hết chương Advanced Array Methods
//==================================================
