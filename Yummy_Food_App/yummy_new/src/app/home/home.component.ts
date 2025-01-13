import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import * as nationalities from 'i18n-nationality';
import { findFlagUrlByNationality } from "country-flags-svg";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  //foods: Food[] = [];//String[] = [];
  menus: any[] = [];
  filtered: any[] = [];
  //meals: Food[] = [];
  names: String[] = [];
  //images: String[] = [];
  //caption: String[] = [];
  flags: String[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) { } //DEPENDENCY INJECTION

  ngOnInit(): void {

    //this.foods = this.foodService.getAll();   //CREATING AN INSTANCE EACH TIME
    const menu_arr = [];
    for (let i = 0; i < 8; i++) {
      this.foodService.getFood().subscribe((data) => {
        this.menus.push(data.meals[0]);
        menu_arr.push(data.meals[0]);
        this.names.push(data.meals[0].strMeal.slice(0, 23));
        const flagUrl = this.getFlagUrl(data.meals[0].strArea);
        this.flags.push(flagUrl);
        //console.log(data.meals[0].strArea + "--->" + this.caption);

        //CORRECTED Apply filtering logic here
      this.route.params.subscribe((params) => {
        // any time the .params change, subscribe into new changes
        if (params['searchTerm']) {
          this.filtered = this.menus.filter((menu: { strCategory: string; }) => 
            menu.strCategory.toLowerCase().includes(params['searchTerm'].toLowerCase())
          );
        } 
        else {
          this.filtered = this.menus;
          //alert("No search term found");
        }
      });
    });
  }
}
  

  getCode(nationality: string) : string {    ///then get flags per each alpha2code
    return nationalities.getAlpha2Code(nationality, "en");
  }
  
  getFlagUrl(nationality: string): string {
    const alpha2Code = nationalities.getAlpha2Code(nationality, "en");
    const flagUrl = findFlagUrlByNationality(nationality);
    return flagUrl;
  }

  toggleCheck(meal: any): void {
    meal.checked = !meal.checked;
  }
  ///if checked then add to recipe list
}
