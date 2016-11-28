import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'fa-menu',
templateUrl: './menu.component.html',
  styleUrls: ['../app.component.css'],
})

export class MenuComponent implements OnInit {

  goPost(){
console.log("Post Entry...");
  };

  goEdit(){
console.log("Edit Entry...");
  };

  goDelete(){
console.log("Delete Entry...");
  };

constructor() {}

  ngOnInit() {

  }

}
