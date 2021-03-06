import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() deviceName: string;
  @Input() deviceStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.deviceStatus;
  }

  getColor() {
    if(this.deviceStatus === 'on') {
      return 'green';
    } else if(this.deviceStatus === 'off') {
      return 'red';
    }
  }
}
