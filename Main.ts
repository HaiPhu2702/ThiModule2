import {Product} from "./Product";
import {ProductManager} from "./ProductManager";
let productManager=new ProductManager()

//  Create Product
let product1=new Product(1,'IphoneX',"Điện thoại","1000$",300);
let product2=new Product(2,'Samsung S7',"Điện thoại","1200$",200);
let product3=new Product(3,'Vinsmart Pro',"Điện thoại","1300$",100);
let product4=new Product(4,'Daikin Inverter',"Điều hòa","800$",50);
let product5=new Product(5,'Panasonic In',"Tủ Lạnh","700$",70);
let product6=new Product(6,'Samsung J3',"Điện thoại","1600$",10);


//add product
// productManager.add(product1)
// productManager.add(product2)
// productManager.add(product3)
// productManager.add(product4)
// productManager.add(product5)
// productManager.add(product6)
// console.table(productManager.showList());


// delete product
// let result2=productManager.delete(0)
// if(result2){
//     console.log("xóa thành công , bảng sau khi xóa")
//     console.table(productManager.showList());
// }else {
//     console.log("ko tồn tại sản phẩm")
// }



//update
// let a=productManager.update(10, 'IphoneXXXXXXX', 'Phone', '500$', 240)
// if(a){
// console.log("update thành công, bảng sau khi update")
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





