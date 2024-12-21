import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): String[] {
    return [
      '/assets/images/pasta1.jpg',   ///under public folder ONLY
      //'./pasta1.png'
    ]
  }
}
