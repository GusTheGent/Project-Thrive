import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  names: string[] = [];
  check: string = 'Unchecked';
  constructor() {}

  ngOnInit(): void {}

  addNewNames(newName: string) {
    this.names.push(newName);
  }

  change() {
    this.check = 'Checked';
  }
}
