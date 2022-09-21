import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  showChild: boolean = false;
  constructor() { 
    console.log('ParentComponent constructor')
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }
  ngOnInit(): void {
    console.log('ParentComponent ngOnInit')
  }

}
