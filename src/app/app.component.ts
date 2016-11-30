import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
//import { MenuComponent } from './menu/menu.component';

//IMPORT SERVICE
import { HttpService } from "./http.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'Oh, yeah! baby...';
  stringInterpolation:string = "Event Binding";
  output:string = this.title + this.stringInterpolation;
  items: any[] = [];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) {}

/*  onSubmit(username: string, email: string) {
    this.httpService.sendData({username: username, email: email})
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }*/

  //FORM SUBMIT ATTEMPT#1
    onSubmit(theme: string, issuedate: number) {
    this.httpService.sendData({theme: theme, issuedate: issuedate})
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

  onGetData() {
    this.httpService.getOwnData()
      .subscribe(
        data => {
          const myArray = [];
          for (let key in data) {
            myArray.push(data[key]);
          }
          this.items = myArray;
        }
      );
  }
onBusy() {
  console.log('You just pushed id retrieve button');
}

}
