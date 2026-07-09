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
