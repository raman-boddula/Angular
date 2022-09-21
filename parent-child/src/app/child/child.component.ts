import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { 
    console.log('Child component constructor')
  }

  ngOnInit(): void {
    console.log('childcomponent ngOnInit')
  }

}
