import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListsService } from './shopping-lists-service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private igChangedSub: Subscription;

  constructor(private shoppingListsService: ShoppingListsService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListsService.getIngredients();
    this.igChangedSub = this.shoppingListsService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    this.igChangedSub.unsubscribe();
  }

}
