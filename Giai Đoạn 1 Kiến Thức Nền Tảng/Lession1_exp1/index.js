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
//++++++++             2. Spread & Rest Operators           ++++++++++++++++
// // Bài 2.1. Gộp mảng với spread
/*
Bài 2.1. Gộp mảng với spread     [Cơ bản]  
Cho hai mảng:
Dùng spread operator để gộp thành một mảng duy nhất [1,2,3,4,5,6].
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// gộp mảng bằng spread
const GopMang = [...arr1, ...arr2];
console.log(GopMang); // [1,2,3,4,5,6]
// // Bài 2.2. Gộp object với spread
const defaultConfig = {
  theme: "light",
  fontSize: 14,
};
const userConfig = {
  name: "Nguyen Xuan Duc",
  age: 21,
};
// 2.2 gộp 2 đối tượng bằng spread
/*
Bài 2.2. Gộp object với spread     [Cơ bản]  
Cho object:
Dùng spread để tạo object mới `userConfig` có theme: "dark" nhưng giữ nguyên fontSize.
const defaultConfig = { theme: "light", fontSize: 14 };

*/
const GopDoiTuong = { ...defaultConfig, ...userConfig };
console.log(GopDoiTuong); //{theme: 'light', fontSize: 14, name: 'Nguyen Xuan Duc', age: 21}
// // Bài 2.3. Rest operator trong hàm
/*
Bài 2.3. Rest operator trong hàm     [Trung bình]  
Viết hàm `sum(...numbers)` sử dụng rest operator để cộng tất cả các số truyền vào (số lượng bất kỳ).

*/
/*
Đối với bài này ta sẽ sử dụng Rest để lấy tất cả phần tử input  nhập vào
và sử dụng hàm "reduce" của "number" để duyệt qua từng phần tử trong "number"
*/
function sum(...number) {
  return number.reduce((total, number) => total + number, 0);
}

console.log(sum(2, 3, 4));
console.log(sum(44, 33, 2));
// // Bài 2.4. Kết hợp destructuring + rest trên mảng
/*
Bài 2.4. Kết hợp destructuring + rest trên mảng     [Trung bình]  
Cho mảng điểm số. Dùng destructuring + rest để lấy điểm cao nhất đầu tiên `first` và phần còn lại `rest`. In ra `first` và `rest`.
const scores = [90, 85, 77, 92, 60];

*/
const scores = [90, 85, 77, 92, 60];
const { [0]: first, ...rest } = scores;
console.log(first); //90
console.log(rest); // [85, 77, 92, 60]
// // Bài 2.5. Gộp nhiều object động
/*
Bài 2.5. Gộp nhiều object động     [Nâng cao]  
Viết hàm `mergeObjects(...objects)` nhận số lượng object bất kỳ và trả về một object gộp tất cả (nếu trùng key thì object sau ghi đè object trước).
*/
/*
đối với bài toán này ta cũng sử dụng "reduce" để duyệt qua các phần tử trong đối tượng
bên trong hàm "reduce", của "object" ta truyền vào 2 tham số, "result" với giá trị
khởi tạo ban đầu là đối tượng rỗng "{}", và tham số thứ 2 là từng obj của "...object" truyền vào
*/
function mergeObjects(...object) {
  return object.reduce((result, obj) => {
    return { ...result, ...obj };
  }, {});
}
const obj1 = {
  name: "Nguyen Xuan Duc",
  age: 30,
  city: "Ha Noi",
};
const obj2 = {
  name: "Pham Van Cuong",
  chuyen_nganh: "IT",
};
const obj3 = {
  phuong_tien: "motobike",
};
console.log(obj1, obj2, obj3); // bình thường
console.log(mergeObjects(obj1, obj2, obj3)); // ghi đè
// // Bài 2.6. Làm phẳng mảng lồng nhau     [Nâng cao]
/*
Bài 2.6. Làm phẳng mảng lồng nhau     [Nâng cao]  
Cho mảng lồng nhau. Dùng spread để "làm phẳng" (flatten) thành [1,2,3,4,5,6] mà không dùng flat().
const matrix = [[1,2],[3,4],[5,6]];

*/
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
function flatten(array) {
  return array.reduce((result, arr) => {
    return [...result, ...arr];
  }, []);
}
console.log(flatten(matrix));
