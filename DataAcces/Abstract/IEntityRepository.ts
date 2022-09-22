import { Category } from "../../Entities/Category";

export interface IEntityRepository  {

    AddCategory(kategoryi:Category):void;
    DeleteCategory(numberId:number):void;
    UpdateCategory(numberId:Category):void;
    GetCategory(): void;
}