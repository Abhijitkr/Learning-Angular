import {Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListsService } from "../shopping-list/shopping-lists-service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListsService){}

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is only for testing', 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1192&q=80', [new Ingredient('Meat', 1), new Ingredient('bread', 2)]),
        new Recipe('Another test recipe', 'This is only for testing', 'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1192&q=80', [new Ingredient('French Fries', 10), new Ingredient('Buns', 2)]),
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngrediants(ingredients);
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}