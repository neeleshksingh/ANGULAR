import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <div>
                <p [hidden] = "displayNoti">This website provides cookies for better user experience</p>
                <button (click)="doSomeThing()">X</button>
              </div>  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNoti: Boolean = false
  doSomeThing() {
    this.displayNoti = true
  }
}
