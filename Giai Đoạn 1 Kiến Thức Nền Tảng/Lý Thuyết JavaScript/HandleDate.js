//==================================================
// JavaScript Date
// Làm việc với Date Object
//==================================================

//==================================================
// Khởi tạo Date
//==================================================

// Lấy ngày giờ hiện tại

const now = new Date();

console.log(now);

//==================================================
// Khởi tạo theo chuỗi
//==================================================

const date1 = new Date("2025-12-25");

console.log(date1);

//==================================================
// Khởi tạo theo năm, tháng, ngày
//==================================================

// Lưu ý:
// Tháng bắt đầu từ 0

const date2 = new Date(
  2025,

  11,

  25,
);

console.log(date2);

//==================================================
// Khởi tạo theo Timestamp
//==================================================

// Timestamp là số mili giây
// tính từ 01/01/1970.

const date3 = new Date(0);

console.log(date3);

//==================================================
// Lấy năm
//==================================================

console.log(now.getFullYear());

//==================================================
// Lấy tháng
//==================================================

// Tháng từ 0 -> 11

console.log(now.getMonth());

//==================================================
// Lấy ngày trong tháng
//==================================================

console.log(now.getDate());

//==================================================
// Lấy thứ
//==================================================

// 0 = Chủ nhật

// 1 = Thứ hai

// ...

// 6 = Thứ bảy

console.log(now.getDay());

//==================================================
// Lấy giờ
//==================================================

console.log(now.getHours());

//==================================================
// Lấy phút
//==================================================

console.log(now.getMinutes());

//==================================================
// Lấy giây
//==================================================

console.log(now.getSeconds());

//==================================================
// Lấy mili giây
//==================================================

console.log(now.getMilliseconds());

//==================================================
// Timestamp
//==================================================

console.log(now.getTime());

//==================================================
// Date.now()
//==================================================

// Timestamp hiện tại.

console.log(Date.now());

//==================================================
// Định dạng ngày
//==================================================

const today = new Date();

const day = today.getDate();

const month = today.getMonth() + 1;

const year = today.getFullYear();

console.log(`${day}/${month}/${year}`);

//==================================================
// Thêm số 0 phía trước
//==================================================

const d = String(day).padStart(2, "0");

const m = String(month).padStart(2, "0");

console.log(`${d}/${m}/${year}`);

//==================================================
// toLocaleDateString()
//==================================================

console.log(today.toLocaleDateString());

//==================================================
// toLocaleTimeString()
//==================================================

console.log(today.toLocaleTimeString());

//==================================================
// toLocaleString()
//==================================================

console.log(today.toLocaleString());

//==================================================
// Định dạng theo Việt Nam
//==================================================

console.log(today.toLocaleDateString("vi-VN"));

//==================================================
// Định dạng theo Mỹ
//==================================================

console.log(today.toLocaleDateString("en-US"));

//==================================================
// Cộng ngày
//==================================================

const tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);

console.log(tomorrow);

//==================================================
// Trừ ngày
//==================================================

const yesterday = new Date();

yesterday.setDate(yesterday.getDate() - 1);

console.log(yesterday);

//==================================================
// Cộng tháng
//==================================================

const nextMonth = new Date();

nextMonth.setMonth(nextMonth.getMonth() + 1);

console.log(nextMonth);

//==================================================
// Trừ tháng
//==================================================

const lastMonth = new Date();

lastMonth.setMonth(lastMonth.getMonth() - 1);

console.log(lastMonth);

//==================================================
// Cộng năm
//==================================================

const nextYear = new Date();

nextYear.setFullYear(nextYear.getFullYear() + 1);

console.log(nextYear);

//==================================================
// Trừ năm
//==================================================

const lastYear = new Date();

lastYear.setFullYear(lastYear.getFullYear() - 1);

console.log(lastYear);

//==================================================
// So sánh Date
//==================================================

const start = new Date("2025-01-01");

const end = new Date("2025-12-31");

console.log(start < end);

//==================================================
// Tính số ngày giữa hai Date
//==================================================

const startDate = new Date("2025-07-01");

const endDate = new Date("2025-07-10");

const diff = endDate.getTime() - startDate.getTime();

const days = diff / (1000 * 60 * 60 * 24);

console.log(days);

//==================================================
// Ví dụ thực tế
//==================================================

// Kiểm tra hết hạn

const expireDate = new Date("2025-12-31");

if (expireDate > new Date()) {
  console.log("Còn hạn");
} else {
  console.log("Đã hết hạn");
}

//==================================================
// Ví dụ thực tế
//==================================================

// Tính tuổi

const birthday = new Date("2003-05-10");

const age = new Date().getFullYear() - birthday.getFullYear();

console.log(age);

//==================================================
// Ví dụ thực tế
//==================================================

// Đếm ngược còn bao nhiêu ngày

const target = new Date("2026-01-01");

const current = new Date();

const remain = target - current;

const remainDays = Math.floor(remain / (1000 * 60 * 60 * 24));

console.log(remainDays);

//==================================================
// Tổng kết
//==================================================

// new Date()
// -------------------
// Tạo Date.

// getFullYear()
// -------------------
// Lấy năm.

// getMonth()
// -------------------
// Lấy tháng.

// (0 - 11)

// getDate()
// -------------------
// Lấy ngày.

// getDay()
// -------------------
// Lấy thứ.

// getTime()
// -------------------
// Timestamp.

// setDate()
// -------------------
// Cộng hoặc trừ ngày.

// setMonth()
// -------------------
// Cộng hoặc trừ tháng.

// setFullYear()
// -------------------
// Cộng hoặc trừ năm.

// toLocaleDateString()
// -------------------
// Định dạng ngày.

// toLocaleTimeString()
// -------------------
// Định dạng giờ.

//==================================================
// Bài tập
//==================================================

// 1.
// In ngày hiện tại.

// 2.
// In:

// dd/mm/yyyy

// 3.
// In:

// hh:mm:ss

// 4.
// Cộng thêm 7 ngày.

// 5.
// Trừ 30 ngày.

// 6.
// Tính số ngày từ hôm nay
// đến 31/12 năm nay.

// 7.
// Tính tuổi theo năm sinh.

//==================================================
// Hết chương Date Object
//==================================================
