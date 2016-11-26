import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-delete',
  template: `
  <article>
    <ng-content></ng-content>
  </article>
  `,
  styles: [`
    article {
      border: 2px solid black;
      padding: 10px;
      margin: 30px;
    }
    h2 {
      color: #ff9900;
      font-size: 29px;
    }
    `]
})
export class DeleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
