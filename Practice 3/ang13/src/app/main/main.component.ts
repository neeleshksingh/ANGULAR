import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  slogan : string = 'Your one stop shop for everything'

  newSlogan() : string{
    return 'This is some information'
  }

  display : boolean = false

  onClick(){
    this.slogan = "Hello"
  }
  onClickH(){
    this.slogan = "Your one stop shop for everything"
  }
}
