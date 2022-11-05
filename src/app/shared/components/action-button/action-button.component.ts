import { Component, OnDestroy, OnInit, Input } from '@angular/core';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent implements OnInit, OnDestroy {
  @Input() name: string = null;
  constructor() {}
  ngOnDestroy(): void {
    console.log('Action Button Destroy');
  }

  ngOnInit() {
    console.log('Action Button Init');
  }

  actionButtonClick() {
    console.log('Aniruddha');
  }
}
