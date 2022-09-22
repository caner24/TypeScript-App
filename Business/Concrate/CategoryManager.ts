import { Category } from "../../Entities/Category";
import { ICategoryDal } from "../Abstract/ICategoryDal";
import { IEntityRepository } from "../../DataAcces/Abstract/IEntityRepository";
import { EfRepositoryBase } from "../../DataAcces/Concrate/EFRepositoryBase";

export class CategoryManager implements ICategoryDal {


    private _entityRepository: IEntityRepository;
    constructor() {
        this._entityRepository = new EfRepositoryBase();
    }

    GetCategory(): void {
        this._entityRepository.GetCategory();
    }

    AddCategory(kategoryi: Category): void {
        this._entityRepository.AddCategory(kategoryi);
    }
    DeleteCategory(numberId: number): void {
        this._entityRepository.DeleteCategory(numberId);
    }
    UpdateCategory(numberId: Category): void {
        this._entityRepository.UpdateCategory(numberId);
    }
}