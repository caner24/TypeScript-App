"use strict";
exports.__esModule = true;
exports.EfRepositoryBase = void 0;
var FakeCategory_1 = require("../../Entities/FakeCategory");
var categories = new FakeCategory_1.FakeCategory();
var EfRepositoryBase = /** @class */ (function () {
    function EfRepositoryBase() {
    }
    EfRepositoryBase.prototype.AddCategory = function (kategoryi) {
        categories.myFakeRepo.push(kategoryi);
    };
    EfRepositoryBase.prototype.DeleteCategory = function (numberId) {
        categories.myFakeRepo.splice(numberId - 1, 1);
    };
    EfRepositoryBase.prototype.UpdateCategory = function (numberId) {
        categories.myFakeRepo.splice(numberId.id - 1, 1, numberId);
    };
    EfRepositoryBase.prototype.GetCategory = function () {
        for (var _i = 0, _a = categories.myFakeRepo; _i < _a.length; _i++) {
            var a = _a[_i];
            console.log(a.id);
            console.log(a.name);
        }
        console.log("All of your products are listed !.");
    };
    return EfRepositoryBase;
}());
exports.EfRepositoryBase = EfRepositoryBase;
