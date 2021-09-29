import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is only for testing', 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1192&q=80'),
        new Recipe('Another test recipe', 'This is only for testing', 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1192&q=80'),
    ];

    getRecipe(){
        return this.recipes.slice();
    }
}