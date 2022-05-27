"use strict";
exports.__esModule = true;
exports.ProductManager = void 0;
var Product_1 = require("./Product");
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.ListProduct = [];
    }
    ProductManager.prototype.showList = function () {
        return this.ListProduct;
    };
    ProductManager.prototype.add = function (product) {
        this.ListProduct.push(product);
    };
    ProductManager.prototype["delete"] = function (index) {
        if (this.searchID(index) == true) {
            this.ListProduct.splice(index, 1);
            return true;
        }
        return false;
    };
    ProductManager.prototype.update = function (index, Name, Type, Price, Number) {
        if (this.searchID(index) == true) {
            var product1 = new Product_1.Product(index, Name, Type, Price, Number);
            this.ListProduct[index] = product1;
            return true;
        }
        return false;
    };
    ProductManager.prototype.searchID = function (Index) {
        var find = 0;
        this.ListProduct.forEach(function (value, index1) {
            if (index1 == Index) {
                find++;
            }
        });
        if (find == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    ProductManager.prototype.searchName = function (nameProduct) {
        var find = 0;
        this.ListProduct.forEach(function (value, index) {
            if (value.Name == nameProduct) {
                find++;
            }
        });
        if (find == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
