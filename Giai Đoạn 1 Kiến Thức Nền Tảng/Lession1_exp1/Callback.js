// ===========================================================
// JavaScript Callbacks
// ===========================================================

// ===========================================================
// 1. CALLBACK LÀ GÌ?
// ===========================================================

console.log("===== 1. Callback là gì =====");

function sayHello() {
  console.log("Hello!");
}

function execute(callback) {
  console.log("Execute function...");
  callback();
}

execute(sayHello);

// ===========================================================
// 2. CALLBACK LÀ HÀM ĐƯỢC TRUYỀN LÀM THAM SỐ
// ===========================================================

console.log("\n===== 2. Function as Argument =====");

function greet() {
  console.log("Welcome!");
}

function run(callback) {
  callback();
}

run(greet);

// Sai (đừng làm)
// run(greet());

// ===========================================================
// 3. SYNCHRONOUS CALLBACK( ĐỒNG BỘ)
// ===========================================================

console.log("\n===== 3. Synchronous Callback =====");
// ta có một mảng numbers gồm 3 phần tử, ta muốn in ra từng phần tử của mảng này.
// Ta có thể sử dụng phương thức forEach() để thực hiện việc này.
// Phương thức forEach() nhận một callback function làm tham số,
// và sẽ gọi callback function này cho từng phần tử trong mảng.
const numbers = [10, 20, 30];

numbers.forEach(function (value) {
  console.log(value);
});

console.log("Finished forEach");
/*
các câu hỏi thực tế về hàm forEach:
1. Hàm forEach() có thay đổi mảng gốc không?
   - Không, hàm forEach() không thay đổi mảng gốc mà chỉ thực hiện callback function cho từng phần tử trong mảng.
2. Hàm forEach() có thể được sử dụng với các loại dữ liệu khác ngoài mảng không?
   - Không, hàm forEach() chỉ có thể được sử dụng với mảng.
3. forEach() dùng để làm gì?
    - forEach() dùng để lặp qua từng phần tử trong mảng và thực hiện một hành động nào đó cho từng phần tử.
4. Có thể dùng break hoặc continue trong forEach() không?
    - Không,forEach() không hỗ trợ break hoặc continue. Nếu muốn dừng vòng lặp, 
    bạn có thể sử dụng một vòng lặp khác như for hoặc for...of.
*/
// ===========================================================
// 4. ASYNCHRONOUS CALLBACK( BẤT ĐỒNG BỘ)
// ===========================================================

console.log("\n===== 4. Asynchronous Callback =====");
// setTimeout() là một hàm bất đồng bộ,
// nó sẽ thực hiện callback function sau một khoảng thời gian nhất định.
// nó nhận vào 2 tham số: callback function và thời gian chờ (tính bằng mili giây).
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("This line runs first");
/*
các câu hỏi thực tế về hàm setTimeout:
1. Hàm setTimeout() có thể được sử dụng với các loại dữ liệu khác ngoài hàm không?
   - Không, hàm setTimeout() chỉ có thể được sử dụng với hàm.
2. Hàm setTimeout() có thể được sử dụng với các loại dữ liệu khác ngoài số không?
   - Không, hàm setTimeout() chỉ có thể được sử dụng với số (thời gian chờ).
*/
// ===========================================================
// 5. CALLBACK VỚI setTimeout()
// ===========================================================
console.log("\n===== 5. setTimeout Callback =====");

function myFunction() {
  console.log("I love JavaScript!");
}
// setTimeout() là một hàm bất đồng bộ,
// nó sẽ thực hiện callback function sau một khoảng thời gian nhất định.
// nó nhận vào 2 tham số: callback function và thời gian chờ (tính bằng mili giây).

setTimeout(myFunction, 3000);
/*
các câu hỏi thực tế về hàm setTimeout:
1. Hàm setTimeout() có thể được sử dụng với các loại dữ liệu khác ngoài hàm không?
   - Không, hàm setTimeout() chỉ có thể được sử dụng với hàm.
2. Hàm setTimeout() có thể được sử dụng với các loại dữ liệu khác ngoài số không?
   - Không, hàm setTimeout() chỉ có thể được sử dụng với số (thời gian chờ).
*/
// ===========================================================
// 6. CALLBACK VỚI forEach()
// ===========================================================

console.log("\n===== 6. Array forEach =====");

const fruits = ["Apple", "Banana", "Orange"];
// forEach() là một phương thức của mảng trong JavaScript,
// nó nhận vào một callback function và sẽ gọi callback function này cho từng phần tử trong mảng.

fruits.forEach(function (fruit) {
  console.log(fruit);
});
/*
các câu hỏi thực tế về hàm forEach:
1. Hàm forEach() có thay đổi mảng gốc không?
   - Không, hàm forEach() không thay đổi mảng gốc mà chỉ thực hiện callback function cho từng phần tử trong mảng.
2. Hàm forEach() có thể được sử dụng với các loại dữ liệu khác ngoài mảng không?
   - Không, hàm forEach() chỉ có thể được sử dụng với mảng.
3.forEach() dùng để làm gì?
    - forEach() dùng để lặp qua từng phần tử trong mảng và thực hiện một hành động nào đó cho từng phần tử.
4.Có thể dùng break hoặc continue trong forEach() không?
    - Không, forEach() không hỗ trợ break hoặc continue. Nếu muốn dừng vòng lặp, 
    bạn có thể sử dụng một vòng lặp khác như for hoặc for...of.
5.Khi nào nên dùng forEach() và khi nào nên dùng map()?
    - forEach() nên được sử dụng khi bạn muốn thực hiện một hành động 
    nào đó cho từng phần tử trong mảng mà không cần trả về một mảng mới.
    - map() nên được sử dụng khi bạn muốn tạo ra một mảng mới từ mảng 
    gốc bằng cách thực hiện một hành động nào đó cho từng phần tử trong mảng.
*/

// ===========================================================
// 7. CALLBACK VỚI map()
// ===========================================================

console.log("\n===== 7. Array map =====");

const scores = [50, 60, 70];
// map() là một phương thức của mảng trong JavaScript,
// nó nhận vào một callback function và sẽ gọi callback function này cho từng phần tử trong mảng.
// map() sẽ trả về một mảng mới chứa kết quả của callback function.
const newScores = scores.map(function (score) {
  return score + 10;
});

console.log(scores);
console.log(newScores);
/*
các câu hỏi thực tế về hàm map:
1. Hàm map() có thay đổi mảng gốc không?
   - Không, hàm map() không thay đổi mảng gốc mà trả về một mảng mới.
2. Hàm map() có thể được sử dụng với các loại dữ liệu khác ngoài mảng không?
    - Không, hàm map() chỉ có thể được sử dụng với mảng.
3. Hàm map() có thể được sử dụng với các loại dữ liệu khác ngoài số không?
    - Có, hàm map() có thể được sử dụng với bất kỳ loại dữ liệu nào trong mảng.
*/
// ===========================================================
// 8. CALLBACK VỚI filter()
// ===========================================================

console.log("\n===== 8. Array filter =====");

const ages = [15, 18, 20, 25, 12];
// filter() là một phương thức của mảng trong JavaScript,
// nó nhận vào một callback function và sẽ gọi callback function này cho từng phần tử trong mảng.
// filter() sẽ trả về một mảng mới chứa các phần tử thỏa mãn điều kiện trong callback function.
const adults = ages.filter(function (age) {
  return age >= 18;
});

console.log(adults);
/*
các câu hỏi thực tế về hàm filter:
1. Hàm filter() có thay đổi mảng gốc không?
   - Không, hàm filter() không thay đổi mảng gốc mà trả về một mảng mới.
2. Hàm filter() có thể được sử dụng với các loại dữ liệu khác ngoài mảng không?
   - Không, hàm filter() chỉ có thể được sử dụng với mảng.
3. Hàm filter() có thể được sử dụng với các loại dữ liệu khác ngoài số không?
   - Có, hàm filter() có thể được sử dụng với bất kỳ loại dữ liệu nào trong mảng.
*/

// ===========================================================
// 9. KHÔNG DÙNG CALLBACK
// ===========================================================

console.log("\n===== 9. Không dùng Callback =====");

function myCalculator(a, b) {
  return a + b;
}

function myDisplayer(result) {
  console.log("Result:", result);
}

let result = myCalculator(5, 5);
myDisplayer(result);

// ===========================================================
// 10. DÙNG CALLBACK
// ===========================================================

console.log("\n===== 10. Dùng Callback =====");

function calculator(num1, num2, callback) {
  let sum = num1 + num2;

  callback(sum);
  // hàm callback() sẽ được gọi sau khi tính toán xong, và nó sẽ nhận vào kết quả của phép tính.
}

function display(result) {
  console.log("Display:", result);
}

calculator(10, 20, display);

// ===========================================================
// 11. CALLBACK KHÁC NHAU
// ===========================================================

console.log("\n===== 11. Thay đổi Callback =====");

function calculate(num1, num2, callback) {
  let sum = num1 + num2;

  callback(sum);
}

function show(result) {
  console.log("Show:", result);
}

function save(result) {
  console.log("Save to database:", result);
}

calculate(3, 4, show);

calculate(3, 4, save);

// ===========================================================
// 12. ARROW FUNCTION CALLBACK
// ===========================================================

console.log("\n===== 12. Arrow Function Callback =====");

const products = [100, 200, 300];

products.forEach((price) => {
  console.log(price);
  // sử dụng arrow function làm callback function cho phương thức forEach()
});
/*
các câu hỏi thực tế về arrow function:
1. Arrow function có thể được sử dụng làm callback function không?
   - Có, arrow
    function có thể được sử dụng làm callback function.
2. Arrow function có thể được sử dụng với các loại dữ liệu khác ngoài mảng không?
    - Có, arrow function có thể được sử dụng với bất kỳ loại dữ liệu nào.
*/
// ===========================================================
// 13. MAP + ARROW FUNCTION
// ===========================================================

console.log("\n===== 13. map + Arrow Function =====");

const nums = [1, 2, 3, 4];

const doubled = nums.map((n) => n * 2);

console.log(doubled);

// ===========================================================
// 14. FILTER + ARROW FUNCTION
// ===========================================================

console.log("\n===== 14. filter + Arrow Function =====");

const values = [5, 8, 12, 20];

const resultFilter = values.filter((v) => v >= 10);

console.log(resultFilter);

// ===========================================================
// 15. CALLBACK CHẠY SAU
// ===========================================================

console.log("\n===== 15. Deferred Execution =====");

function download(callback) {
  console.log("Downloading...");

  setTimeout(function () {
    console.log("Download completed.");

    callback();
  }, 2000);
}

function install() {
  console.log("Installing...");
}

download(install);

console.log("Continue doing other work...");

// ===========================================================
// 16. TỔNG KẾT
// ===========================================================

console.log("\n===== 16. Callback Summary =====");

function task(callback) {
  console.log("Task started...");

  callback();
}

function finish() {
  console.log("Task completed!");
}

task(finish);
/*
các câu hỏi thực tế về callback:
1. Callback là gì?
   - Callback là một hàm được truyền vào một hàm khác như một đối số, 
   và sẽ được gọi sau khi hàm đó hoàn thành công việc của nó. 
2. Callback có thể được sử dụng với các loại dữ liệu khác ngoài hàm không?
   - Không, callback chỉ có thể được sử dụng với hàm.
3. Callback có thể được sử dụng với các loại dữ liệu khác ngoài số không?
   - Không, callback chỉ có thể được sử dụng với hàm. 
   
*/
