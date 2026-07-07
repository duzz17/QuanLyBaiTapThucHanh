//==========================================
//=======HÀM MŨI TÊN (Arrow Function)=======
//==========================================
/*
Hàm mũi tên cho phép viết cú pháp ngắn hơn cho biểu thức hàm
có thể bỏ qua từ khóa "function", return , và dấu ngoặc nhọn
ví dụ:
*/
/*
const multiply = (a, b) => a * b;
*/

// cú pháp chuẩn hàm bình thường
/*
const multiply = function (a, b) {
  return a * b;
};

*/
/*
const hello = function () {
  return "hello world";
};

*/
// hàm mũi tên
const multiply = (a, b) => a * b;
const hello = () => "hello world";
//============================================================
//=======HÀM MŨI TÊN VỚI MỘT THAM SỐ TRUYỀN VÀO=================
// có ngoặc tròn "()"
const square = (x) => x * x;
const helloVal1 = (val) => "hello" + val;
// không có ngoặc tròn
const square1 = (x) => x * x;
const helloVal2 = (val) => "hello" + val;
//===========HÀM MŨI TÊN TRẢ VỀ THEO GIÁ TRỊ MẶC ĐỊNH==========
const helloDefault = () => "hello";
// ======Lưu ý chỉ có thể bỏ "return và ngoặc nhọn" khi hàm có chức năng là một tuyên bố=====
// ======Các hàm mũi tên phải được xác định trước khi sử dụng=======

/*
sử dụng hàm mũi tên khi : muốn viết hàm ngắn hơn, dùng làm hàm gọi lại, giữ nguyên "this" của phạm vi bên ngoài
*/
/*
không sử dụng hàm mũi tên khi : làm phương thức của đối tượng, sử dụng "this" trong hàm mũi tên, chỉ được gọi sau khi khai báo
*/
