import { Component, OnInit } from '@angular/core';

//IMPORT SERVICE
import { HttpService } from "../http.service";


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

  //FORM SUBMIT ATTEMPT#1
    onSubmit(theme: string, issuedate: number) {
    this.httpService.sendData({theme: theme, issuedate: issuedate})
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

}
