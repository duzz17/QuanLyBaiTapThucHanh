// Bài 7.1. Quản lý đơn hàng     [Nâng cao]
// Cho danh sách đơn hàng. Yêu cầu:
// 1. Dùng filter() + reduce() để tính tổng doanh thu của các đơn hàng "completed".
// 2. Dùng map() + Template String để tạo danh sách chuỗi hiển thị dạng "Đơn #1 - An - 250,000đ - 01/06/2026".
// 3. Dùng reduce() để nhóm đơn hàng theo customer.
// 4. Viết một hàm bất đồng bộ processOrder(order) (giả lập xử lý mất 1 giây), dùng async/await với for...of để xử lý tuần tự tất cả đơn hàng "completed" và in log tiến trình.
const orders = [
  {
    id: 1,
    customer: "An",
    total: 250000,
    date: "2026-06-01",
    status: "completed",
  },
  {
    id: 2,
    customer: "Bình",
    total: 120000,
    date: "2026-06-15",
    status: "cancelled",
  },
  {
    id: 3,
    customer: "Chi",
    total: 500000,
    date: "2026-07-02",
    status: "completed",
  },
];
//1
const totalCompleted = orders
  .filter((user) => user.status === "completed")
  .reduce((sum, s) => sum + s.total, 0);
console.log(totalCompleted);
//2
const list = orders.map(
  (order) =>
    `Đơn #${order.id}-${order.customer}-${order.total}-${order.date}-${order.status}`,
);
console.log(list);
//3

const group = orders.reduce((result, order) => {
  if (!result[order.customer]) {
    result[order.customer] = [];
  }
  result[order.customer].push(order);
  return result;
}, {});
console.log(group);
//4
function processOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Đã xử lý xong đơn #${order.id}`);
      resolve(order);
    }, 1000);
  });
}
async function processCompletedOrders() {
  const completed = orders.filter((user) => user.status === "completed");
  for (const order of completed) {
    console.log(`Đang xử lý đơn #${order.id}`);
    await processOrder(order);
  }
  console.log("Hoan thanh!");
}
// processCompletedOrders();
//====================================================================
// Bài 7.2. Tìm kiếm sản phẩm     [Nâng cao]
// Xây dựng hàm searchProducts(products, keyword): products là mảng object { name, price, category }. Tìm các sản phẩm có tên chứa keyword (không phân biệt hoa thường), trả về bản sao mảng kết quả, sắp xếp theo giá tăng dần.

const products = [
  {
    name: "iPhone 16 Pro",
    price: 32990000,
    category: "Điện thoại",
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    price: 30990000,
    category: "Điện thoại",
  },
  {
    name: "MacBook Air M4",
    price: 28990000,
    category: "Laptop",
  },
  {
    name: "Dell XPS 15",
    price: 35990000,
    category: "Laptop",
  },
  {
    name: "iPad Air M3",
    price: 18990000,
    category: "Máy tính bảng",
  },
  {
    name: "Apple Watch Series 11",
    price: 11990000,
    category: "Đồng hồ",
  },
  {
    name: "AirPods Pro 2",
    price: 5990000,
    category: "Tai nghe",
  },
  {
    name: "Sony WH-1000XM6",
    price: 9990000,
    category: "Tai nghe",
  },
  {
    name: "Logitech MX Master 3S",
    price: 2590000,
    category: "Chuột",
  },
  {
    name: "Keychron K8 Pro",
    price: 2890000,
    category: "Bàn phím",
  },
];

function searchProducts(products, keyword) {
  const filted = products.filter((p) =>
    p.name.toLowerCase().includes(keyword.toLowerCase()),
  );
  return [...filted].sort((a, b) => a.price - b.price);
}
console.log(searchProducts(products, "Air")); // Loc thanh cong
// Bài 7.3. Giả lập lấy dữ liệu thời tiết nhiều thành phố     [Nâng cao]
// Viết hàm fetchWeather(city) trả về Promise, delay ngẫu nhiên, có 20% khả năng bị lỗi. Dùng async/await với try/catch để gọi hàm cho danh sách nhiều thành phố (dùng Promise.allSettled() để xử lý cả trường hợp lỗi). In ra kết quả tổng hợp kèm thời gian gọi.
const cities = ["Hà Nội", "Hải Phòng", "Đà Nẵng", "Huế", "TP Hồ Chí Minh"];

function fetchWeather(city) {
  return new Promise((resolve, reject) => {
    // Delay ngẫu nhiên từ 1 đến 3 giây
    const delay = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
      // 20% xác suất lỗi
      if (Math.random() < 0.2) {
        reject(`Không lấy được dữ liệu của ${city}`);
      } else {
        resolve({
          city,
          temperature: Math.floor(Math.random() * 15) + 20,
          delay,
        });
      }
    }, delay);
  });
}

async function getWeather() {
  try {
    const start = Date.now();

    const promises = cities.map((city) => fetchWeather(city));

    const results = await Promise.allSettled(promises);

    const end = Date.now();

    console.log("===== KẾT QUẢ =====");

    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(
          `${result.value.city}: ${result.value.temperature}°C (${result.value.delay} ms)`,
        );
      } else {
        console.log(`Lỗi: ${result.reason}`);
      }
    });

    console.log(`Tổng thời gian: ${end - start} ms`);
  } catch (error) {
    console.log(error);
  }
}

getWeather();
