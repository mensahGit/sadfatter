import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-post',
   templateUrl: './post.component.html',
  styleUrls: ['../app.component.css']
})
export class PostComponent implements OnInit {

  goSubmit(){
      console.log("Submit post to firebase....");
  };

  goReset(){
      console.log("Reset post form values....");
  };

  constructor() { }

  ngOnInit() {
  }

}
