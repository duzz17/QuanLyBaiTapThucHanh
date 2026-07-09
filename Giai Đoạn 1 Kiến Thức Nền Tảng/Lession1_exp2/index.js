// ++++++++++++++++++ 3. Xử Lý Bất Đồng Bộ: Callback, Promise, Async/Await    +++++++++
// // Bài 3.1. Callback cơ bản với setTimeout     [Cơ bản]
/*
Bài 3.1. Callback cơ bản với setTimeout     [Cơ bản]  
Viết một hàm `sayHelloLater(callback)` dùng setTimeout 2 giây sau đó gọi callback() in ra "Hello sau 2 giây".
*/
function sayHelloLater(callback) {
  setTimeout(() => {
    console.log("Hello sau 2s");
  }, 2000);
}
// sayHelloLater();
// // Bài 3.2. Chuyển callback sang Promise     [Trung bình]
/*
Bài 3.2. Chuyển callback sang Promise     [Trung bình]  
Chuyển hàm sau từ callback sang Promise:
Viết lại thành `getUserPromise(id)` trả về Promise, sử dụng 
.then() và .catch() để gọi thử.
function getUser(id, callback) {
  setTimeout(() => {
    if (id > 0) callback(null, { id, name: "User " + id });
    else callback("ID không hợp lệ");
  }, 1000);
}

*/
/////////// Cách không có setTimeOut và trả về đối tượng
/*
function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    if (id > 0) {
      resolve(`Id: ${id}`);
    } else {
      reject("Id khong hop le!");
    }
  });
}

getUserPromise(0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

*/
// Cách làm đúng hơn
function getUserPromise(id, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "User" + id });
      } else {
        reject("ID khong hop le");
      }
    }, 1000);
  });
}

// getUserPromise(0)
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error));
// // Bài 3.3. Async/Await với try/catch     [Trung bình]
/*
Bài 3.3. Async/Await với try/catch     [Trung bình]  
Dùng async/await để viết lại việc gọi getUserPromise(id) ở bài 3.2, 
có try/catch để xử lý lỗi khi id <= 0.
*/
function getUserPromiseWithAsync(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "Name" + id });
      } else {
        reject("ID khong hop le!");
      }
    }, 2000);
  });
}

async function run33() {
  try {
    console.log("1.bat dau!");
    const result2 = await getUserPromiseWithAsync(9);
    console.log(result2);
    console.log("ket thuc!");
  } catch (error) {
    console.log(error);
  }
}
// run33();
// // Bài 3.4. Promise.all với nhiều nguồn dữ liệu     [Trung bình]
/*
Bài 3.4. Promise.all với nhiều nguồn dữ liệu     [Trung bình]  
Viết 3 Promise giả lập lấy dữ liệu: fetchUser(), fetchPosts(), 
fetchComments() (mỗi cái delay ngẫu nhiên 1-3 giây). 
Dùng Promise.all() để chờ cả 3 hoàn thành rồi in kết quả tổng hợp.

*/

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve("Lay du lieu cua fetchUser thanh cong!");
      },
      Math.random * 2000 + 1000,
    );
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve("Lay du lieu cua fetchPosts thanh cong!");
      },
      Math.random * 2000 + 1000,
    );
  });
}
function fetchComments() {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve("Lay du lieu cua fetchComponent thanh cong!");
      },
      Math.random * 2000 + 1000,
    );
  });
}
async function run34() {
  console.time("Promise.all");
  const result = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments(),
  ]);
  console.timeEnd("Promise.all");
  console.log(result);
}
// run34();
// // Bài 3.5. Retry logic với async/await     [Nâng cao]
/*
Bài 3.5. Retry logic với async/await     [Nâng cao]  
Viết hàm `fetchWithRetry(url, retries)` 
mô phỏng gọi API (dùng Math.random() 
để giả lập thành công/thất bại). Nếu thất bại, 
tự động thử lại tối đa retries lần bằng async/await, 
nếu vẫn thất bại thì throw lỗi.
💡 Gợi ý: Dùng vòng lặp for (let i = 0; i <= retries; i++) { try { return await callApi(); } catch(e) { nếu i === retries thì throw e; } }
*/
function callApi(url) {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000 + 1000; // 1 den 3 giay
    setTimeout(() => {
      const success = Math.random() > 0.8; // 50% thanh cong
      if (success) {
        resolve(`Goi API ${url} thanh cong!`);
      } else {
        reject(`Goi API ${url} that bai!`);
      }
    }, delay);
  });
}
async function fetchWithRestry(url, retries) {
  for (let i = 0; i <= retries; i++) {
    try {
      console.log(`Lan thu ${i + 1}`);
      const result = await callApi(url);
      return result;
    } catch (error) {
      console.log(`Ban gap loi: ${error}`);
      if (i === retries) {
        throw new Error("Da het so lan thu!");
      }
      console.log("thu lai");
    }
  }
}
async function run35() {
  try {
    const result = await fetchWithRestry("https://api.example.com/users", 5);
    console.log("chay thanh cong", result);
  } catch (error) {
    console.log(error.message);
  }
}
// run35();
// // Bài 3.6. Xử lý tuần tự vs song song
/*
Bài 3.6. Xử lý tuần tự vs song song     [Nâng cao]  
Viết hàm bất đồng bộ getProductById(id) 
(giả lập delay). 
Sử dụng async/await kết hợp vòng lặp để lấy dữ liệu tuần tự (từng sản phẩm một, không dùng Promise.all). So sánh thời gian chạy với cách dùng Promise.all.
const ids = [1, 2, 3, 4, 5];
💡 Gợi ý: Tuần tự: for (const id of ids) { const p = await getProductById(id); }. Song song: Promise.all(ids.map(id => getProductById(id))). Đo thời gian bằng Date.now() trước/sau để so sánh.
*/
const ids = [1, 2, 3, 4, 5];
function getProductById(id) {
  return new Promise((resolve) => {
    const delay = Math.random() * 2000 + 1000;
    setTimeout(() => {
      console.log(`Da lay san pham ${id} (${Math.round(delay)}ms)`);
      resolve({ id, name: `Product ${id}` });
    }, delay);
  });
}
// tuan tu
async function getProductTuanTu() {
  console.log("=====TUAN TU=====");
  const start = Date.now();
  const products = [];
  for (const id of ids) {
    const product = await getProductById(id);
    products.push(product);
  }
  const end = Date.now();
  console.log(products);
  console.log(`Thoi gian: ${end - start} ms`);
}
// song song
async function getProductSongSong() {
  console.log("=====SONG SONG======");
  const start = Date.now();
  const products = await Promise.all(ids.map((id) => getProductById(id)));
  const end = Date.now();
  console.log(products);
  console.log(`thoi gian su dung ${end - start} ms`);
}
async function run36() {
  await getProductTuanTu();
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  await getProductSongSong();
}
// run36();

//++++++   4. Các Phương Thức Mảng Nâng Cao (map, filter, reduce, find, some, every)  ++++
const students = [
  { name: "Anh", score: 8.5, pass: true },
  { name: "Bắc", score: 4.0, pass: false },
  { name: "Chi", score: 9.2, pass: true },
  { name: "Dũng", score: 5.5, pass: true },
  { name: "Nam", score: 3.0, pass: false },
];
// // 4.1. Dùng map() để tạo mảng mới chỉ chứa tên các sinh viên (viết hoa toàn bộ).
const name = students.map((user) => user.name.toUpperCase());
console.log(name);
// // 4.2. Dùng filter() để lấy ra danh sách sinh viên có pass === true.
const isPass = students.filter((user) => user.pass === true);
console.log(isPass);
// // 4.3. Dùng reduce() để tính điểm trung bình (score) của tất cả sinh viên.
const scores = students.map((user) => user.score);
console.log(scores);
const total = scores.reduce((sum, score) => sum + score, 0);
console.log(total);
const diemTB = total / scores.length;
console.log(diemTB);
// // 4.4. Dùng find() để tìm sinh viên đầu tiên có điểm trên 9.
const is9 = students.find((student) => student.score > 9);
console.log(is9);
// // 4.5 Dùng some() để kiểm tra xem có sinh viên nào bị điểm liệt (dưới 4) hay không.
// hàm some() được sử dụng để kiểm tra xem có ít nhất 1 phần tử thỏa mãn điều kiện không
// nếu có ít nhất 1 phần tử thì là true
// ngược lại là false
const isDiemLiet = students.some((student) => student.score < 4);
console.log(
  isDiemLiet ? "Vay co hoc sinh diem liet" : "Vay khong co hoc sinh diem liet",
);
// // 4.6. Dùng every() để kiểm tra xem tất cả sinh viên có đạt (pass: true) hay không.
// hàm every kiểm tra xam tất cả các phần tử trong mảng ó thỏa mãn một điều kiện hay không
// nếu tất cả thỏa mãn trả về true
// ngược lại trả về false
// test với toàn bộ sinh viên
const isPass1 = students.every((student) => student.pass == true);
console.log(isPass1);
// test vơi toàn bộ sinh viên có pass = true
const isPass2 = isPass.every((student) => student.pass == true);
console.log(isPass2);
// // 4.7.Kết hợp filter() + map() + reduce() theo chuỗi (chaining) để:
//    lọc ra sinh viên đậu, lấy ra điểm số, rồi tính tổng điểm của các sinh viên đậu.
const total2 = students
  .filter((pass) => pass.pass == true)
  .map((s) => s.score)
  .reduce((sum, s) => sum + s, 0);
console.log(total2);
// // 4.8. Dùng reduce() để nhóm sinh viên theo trạng thái đạt/không đạt, kết quả mong muốn dạng { pass: [...], fail: [...] }.
const result = students.reduce(
  (groups, student) => {
    if (student.pass == true) {
      groups.pass.push(student);
    } else {
      groups.fail.push(student);
    }
    return groups;
  },
  {
    pass: [],
    fail: [],
  },
);
console.log(result);
// +++++++++ 5. Xử Lý String   ++++++++++++++
// // Bài 5.1. trim()     [Cơ bản]
// Cho chuỗi có khoảng trắng thừa. Dùng trim() để loại bỏ khoảng trắng thừa, sau đó in độ dài chuỗi sau khi trim.
const raw = "   Nguyễn Văn A   ";
const afterTrim = raw.trim();
console.log(afterTrim);
// Bài 5.2. split()     [Cơ bản]
// Dùng split() để tách thành mảng các từ theo dấu phẩy.
const sentence = "JavaScript,HTML,CSS,ReactJS";
const afterSplit = sentence.split(",");
console.log(afterSplit);
// Bài 5.3. includes()     [Cơ bản]
// Dùng includes() để kiểm tra chuỗi có chứa ký tự "@" hay không (kiểm tra định dạng email cơ bản).
const email = "student@school.edu.vn";
const isEmail = email.includes("@");
console.log(isEmail);
// Bài 5.4. slice()     [Trung bình]
// Dùng slice() để lấy ra 3 số đầu (đầu số nhà mạng) và 4 số cuối.
const phone = "0987654321";
const ThirdFirst = phone.slice(0, 3);
const ThirdLast = phone.slice(phone.length - 3, phone.length);
console.log(ThirdFirst);
console.log(ThirdLast);
// Bài 5.5. replace() và replaceAll()     [Trung bình]
// Dùng replace() để thay từ "JavaScript" đầu tiên thành "ReactJS". Sau đó thử thay tất cả các từ "JavaScript".
const text = "Tôi yêu JavaScript, JavaScript rất thú vị";
const replaceFirst = text.replace("JavaScript", "ReactJS");
console.log(replaceFirst);
const replaceAll = text.replaceAll("JavaScript", "ReactJS");
console.log(replaceAll);
// Bài 5.6. toLowerCase() / toUpperCase()     [Trung bình]
// Viết hàm capitalize(str) dùng toLowerCase() và toUpperCase() để chuyển chuỗi bất kỳ thành dạng: chữ cái đầu viết hoa, còn lại viết thường. Ví dụ: "hÀ NỘI" → "Hà nội".
const text4 = "    nguyễn XuÂn đức học     lớp tin hà nội  .đang Làm bài tập";

function formatSentence(str) {
  let result = str.trim().replace(/\s+/g, " ").toLowerCase();

  // Xóa khoảng trắng trước dấu .
  result = result.replace(/\s+\./g, ".");

  // Đảm bảo sau dấu . chỉ có đúng 1 khoảng trắng
  result = result.replace(/\.\s*/g, ". ");

  // Viết hoa chữ cái đầu câu và sau dấu .
  result = result.replace(/(^|\. )([a-zà-ỹ])/g, (_, p1, p2) => {
    return p1 + p2.toUpperCase();
  });

  return result;
}

console.log(formatSentence(text4));
// Bài 5.7. Template String tạo HTML     [Nâng cao]
// Sử dụng Template String để viết hàm renderStudentCard({name, score, major}) trả về một đoạn chuỗi HTML.
// 💡 Gợi ý: Dùng dấu backtick (`) và cú pháp ${} để chèn biến trực tiếp vào chuỗi, ví dụ: `<div>Sinh viên: ${name} - Ngành: ${major} - Điểm: ${score}</div>`
function renderStudentCard({ name, score, major }) {}
