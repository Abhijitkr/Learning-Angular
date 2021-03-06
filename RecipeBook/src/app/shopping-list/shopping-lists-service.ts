import {Injectable} from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListsService{
    startedEditing = new Subject<Number>();
    ingredientChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 2),
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      getIngredient(index: number){
        return this.ingredients[index];
      }

      onIngredientAdded(addIngredient: Ingredient){
        this.ingredients.push(addIngredient);
        this.ingredientChanged.next(this.ingredients.slice());
      }

      addIngrediants(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
      }

      updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
      }
}