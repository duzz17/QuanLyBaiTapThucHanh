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
