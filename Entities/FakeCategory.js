"use strict";
exports.__esModule = true;
exports.FakeCategory = void 0;
var Category_1 = require("./Category");
var FakeCategory = /** @class */ (function () {
    function FakeCategory() {
        this.myFakeRepo =
            [
                new Category_1.Category(1, "phones"),
                new Category_1.Category(2, "laptops"),
                new Category_1.Category(3, "monitors"),
                new Category_1.Category(4, "headphones"),
                new Category_1.Category(5, "keyboards")
            ];
    }
    return FakeCategory;
}());
exports.FakeCategory = FakeCategory;
