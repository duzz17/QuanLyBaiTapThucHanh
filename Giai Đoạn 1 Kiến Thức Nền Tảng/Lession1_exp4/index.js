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
