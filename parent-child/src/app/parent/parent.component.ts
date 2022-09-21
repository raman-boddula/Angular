import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges {
  showChild: boolean = false;
  counter: number = 1;
  constructor() { 
    console.log('ParentComponent constructor')
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }
  ngOnChanges(): void {
    console.log('onChanges')
    if (this.counter < 0) {
      this.counter = 0
    }
  }
  onInc() {
    this.counter = this.counter + 1;
  }
  onDec() {
    this.counter = this.counter - 1;
  }

  ngOnInit(): void {
    console.log('ParentComponent ngOnInit')
  }

}
