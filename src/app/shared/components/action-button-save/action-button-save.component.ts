import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button-save',
  templateUrl: './action-button-save.component.html',
  styleUrls: ['./action-button-save.component.css'],
})
export class ActionButtonSaveComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  actionButtonClick() {
    console.log('Aniruddha Save');
  }
}
