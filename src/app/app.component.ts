import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  emitterText: string;

  constructor() {
    this.name = 'Angular';
  }

  customClick(e) {
    this.emitterText = e.detail;
  }
}
