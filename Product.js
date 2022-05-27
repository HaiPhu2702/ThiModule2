"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(ID, Name, Type, Price, Number) {
        this._ID = ID;
        this._Name = Name;
        this._Type = Type;
        this._Price = Price;
        this._Number = Number;
    }
    Object.defineProperty(Product.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        set: function (value) {
            this._ID = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Name", {
        get: function () {
            return this._Name;
        },
        set: function (value) {
            this._Name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Type", {
        get: function () {
            return this._Type;
        },
        set: function (value) {
            this._Type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Number", {
        get: function () {
            return this._Number;
        },
        set: function (value) {
            this._Number = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
