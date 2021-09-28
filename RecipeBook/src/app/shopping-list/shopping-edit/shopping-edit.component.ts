import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameRef: ElementRef;
  @ViewChild('amountInput') amountRef: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingName: string = this.nameRef.nativeElement.value;
    const ingAmount: number = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.newIngredientAdded.emit(newIngredient);
  }

}
