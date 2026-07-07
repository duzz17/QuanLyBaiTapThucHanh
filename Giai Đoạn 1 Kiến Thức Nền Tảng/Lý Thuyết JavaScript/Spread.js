// Spread Operator (...) dùng để trải (mở rộng) các phần tử của một array hoặc các thuộc tính của object vào một array hoặc object khác.
const numbers2 = [1, 2, 3];
console.log(...numbers2); // Output: 1 2 3
// ví dụ với mảng
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const GopMang = [...numbersOne, ...numbersTwo];
console.log(GopMang); // Output: [1, 2, 3, 4, 5, 6]
// nếu không dùng spread operator thì kết quả sẽ là một mảng chứa hai mảng con
const GopMangKhongSpread = [numbersOne, numbersTwo];
console.log(GopMangKhongSpread);
/*
mẹo phân biệt spread operator và rest parameter
- nếu "..." ở bên trái dấu "=" thì đó là Rest
- nếu "..." ở bên phải dấu "="  thì đó là Spread
*/
//Spread với Object
const car = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const car_more = {
  type: "car",
  year: 2021,
  color: "yellow",
};
// gộp 2 object car và car_more thành một object mới mycar, nếu có thuộc tính trùng nhau thì thuộc tính của object được trải sau sẽ ghi đè lên thuộc tính của object được trải trước.
const mycar = { ...car, ...car_more };
console.log(mycar);
//Spread trong React dùng để làm gì?
/*
Trong React, bạn sẽ gặp Spread rất thường xuyên vì state không nên bị thay đổi trực tiếp (immutable). Thay vào đó, ta tạo một object hoặc array mới.
*/
//Ví dụ cập nhật state object:
const user = {
  name: "John",
  age: 20,
};

const updatedUser = {
  ...user,
  age: 21,
};

console.log(updatedUser);
//Hoặc thêm phần tử vào mảng
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];

console.log(newNumbers);
