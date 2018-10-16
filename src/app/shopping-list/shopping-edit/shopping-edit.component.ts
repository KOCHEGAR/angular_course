import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('amountInput') amount: ElementRef;
  @ViewChild('nameInput') name: ElementRef;

  @Output() onAddNewIngredient = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  ngOnInit() {
  }


  newIngredient() {
    if(!this.name.nativeElement.value || !this.amount.nativeElement.value){
      console.log('provide the right values')
    } else {
      this.onAddNewIngredient.emit({
        name: this.name.nativeElement.value,
        amount: this.amount.nativeElement.value
      });
    }
    return false; 
  }

}
