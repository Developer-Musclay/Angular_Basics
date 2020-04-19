import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  devices = [
    {
      name: 'fridge',
      status: 'on'
    },
    {
      name: 'coffee maker',
      status: 'on'
    },
    {
      name: 'computer',
      status: 'off'
    }
  ];

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
