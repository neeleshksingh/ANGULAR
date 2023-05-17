import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) { }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  title = 'demo';
  name = 'Neelesh'
  toggle() {
    // Implement the functionality for the toggle method
  }

  updateParentVisuals() {
    // Implement the functionality for the updateParentVisuals method
  }
}
