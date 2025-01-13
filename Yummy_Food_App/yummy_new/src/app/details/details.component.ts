import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: false,
  
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  meal: any = null;

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) { 
    activatedRoute.params.subscribe(params => {
      if (params['idMeal']) {
        this.foodService.getMealById(params['idMeal']).subscribe((data: any) => {
        this.meal = data.meals[0];
        //alert(this.meal.strMeal);
      });
    }
  });
  }

  ngOnInit(): void {
    
  }
}
