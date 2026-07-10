// +++++++ 6. Xử Lý Date ++++++++++
// Bài 6.1. Lấy ngày/tháng/năm hiện tại     [Cơ bản]
// Tạo một đối tượng Date cho ngày hiện tại. In ra ngày, tháng, năm dùng getDate(), getMonth(), getFullYear() (lưu ý getMonth() bắt đầu từ 0).
const today = new Date();
const day = today.getDay();
const month = today.getMonth() + 1;
const year = today.getFullYear();
// console.log(`Today is ${day}/${month}/${year}`);
// Bài 6.2. Khởi tạo Date theo dd/mm/yyyy     [Cơ bản]
// Tạo đối tượng Date cho ngày sinh nhật của bạn. In ra dưới định dạng dd/mm/yyyy bằng Template String.
// new Date(2004, 4, 15) // ví dụ 15/05/2004
const date1 = new Date(2026, 7, 12);
const myDate = new Date(2005, 10, 28);
// Bài 6.3. Định dạng ngày với padStart     [Trung bình]
// Viết hàm formatDate(date) nhận vào một đối tượng Date và trả về chuỗi định dạng "dd/mm/yyyy", có xử lý thêm số 0 phía trước nếu ngày/tháng nhỏ hơn 10.
function formatDate(date) {
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth()).padStart(2, "0");
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
console.log(formatDate(myDate));
// Bài 6.4. Cộng ngày vào Date     [Trung bình]
// Viết hàm addDays(date, days) trả về một đối tượng Date mới sau khi cộng thêm số ngày days vào date (không được làm thay đổi date gốc).
let test1 = new Date(2026, 2, 4);
const day1 = 16;
function addDays(date, days) {
  let day = date.getDate() + days;
  let month = date.getMonth();
  let year = date.getFullYear();
  return { day, month, year };
}
console.log(addDays(test1, day1));
// Bài 6.5. Tính số ngày chênh lệch     [Trung bình]
// Viết hàm diffInDays(date1, date2) tính số ngày chênh lệch giữa hai đối tượng Date.

/*
ta có hàm getTime() để lấy số mili giây
hàm Math.abs() để lấy giá trị tuyệt đối
getDate() được dùng để lấy ngày trong tháng
getTime() được dùng để lấy số mili giây từ 01/01/1970 đến thời điểm đó
*/
function diffInDays(date1, date2) {
  let diff = Math.abs(date2.getTime() - date1.getTime());
  const day = diff / (1000 * 60 * 60 * 24);
  return `Vay so ngay chenh lech la: ${day}`;
}
const day2 = new Date(2026, 5, 3);
const day3 = new Date(2029, 2, 19);
console.log(diffInDays(day2, day3));
// Bài 6.6. Tính ngày tốt nghiệp dự kiến     [Nâng cao]
// Cho ngày nhập học. Viết hàm tính ngày tốt nghiệp dự kiến sau 4 năm (addYears), và tính số ngày còn lại từ hôm nay đến ngày tốt nghiệp đó.
const enrollDate = new Date(2024, 8, 5); // 5/9/2024
function DuKienTotNghiep(date, addYears) {
  return new Date(
    date.getFullYear() + addYears,
    date.getMonth(),
    date.getDate(),
  );
}
function diffInDays2(date1, date2) {
  let diff = Math.abs(date2.getTime() - date1.getTime());
  const day = diff / (1000 * 60 * 60 * 24);
  return `Vay so ngay con lai la: ${day}`;
}
console.log(today);
console.log(DuKienTotNghiep(enrollDate, 4));
console.log(diffInDays2(today, DuKienTotNghiep(enrollDate, 4)));
// Bài 6.7. Kiểm tra ngày cuối tuần     [Nâng cao]
// Viết hàm isWeekend(date) kiểm tra xem một ngày có rơi vào Thứ Bảy hoặc Chủ Nhật hay không. Sau đó viết hàm countWeekendsInRange(startDate, endDate) đếm số ngày cuối tuần trong một khoảng thời gian.
function isWeekend(date) {
  return date.getDay() === 0 || date.getDay() === 6;
}

function countWeekendsInRange(startDate, endDate) {
  let count = 0;
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    if (isWeekend(currentDate)) {
      count++;
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return count;
}

const start = new Date(2026, 6, 1);
const end = new Date(2026, 6, 31);

console.log(countWeekendsInRange(start, end));
