"use strict";
exports.__esModule = true;
exports.CategoryManager = void 0;
var EFRepositoryBase_1 = require("../../DataAcces/Concrate/EFRepositoryBase");
var CategoryManager = /** @class */ (function () {
    function CategoryManager() {
        this._entityRepository = new EFRepositoryBase_1.EfRepositoryBase();
    }
    CategoryManager.prototype.GetCategory = function () {
        this._entityRepository.GetCategory();
    };
    CategoryManager.prototype.AddCategory = function (kategoryi) {
        this._entityRepository.AddCategory(kategoryi);
    };
    CategoryManager.prototype.DeleteCategory = function (numberId) {
        this._entityRepository.DeleteCategory(numberId);
    };
    CategoryManager.prototype.UpdateCategory = function (numberId) {
        this._entityRepository.UpdateCategory(numberId);
    };
    return CategoryManager;
}());
exports.CategoryManager = CategoryManager;
