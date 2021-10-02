import { EventEmitter, Injectable, Output } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListsService{

    ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 2),
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      onIngredientAdded(addIngredient: Ingredient){
        this.ingredients.push(addIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }

      addIngrediants(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}