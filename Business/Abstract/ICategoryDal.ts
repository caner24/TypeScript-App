import { Category } from "../../Entities/Category";

export interface ICategoryDal  {

    AddCategory(kategoryi:Category):void;
    DeleteCategory(numberId:number):void;
    UpdateCategory(numberId:Category):void;
    GetCategory():void;
}