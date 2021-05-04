import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  test = {
    name : 'Subhash'
  };
  

  myFunction() {
    return this.test.name; 
}

  className = 'test';

  constructor() { 

  }

  ngOnInit(): void {
  }

}
