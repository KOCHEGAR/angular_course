import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [

    new Ingredient("Dr.Pepper", 1),
    new Ingredient("Apples", 12),

  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient: {name:string, amount: number}) {
    
    const funk = (el: Ingredient, index: number, array: Ingredient[]): boolean => {
      console.log(el)
      return el.name === ingredient.name
    }

    if (!this.ingredients.some(funk)) {
      this.ingredients.push(
        new Ingredient(ingredient.name, ingredient.amount)
      );
    }
  }
}
