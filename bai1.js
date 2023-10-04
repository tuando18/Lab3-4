console.log("\tBài 1");

function tinhChuViHinhTron(banKinh) {
    let chuVi = 2 * 3.14 * banKinh;
    return chuVi;
}

// Nhập bán kính
let banKinh = Number(prompt("Nhập bán kính hình tròn: "));
if (!isNaN(banKinh) && banKinh >= 0) {
    // Tính chu vi hình tròn bằng cách gọi hàm tinhChuViHinhTron
    let chuViHinhTron = tinhChuViHinhTron(banKinh);

    // In ra màn hình chu vi của hình tròn
    console.log("Chu vi của hình tròn là:", chuViHinhTron);
    } else {
        console.log("Bán kính không hợp lệ. Vui lòng nhập một số dương.");
    }