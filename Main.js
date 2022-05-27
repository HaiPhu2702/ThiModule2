"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductManager_1 = require("./ProductManager");
var productManager = new ProductManager_1.ProductManager();
//  Create Product
var product1 = new Product_1.Product(1, 'IphoneX', "Điện thoại", "1000$", 300);
var product2 = new Product_1.Product(2, 'Samsung S7', "Điện thoại", "1200$", 200);
var product3 = new Product_1.Product(3, 'Vinsmart Pro', "Điện thoại", "1300$", 100);
var product4 = new Product_1.Product(4, 'Daikin Inverter', "Điều hòa", "800$", 50);
var product5 = new Product_1.Product(5, 'Panasonic In', "Tủ Lạnh", "700$", 70);
var product6 = new Product_1.Product(6, 'Samsung J3', "Điện thoại", "1600$", 10);
//add product
productManager.add(product1);
productManager.add(product2);
productManager.add(product3);
productManager.add(product4);
productManager.add(product5);
productManager.add(product6);
// console.table(productManager.showList());
// delete product
var result2 = productManager["delete"](0);
if (result2) {
    console.log("xóa thành công , bảng sau khi xóa");
    console.table(productManager.showList());
}
else {
    console.log("ko tồn tại sản phẩm");
}
//update
// let a=productManager.update(10, 'IphoneXXXXXXX', 'Phone', '500$', 240)
// if(a){
//     console.table(productManager.showList());
// }else {
//     console.log("ko tồn tại sản phẩm")
// }
//searchName
// let reslt=productManager.searchName('IphoneX');
// if(reslt){
//     console.log("tìm thấy")
// }else {
//     console.log("ko tìm thấy")
// }
//
//searchId
// let reslt2=productManager.searchID(10);
// if(reslt2){
//     console.log("tìm thấy")
// }else {
//     console.log("ko tìm thấy")
// }
