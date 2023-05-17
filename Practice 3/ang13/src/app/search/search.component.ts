import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Input : string = ""
  changeInputValue(eventData : Event){
    this.Input = (<HTMLInputElement>eventData.target).value
  }

}
