console.log("\tBài 2");

function inSoChanDenN(n) {
    console.log("Các số chẵn từ 1 đến", n, "là: ");

    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
}

let n = Number(prompt("Nhập số nguyên dương n: "));
inSoChanDenN(n);