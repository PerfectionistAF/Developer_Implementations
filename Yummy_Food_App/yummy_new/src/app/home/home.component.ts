import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import * as nationalities from 'i18n-nationality';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];//String[] = [];
  menus: any[] = [];
  meals: Food[] = [];
  names: String[] = [];
  //images: String[] = [];
  caption: String[] = [];
  constructor(private foodService: FoodService) { } //DEPENDENCY INJECTION

  ngOnInit(): void {

    //this.foods = this.foodService.getAll();   //CREATING AN INSTANCE EACH TIME
    for (let i = 0; i < 8; i++) {
      this.foodService.getFood().subscribe((data) => {
        this.menus.push(data.meals[0]);
        this.names.push(data.meals[0].strMeal.slice(0, 20));
        const caption = this.getCode(data.meals[0].strArea);
        this.caption.push(caption);
      });
  }

}

  getCode(nationality: string) : string {    ///then get flags per each alpha2code
    return nationalities.getAlpha2Code(nationality, "en");
}

}
