import { Category } from "./Category";


export class FakeCategory {

    public myFakeRepo: Array<Category>;

    constructor() {
        this.myFakeRepo=
            [
                new Category(1, "phones"),
                new Category(2, "laptops"),
                new Category(3, "monitors"),
                new Category(4, "headphones"),
                new Category(5, "keyboards")
            ]
    }

}