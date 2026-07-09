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
