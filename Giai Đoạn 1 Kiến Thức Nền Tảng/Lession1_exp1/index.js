// 1. ARROW FUNCTION AND DESTRUCTURING
// // 1.1. Arrow Function cơ bản
/*
Bài 1.1. Arrow function cơ bản     [Cơ bản]  
Viết một arrow function `square(n)` trả về bình phương của `n`. So sánh cách viết với function thông thường.

*/

let square = (x) => x * x;
console.log(square(6));
// // 1.2. Destructuring object cơ bản
/*
Bài 1.2. Destructuring object cơ bản     [Cơ bản]  
Cho object, dùng destructuring để lấy ra name và major thành 2 biến riêng.
const student = { name: "An", age: 20, major: "IT" };

*/
const student = {
  name: "An",
  age: 20,
  major: "IT",
};
const { name, major } = student;
console.log(name);
console.log(major);
// // 1.3. Destructuring mảng
/*
Bài 1.3. Destructuring mảng     [Trung bình]  
Cho mảng:
Dùng destructuring để lấy `x`, `y`, `z` từ mảng trên. Sau đó viết arrow function tính khoảng cách từ gốc tọa độ (chỉ dùng x, y).
const point = [10, 20, 30];

*/
const point = [10, 20, 30];
const [x, y] = point;
const Euclid = (x, y) => Math.sqrt(x ** 2 + y ** 2);
console.log(Euclid(x, y));
// // 1.4. Destructuring lồng nhau
/*
Bài 1.4. Destructuring lồng nhau     [Trung bình]  
Cho object lồng nhau:
Dùng destructuring (kể cả đổi tên biến) để lấy ra `username`, `city`, `district` chỉ trong một dòng lệnh.
const user = {
  id: 1,
  info: { username: "an123", address: { city: "Hà Nội", district: "Cầu Giấy" } }
};

*/

const user = {
  id: 1,
  infor: {
    username: "an123",
    address: {
      city: "Hà Nội",
      distric: "cầu giấy",
    },
  },
};
const {
  infor: {
    username,
    address: { city, distric },
  },
} = user;
console.log(username);
console.log(city);
console.log(distric);
// // 1.5. this trong Arrow Function vs Function thường
// Bài 1.5. this trong Arrow Function vs Function thường     [Nâng cao]
// Giải thích và chứng minh bằng code sự khác nhau giữa `this` trong arrow function và function thông thường khi dùng trong object method:
// const obj = {
//   value: 42,
//   normalFn: function() { /* ... */ },
//   arrowFn: () => { /* ... */ }
// };

const obj = {
  value: 42,
  normalFn: function () {
    console.log(this);
    console.log("Value of Normal Function: " + this.value);
  },
  arrowFn: () => {
    console.log(this);
    console.log("Value of Arrow Function: " + this.value);
  },
};
obj.arrowFn(); // undefined
obj.normalFn(); // 42
// console.log(this);
/*
Giải thích:
    - ta thấy giá trị của obj.normal(): 42
            là bởi khi ta gọi đến đối tượng obj, lúc này con trỏ this nó 
            vẫn đang là đối tượng obj, khi gọi đến function normalFn() của 
            obj lúc này con trỏ this đang chính là đối tượng luôn
            vì vậy cho nên nó sẽ có giá trị value là lấy đúng value: 42
    - còn ta thấy giá trị của obj.arrowFn() là undefined
            giải thích cho điều này là bởi ta có thể nhìn thấy dòng console.log(this)
            bên trong hàm arrowFn(), nó trở đến Window chứ không phải đối tượng obj
            vì vậy cho nên khi truy cập vào this.value, nó không biết value là gì 
            cho nên giá trị của obj.arrowFn() là undefined
*/
// // 1.6. this trong class với setInterval
/*
Bài 1.6. this trong class với setInterval     [Nâng cao]  
Có một class `Timer` dùng `setInterval` để đếm số giây. Hãy dùng arrow function để đảm bảo `this` bên trong callback của `setInterval` trỏ đúng về instance của class (không dùng `.bind(this)`).

*/

class Timer {
  // viết hàm khởi tạo và gán giá trị cho seconds = 0
  constructor() {
    this.seconds = 0;
  }
  // hàm start()
  start() {
    setInterval(() => {
      console.log(this);
      this.seconds++;
      console.log(`Đã chạy: ${this.seconds} giây`);
    }, 1000);
  }
}
const timer = new Timer();
// timer.start();
//=== ta có thể sử dụng this bên trong CLASS
//=== không dùng this làm phương thức hàm của object
//=== không dùng this khi muốn this là đối tượng gọi hàm
//=== không dùng làm constructor, bởi arrow function không thể dùng với new khi tạo đối tượng
