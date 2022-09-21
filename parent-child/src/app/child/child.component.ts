import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnDestroy {

  counter: number = 0;
  interval: any;
  constructor() { 
    console.log('Child component constructor')
  }

  ngOnInit(): void {
   this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log('counter',this.counter)
    },1000)
    console.log('childcomponent ngOnInit')
  }
  ngOnDestroy(): void {
    clearInterval(this.interval)
    console.log('childcomponent onDestroy called')
  }

}
