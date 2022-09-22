import { Category } from "../../Entities/Category";
import { FakeCategory } from "../../Entities/FakeCategory";
import { IEntityRepository } from "../Abstract/IEntityRepository";

let categories = new FakeCategory();

export class EfRepositoryBase implements IEntityRepository {



    AddCategory(kategoryi: Category): void {
        categories.myFakeRepo.push(kategoryi);
    }
    DeleteCategory(numberId: number): void {
        categories.myFakeRepo.splice(<number>numberId-1, 1);
    }
    UpdateCategory(numberId: Category): void {
    categories.myFakeRepo.splice(<number>numberId.id-1,1,numberId);
    }

    GetCategory(): void {

        for (let a of categories.myFakeRepo) {
            console.log(a.id);
            console.log(a.name);
        }
        console.log("All of your products are listed !.");
    }
}