import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  deviceOne = 'fridge';
  deviceTwo = 'coffee maker';
  deviceThree = 'computer';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onTurnOn(){     
    console.log('We turn everything on!')
  }
}
