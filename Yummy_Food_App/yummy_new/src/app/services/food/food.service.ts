import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  constructor(private http: HttpClient) { }

  getAll(): Food[]{//String[] {
    return [
      {
        idMeal: 1,
        strMeal: 'Pasta',
        strCategory: 'Main Course',
        strArea: 'Italy',
        strMealThumb: '/assets/images/pasta1.jpg'
      }
      //'/assets/images/pasta1.jpg',   ///under public folder ONLY
      //'./pasta1.png'
    ]
  }

  getFood(): Observable<any> {
    /*const image_array = [];
    for (let i = 0; i < 5; i++) {
      image_array[i] = this.http.get(this.apiUrl);
    }*/
    return this.http.get(this.apiUrl);     ///ENTIRE REQUEST AND DETAILS, meal_db_api.json
  }

  /************WRONG IMPLEMENTATION SINCE MODEL SHOULD HAVE SAME SCHEMA******************/
  getFoodModel(): Observable<Food> {
    return this.http.get<Food>(this.apiUrl);  ///ONLY THE FOOD MODEL
  }
}
