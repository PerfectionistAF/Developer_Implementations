export class Food{
    /*constructor(id:number){
        this.id=id;
    }*/
    idMeal ?: number;   
    ///type checking, data model attributes should be defined either by constructor or by option
    //!: means it is obligatory inserting new food
    //?: means it is optional 
    // = means it is default value
    strMeal !: string;
    strCategory !: string;
    strArea ?: string;
    strMealThumb !: string;
}