//==================================================
// JavaScript Promises
// Phần 1: Promise là gì?
//==================================================

// Promise đại diện cho kết quả của một tác vụ bất đồng bộ (Asynchronous).
// Nó là một "lời hứa" rằng trong tương lai sẽ trả về:
// 1. Thành công (resolve)
// 2. Thất bại (reject)

//==================================================
// Promise có 3 trạng thái
//==================================================

// 1. pending
//    Tác vụ đang thực hiện.

// 2. fulfilled
//    Thành công.

// 3. rejected
//    Thất bại.

//==================================================
// Cú pháp tạo Promise
//==================================================

const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Đã hoàn thành");
  } else {
    reject("Có lỗi xảy ra");
  }
});

//==================================================
// Sử dụng Promise
//==================================================

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//==================================================
// Ví dụ 1
//==================================================

const login = new Promise((resolve, reject) => {
  const isLogin = true;

  if (isLogin) {
    resolve("Đăng nhập thành công");
  } else {
    reject("Sai tài khoản hoặc mật khẩu");
  }
});

login
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//==================================================
// Promise hoạt động bất đồng bộ
//==================================================

console.log("Bắt đầu");

const data = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Đã lấy dữ liệu");
  }, 2000);
});

data.then((result) => {
  console.log(result);
});

console.log("Kết thúc");

// Kết quả:
//
// Bắt đầu
// Kết thúc
// Đã lấy dữ liệu

//==================================================
// resolve()
//==================================================

// resolve() dùng để báo Promise thành công.

const getNumber = new Promise((resolve) => {
  resolve(100);
});

getNumber.then((number) => {
  console.log(number);
});

//==================================================
// reject()
//==================================================

// reject() dùng để báo Promise thất bại.

const getError = new Promise((resolve, reject) => {
  reject("Không thể kết nối Server");
});

getError
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//==================================================
// then()
//==================================================

// then() chỉ chạy khi Promise thành công.

const student = new Promise((resolve) => {
  resolve({
    id: 1,
    name: "An",
    age: 20,
  });
});

student.then((data) => {
  console.log(data.id);
  console.log(data.name);
  console.log(data.age);
});

//==================================================
// Ví dụ lấy dữ liệu giả lập
//==================================================

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        username: "admin",
      });
    }, 1500);
  });
}

fetchUser().then((user) => {
  console.log(user);
});

//==================================================
// Ví dụ Promise trả về mảng
//==================================================

function getProducts() {
  return new Promise((resolve) => {
    resolve(["Laptop", "Keyboard", "Mouse", "Monitor"]);
  });
}

getProducts().then((products) => {
  products.forEach((product) => {
    console.log(product);
  });
});

//==================================================
// Kết thúc phần 1
//==================================================

//==================================================
// JavaScript Promises
// Phần 2: catch(), finally(), Promise Chaining
//==================================================

//==================================================
// catch()
//==================================================

// catch() dùng để bắt lỗi khi Promise bị reject.

const promise1 = new Promise((resolve, reject) => {
  const success = false;

  if (success) {
    resolve("Thành công");
  } else {
    reject("Đã xảy ra lỗi");
  }
});

promise1
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//==================================================
// Ví dụ chia số
//==================================================

function divide(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Không thể chia cho 0");
    } else {
      resolve(a / b);
    }
  });
}

divide(20, 5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

divide(20, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//==================================================
// finally()
//==================================================

// finally() luôn chạy dù Promise thành công hay thất bại.

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Đăng nhập thành công");
  }, 1000);
});

promise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Hoàn thành xử lý Promise");
  });

//==================================================
// Ví dụ finally()
//==================================================

function loadingData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Đã tải dữ liệu");
    }, 2000);
  });
}

loadingData()
  .then((result) => {
    console.log(result);
  })
  .finally(() => {
    console.log("Ẩn Loading...");
  });

//==================================================
// Promise Chaining
//==================================================

// Promise có thể nối nhiều then() với nhau.

const promise3 = new Promise((resolve) => {
  resolve(10);
});

promise3
  .then((number) => {
    console.log(number);

    return number * 2;
  })
  .then((number) => {
    console.log(number);

    return number + 5;
  })
  .then((number) => {
    console.log(number);
  });

//==================================================
// Ví dụ xử lý dữ liệu
//==================================================

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Nguyễn Văn A",
      });
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log(user);

    return user.name;
  })

  .then((name) => {
    console.log("Tên:", name);

    return name.toUpperCase();
  })

  .then((name) => {
    console.log(name);
  });

//==================================================
// Chaining nhiều Promise
//==================================================

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Bước 1");

      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Bước 2");

      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Bước 3");

      resolve();
    }, 1000);
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(() => {
    console.log("Hoàn thành");
  });

//==================================================
// Promise trả về Promise
//==================================================

function doubleNumber(number) {
  return new Promise((resolve) => {
    resolve(number * 2);
  });
}

Promise.resolve(5)

  .then(doubleNumber)

  .then(doubleNumber)

  .then(doubleNumber)

  .then((result) => {
    console.log(result);
  });

//==================================================
// Xử lý lỗi trong Chaining
//==================================================

Promise.resolve(10)

  .then((number) => {
    return number * 2;
  })

  .then((number) => {
    throw new Error("Có lỗi xảy ra");
  })

  .then((number) => {
    console.log(number);
  })

  .catch((error) => {
    console.log(error.message);
  })

  .finally(() => {
    console.log("Đã kết thúc");
  });

//==================================================
// Ví dụ thực tế
//==================================================

function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        resolve({
          id: 1,
          username: "admin",
        });
      } else {
        reject("Sai tài khoản hoặc mật khẩu");
      }
    }, 1500);
  });
}

login("admin", "123456")
  .then((user) => {
    console.log(user);
  })

  .catch((error) => {
    console.log(error);
  })

  .finally(() => {
    console.log("Đóng kết nối");
  });

//==================================================
// Tóm tắt
//==================================================

// then()
// -> Chạy khi Promise thành công.

// catch()
// -> Chạy khi Promise thất bại.

// finally()
// -> Luôn chạy sau cùng.

// Promise Chaining
// -> Nối nhiều then() để xử lý liên tiếp.

//==================================================
// Kết thúc phần 2
//==================================================
//==================================================
// JavaScript Promises
// Phần 3: Promise API
//==================================================

//==================================================
// Promise.resolve()
//==================================================

// Tạo ngay một Promise thành công.

const promise1 = Promise.resolve("Hello Promise");

promise1.then((result) => {
  console.log(result);
});

//==================================================
// Promise.reject()
//==================================================

// Tạo ngay một Promise thất bại.

const promise2 = Promise.reject("Có lỗi xảy ra");

promise2.catch((error) => {
  console.log(error);
});

//==================================================
// Promise.all()
//==================================================

// Chỉ thành công khi TẤT CẢ Promise đều thành công.

const p1 = new Promise((resolve) => {
  setTimeout(() => resolve("User"), 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => resolve("Product"), 2000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("Order"), 3000);
});

Promise.all([p1, p2, p3])

  .then((results) => {
    console.log(results);
  })

  .catch((error) => {
    console.log(error);
  });

//==================================================
// Promise.all() có lỗi
//==================================================

const a = Promise.resolve("A");

const b = Promise.reject("B lỗi");

const c = Promise.resolve("C");

Promise.all([a, b, c])

  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });

//==================================================
// Promise.allSettled()
//==================================================

// Trả về kết quả của tất cả Promise,
// bất kể thành công hay thất bại.

const x = Promise.resolve("Đúng");

const y = Promise.reject("Sai");

const z = Promise.resolve("OK");

Promise.allSettled([x, y, z])

  .then((results) => {
    console.log(results);
  });

//==================================================
// Promise.race()
//==================================================

// Promise nào hoàn thành trước sẽ lấy kết quả đó.

const fast = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Nhanh");
  }, 1000);
});

const slow = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Chậm");
  }, 3000);
});

Promise.race([fast, slow])

  .then((result) => {
    console.log(result);
  });

//==================================================
// Promise.any()
//==================================================

// Trả về Promise thành công đầu tiên.

const promiseA = Promise.reject("A");

const promiseB = new Promise((resolve) => {
  setTimeout(() => {
    resolve("B");
  }, 2000);
});

const promiseC = new Promise((resolve) => {
  setTimeout(() => {
    resolve("C");
  }, 1000);
});

Promise.any([promiseA, promiseB, promiseC])

  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });

//==================================================
// Ví dụ tải dữ liệu đồng thời
//==================================================

function getUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["An", "Bình"]);
    }, 1000);
  });
}

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Laptop", "Mouse"]);
    }, 2000);
  });
}

Promise.all([getUsers(), getProducts()])

  .then(([users, products]) => {
    console.log(users);

    console.log(products);
  });

//==================================================
// Ví dụ giả lập API
//==================================================

function fakeAPI(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
}

Promise.all([
  fakeAPI("User", 1000),

  fakeAPI("Category", 1500),

  fakeAPI("Product", 2000),
])

  .then((results) => {
    console.log(results);
  });

//==================================================
// So sánh Promise API
//==================================================

// Promise.all()
// ------------------------
// Thành công khi tất cả thành công.
// Có 1 Promise lỗi -> toàn bộ lỗi.

// Promise.allSettled()
// ------------------------
// Luôn trả về kết quả của tất cả Promise.

// Promise.race()
// ------------------------
// Promise nào hoàn thành trước thì lấy kết quả đó.

// Promise.any()
// ------------------------
// Promise thành công đầu tiên sẽ được trả về.
// Chỉ lỗi khi tất cả đều reject.

//==================================================
// Ví dụ tổng hợp
//==================================================

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Đăng nhập");
  }, 1000);
});

const profile = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Thông tin cá nhân");
  }, 1500);
});

const cart = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Giỏ hàng");
  }, 1200);
});

Promise.all([login, profile, cart])

  .then(([user, info, shoppingCart]) => {
    console.log(user);

    console.log(info);

    console.log(shoppingCart);
  });

//==================================================
// Bài tập 1
//==================================================

// Tạo Promise trả về số 100 sau 2 giây.

//==================================================
// Bài tập 2
//==================================================

// Tạo Promise kiểm tra số chẵn.
// Nếu chẵn resolve()
// Nếu lẻ reject()

//==================================================
// Bài tập 3
//==================================================

// Viết Promise lấy danh sách sản phẩm giả lập.

//==================================================
// Bài tập 4
//==================================================

// Dùng Promise.all()
// để lấy đồng thời:
// User
// Product
// Order

//==================================================
// Bài tập 5
//==================================================

// Viết Promise.race()
// gồm 3 Promise có thời gian khác nhau.

//==================================================
// Tổng kết
//==================================================

// Promise có 3 trạng thái:
// 1. Pending
// 2. Fulfilled
// 3. Rejected

// Các phương thức quan trọng:

// then()
// catch()
// finally()

// Promise.resolve()
// Promise.reject()
// Promise.all()
// Promise.allSettled()
// Promise.race()
// Promise.any()

//==================================================
// Hết chương JavaScript Promise
//==================================================
