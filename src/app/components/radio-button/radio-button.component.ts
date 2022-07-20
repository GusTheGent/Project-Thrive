import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit, AfterViewChecked {
  @Input() checked: string = '';

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    const radio = document.getElementById('radio') as HTMLInputElement;
    if (this.checked === 'Unchecked') {
      radio.checked = false;
    } else {
      radio.checked = true;
    }
  }
}
