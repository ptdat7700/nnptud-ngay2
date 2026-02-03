// Câu 1: Constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

// Câu 2: Mảng products (ít nhất 6 sản phẩm, ≥ 2 danh mục)
let products = [
    new Product(1, "iPhone 15", 35000000, 5, "Phone", true),
    new Product(2, "Samsung S24", 30000000, 0, "Phone", true),
    new Product(3, "MacBook Pro", 52000000, 3, "Laptop", true),
    new Product(4, "AirPods Pro", 6500000, 10, "Accessories", true),
    new Product(5, "Sạc nhanh Anker", 1200000, 15, "Accessories", false),
    new Product(6, "iPad Air", 18000000, 7, "Tablet", true)
];

const output = document.getElementById("output");

// Câu 3: Mảng mới chỉ chứa name, price
let namePriceList = products.map(p => ({
    name: p.name,
    price: p.price
}));

// Câu 4: Lọc sản phẩm còn hàng
let inStockProducts = products.filter(p => p.quantity > 0);

// Câu 5: Kiểm tra có sản phẩm giá > 30.000.000
let hasExpensiveProduct = products.some(p => p.price > 30000000);

// Câu 6: Kiểm tra tất cả sản phẩm Accessories có đang bán không
let accessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

// Câu 7: Tổng giá trị kho hàng
let totalInventoryValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
);

// Câu 8: for...of duyệt mảng
let forOfResult = "";
for (let p of products) {
    forOfResult += `${p.name} - ${p.category} - ${p.isAvailable}\n`;
}

// Câu 9: for...in
let forInResult = "";
for (let key in products[0]) {
    forInResult += `${key}: ${products[0][key]}\n`;
}

// Câu 10: Danh sách sản phẩm đang bán và còn hàng
let sellingAndInStock = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

// In kết quả ra màn hình
output.textContent = `
Câu 3 - Name & Price:
${JSON.stringify(namePriceList, null, 2)}

Câu 4 - Còn hàng:
${inStockProducts.map(p => p.name).join(", ")}

Câu 5 - Có sản phẩm > 30tr:
${hasExpensiveProduct}

Câu 6 - Accessories đang bán:
${accessoriesAvailable}

Câu 7 - Tổng giá trị kho:
${totalInventoryValue.toLocaleString()} VND

Câu 8 - for...of:
${forOfResult}

Câu 9 - for...in (Product đầu tiên):
${forInResult}

Câu 10 - Đang bán & còn hàng:
${sellingAndInStock.join(", ")}
`;
