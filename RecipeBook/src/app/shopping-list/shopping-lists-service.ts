import { EventEmitter, Injectable, Output } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListsService{

    @Output() ingredientChanged = new EventEmitter<Ingredient[]>();
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
}