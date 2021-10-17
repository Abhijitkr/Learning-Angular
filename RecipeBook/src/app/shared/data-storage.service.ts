import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RecipeService } from "../recipes/recipe-service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn: "root"})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://learning-angular-a1274-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json', recipes)
        .subscribe(
            response => {
                console.log(response);    
            }
        );
    }

    fetchRecipe(){
        this.http.get<Recipe[]>('https://learning-angular-a1274-default-rtdb.asia-southeast1.firebasedatabase.app/recipes.json')
        .subscribe(recipes => {
            this.recipeService.setRecipes(recipes);
        });
    }
}