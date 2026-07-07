//==================================================
// Node.js Async/Await
// Phần 1: Giới thiệu Async/Await
//==================================================

// Async/Await là cách hiện đại để xử lý bất đồng bộ (Asynchronous)
// được xây dựng trên Promise.

// Async/Await giúp code:
// ✔ Dễ đọc
// ✔ Dễ bảo trì
// ✔ Trông giống code đồng bộ (Synchronous)

// Tuy nhiên nó KHÔNG làm block chương trình,
// mà chỉ giúp cú pháp dễ hiểu hơn.

//==================================================
// async là gì?
//==================================================

// async dùng để khai báo một hàm bất đồng bộ.

// Mọi hàm async đều LUÔN trả về Promise.

async function hello() {
  return "Hello JavaScript";
}

console.log(hello());

// Kết quả:
// Promise { "Hello JavaScript" }

hello().then((result) => {
  console.log(result);
});

//==================================================
// await là gì?
//==================================================

// await chỉ được dùng bên trong hàm async.

// await sẽ chờ Promise hoàn thành
// rồi mới thực hiện các dòng tiếp theo.

function delay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hoàn thành");
    }, 2000);
  });
}

async function run() {
  console.log("Bắt đầu");

  const result = await delay();

  console.log(result);

  console.log("Kết thúc");
}

run();

//==================================================
// Ví dụ đơn giản
//==================================================

function getNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
}

async function example1() {
  const number = await getNumber();

  console.log(number);
}

example1();

//==================================================
// Ví dụ nhiều await
//==================================================

function getName() {
  return Promise.resolve("Nguyễn Văn A");
}

function getAge() {
  return Promise.resolve(20);
}

async function example2() {
  const name = await getName();

  const age = await getAge();

  console.log(name);

  console.log(age);
}

example2();

//==================================================
// Async Function luôn trả về Promise
//==================================================

async function sum(a, b) {
  return a + b;
}

sum(5, 7).then((result) => {
  console.log(result);
});

//==================================================
// Ví dụ mô phỏng API
//==================================================

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,

        name: "Admin",
      });
    }, 1500);
  });
}

async function loadUser() {
  console.log("Đang tải...");

  const user = await getUser();

  console.log(user);
}

loadUser();

//==================================================
// await chỉ dùng trong async
//==================================================

// Sai

// const result = await getUser();

// Đúng

async function demo() {
  const result = await getUser();

  console.log(result);
}

demo();

//==================================================
// Ví dụ Promise và Async/Await
//==================================================

// Promise

getUser().then((user) => {
  console.log(user);
});

// Async/Await

async function demo2() {
  const user = await getUser();

  console.log(user);
}

demo2();

//==================================================
// Tóm tắt
//==================================================

// async
// -> Khai báo hàm bất đồng bộ.

// await
// -> Chờ Promise hoàn thành.

// async function luôn trả về Promise.

//==================================================
// Kết thúc phần 1
//==================================================
//==================================================
// Node.js Async/Await
// Phần 2: Error Handling và Đọc File
//==================================================

//==================================================
// Error Handling với try...catch
//==================================================

// Một ưu điểm lớn của async/await là có thể sử dụng
// try...catch giống như code đồng bộ.

async function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Không thể chia cho 0");
    }

    const result = a / b;

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

divide(20, 5);

divide(20, 0);

//==================================================
// Promise bị reject
//==================================================

function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        resolve("Đăng nhập thành công");
      } else {
        reject(new Error("Sai tài khoản hoặc mật khẩu"));
      }
    }, 1000);
  });
}

async function loginUser() {
  try {
    const result = await login("admin", "123456");

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

loginUser();

//==================================================
// Đọc file bằng fs.promises
//==================================================

// fs.promises giúp đọc/ghi file bằng Promise.

const fs = require("fs").promises;

async function readFileExample() {
  try {
    const data = await fs.readFile("myfile.txt", "utf8");

    console.log(data);
  } catch (error) {
    console.log("Lỗi đọc file:");

    console.log(error.message);
  }
}

// readFileExample();

//==================================================
// Ghi file
//==================================================

async function writeFileExample() {
  try {
    await fs.writeFile(
      "hello.txt",

      "Hello Async Await",
    );

    console.log("Đã ghi file");
  } catch (error) {
    console.log(error.message);
  }
}

// writeFileExample();

//==================================================
// Đọc nhiều file
//==================================================

async function readManyFiles() {
  try {
    const file1 = await fs.readFile("file1.txt", "utf8");

    const file2 = await fs.readFile("file2.txt", "utf8");

    console.log(file1);

    console.log(file2);
  } catch (error) {
    console.log(error.message);
  }
}

//==================================================
// Fetch API
//==================================================

// Node.js 18+ đã hỗ trợ fetch()

async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const user = await response.json();

    console.log(user);

    return user;
  } catch (error) {
    console.log(error.message);
  }
}

// fetchUser();

//==================================================
// Throw Error
//==================================================

async function checkAge(age) {
  if (age < 18) {
    throw new Error("Bạn chưa đủ tuổi");
  }

  return "Được phép";
}

async function demo() {
  try {
    const result = await checkAge(16);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

demo();

//==================================================
// .catch() bên ngoài async
//==================================================

async function getMessage() {
  return "Hello";
}

getMessage()
  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });

//==================================================
// Async function có lỗi
//==================================================

async function example() {
  throw new Error("Có lỗi");
}

example().catch((error) => {
  console.log(error.message);
});

//==================================================
// Ví dụ thực tế
//==================================================

async function getProduct() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );

    const product = await response.json();

    console.log(product);
  } catch (error) {
    console.log(error.message);
  }
}

// getProduct();

//==================================================
// Tóm tắt
//==================================================

// try...catch
// -> Bắt lỗi trong async/await

// throw
// -> Phát sinh lỗi

// fs.promises
// -> Đọc ghi file bằng Promise

// fetch()
// -> Gọi API

// .catch()
// -> Có thể bắt lỗi ngoài async function

//==================================================
// Kết thúc phần 2
//==================================================

//==================================================
// Node.js Async/Await
// Phần 3: Parallel, Sequential và Best Practices
//==================================================

//==================================================
// Hàm giả lập API
//==================================================

function fetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data của ID ${id}`);
    }, 1000);
  });
}

//==================================================
// Chạy tuần tự (Sequential)
//==================================================

// Mỗi await sẽ đợi Promise trước hoàn thành.

async function fetchSequential() {
  console.time("Sequential");

  const data1 = await fetchData(1);

  const data2 = await fetchData(2);

  const data3 = await fetchData(3);

  console.timeEnd("Sequential");

  console.log(data1);

  console.log(data2);

  console.log(data3);
}

// fetchSequential();

// Thời gian khoảng:
// ~3 giây

//==================================================
// Chạy song song (Parallel)
//==================================================

// Các Promise chạy cùng lúc.

async function fetchParallel() {
  console.time("Parallel");

  const results = await Promise.all([fetchData(1), fetchData(2), fetchData(3)]);

  console.timeEnd("Parallel");

  console.log(results);
}

// fetchParallel();

// Thời gian khoảng:
// ~1 giây

//==================================================
// So sánh
//==================================================

// Sequential
// await
// await
// await

// Tổng thời gian:
// 3 giây

// Parallel

// Promise.all([
//      promise1,
//      promise2,
//      promise3
// ])

// Tổng thời gian:
// 1 giây

//==================================================
// Demo
//==================================================

async function runDemo() {
  console.log("Sequential");

  await fetchSequential();

  console.log();

  console.log("Parallel");

  await fetchParallel();
}

// runDemo();

//==================================================
// Callback
//==================================================

function getUser(id, callback) {
  setTimeout(() => {
    callback(null, {
      id,

      name: "John",
    });
  }, 1000);
}

function getPosts(user, callback) {
  setTimeout(() => {
    callback(null, ["Post 1", "Post 2"]);
  }, 1000);
}

// Callback Hell

getUser(1, (error, user) => {
  if (error) {
    console.log(error);

    return;
  }

  console.log(user);

  getPosts(user, (error, posts) => {
    if (error) {
      console.log(error);

      return;
    }

    console.log(posts);
  });
});

//==================================================
// Promise
//==================================================

function getUserPromise(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,

        name: "John",
      });
    }, 1000);
  });
}

function getPostsPromise(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

getUserPromise(1)
  .then((user) => {
    console.log(user);

    return getPostsPromise(user);
  })

  .then((posts) => {
    console.log(posts);
  })

  .catch((error) => {
    console.log(error);
  });

//==================================================
// Async/Await
//==================================================

async function getUserAndPosts() {
  try {
    const user = await getUserPromise(1);

    console.log(user);

    const posts = await getPostsPromise(user);

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

getUserAndPosts();

//==================================================
// Async luôn trả về Promise
//==================================================

async function hello() {
  return "Hello";
}

const result = hello();

console.log(result);

hello().then((message) => {
  console.log(message);
});

//==================================================
// Promise.all()
//==================================================

async function loadEverything() {
  const [users, posts, comments] = await Promise.all([
    fetchData("Users"),

    fetchData("Posts"),

    fetchData("Comments"),
  ]);

  console.log(users);

  console.log(posts);

  console.log(comments);
}

// loadEverything();

//==================================================
// util.promisify()
//==================================================

// Chuyển Callback thành Promise.

const util = require("util");

const fs = require("fs");

const readFile = util.promisify(fs.readFile);

async function readText() {
  try {
    const data = await readFile(
      "file.txt",

      "utf8",
    );

    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// readText();

//==================================================
// Best Practices
//==================================================

// 1.

// async luôn trả về Promise.

// 2.

// Dùng await khi cần chờ kết quả.

// 3.

// Dùng Promise.all()
// nếu các Promise có thể chạy cùng lúc.

// 4.

// Luôn dùng try...catch.

// 5.

// Không nên trộn Callback và Async/Await.

// 6.

// Mỗi async function nên chỉ làm
// một nhiệm vụ.

//==================================================
// Top-level await
//==================================================

// Chỉ dùng trong ES Module (ESM)

// Ví dụ:

// const data = await fetch(...)

//==================================================
// Tổng kết
//==================================================

// Callback
// ↓

// Promise
// ↓

// Async/Await

// Async/Await hiện là cách được sử dụng nhiều nhất
// trong Node.js, React, Next.js và các dự án thực tế.

//==================================================
// Hết chương Async/Await
//==================================================
