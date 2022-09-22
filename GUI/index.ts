import { CategoryManager } from "../Business/Concrate/CategoryManager";
import { Category } from "../Entities/Category";

let categories = new CategoryManager();

console.log(categories.GetCategory());
console.log("------------------------");

let myCategory = new Category();
myCategory.id = 6;
myCategory.name = "modem";

categories.AddCategory(myCategory);
console.log(categories.GetCategory());
console.log("------------------------");

myCategory.name="cameras";
categories.UpdateCategory(myCategory);
console.log(categories.GetCategory());
console.log("------------------------");

categories.DeleteCategory(myCategory.id);
console.log(categories.GetCategory());