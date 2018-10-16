import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-item/recipe-item.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Recipe Name", 
               "Recipe description", 
               "https://media.musely.com/u/e823deeb-c82b-4ee5-ab06-95db6fcc304f.jpg"),

    new Recipe("Recipe Name 1", 
               "Recipe description", 
               "https://media.musely.com/u/e823deeb-c82b-4ee5-ab06-95db6fcc304f.jpg"),

    new Recipe("Recipe Name 2", 
               "Recipe description", 
               "https://media.musely.com/u/e823deeb-c82b-4ee5-ab06-95db6fcc304f.jpg")
               
    ];

  constructor() { }

  ngOnInit() {
  }

}
