import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('name-input');
    input.value = '';
  }
}
