import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Checking if this works', 'https://www.recipetineats.com/wp-content/uploads/2021/08/Spaghetti-Puttanesca_64.jpg?resize=650,910'),
    new Recipe('A Test Recipe', 'Checking if this works', 'https://www.recipetineats.com/wp-content/uploads/2021/08/Spaghetti-Puttanesca_64.jpg?resize=650,910')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
