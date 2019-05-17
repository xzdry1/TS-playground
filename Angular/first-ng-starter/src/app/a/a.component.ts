import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a',
  template: `
    <div>this is a</div>
  `,
  styles: [
    `div{color:royalblue}`
  ]
  // templateUrl: './a.component.html',
  // styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
