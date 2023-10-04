console.log("\tBài 3");

let thongKeBanHang = [
    {
        sanPham : "Iphone 15",
        soLuong : 5,
        donGia : 21000000
    }, 
    {
        sanPham : "Iphone 15 Pro",
        soLuong : 2,
        donGia : 28000000
    }, 
    {
        sanPham : "Iphone 15 Pro Max",
        soLuong : 5,
        donGia : 21000000
    }, 
]

let inDuLieu = [thongKeBanHang];
console.log("Dữ liệu mảng thống kê: ", inDuLieu);

let soLuong = Number(prompt("Số lượng của Iphone 15 Plus: "));
let donGia = Number(prompt("Đơn giá của Iphone 15 Plus: "));