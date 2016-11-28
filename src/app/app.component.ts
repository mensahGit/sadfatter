import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
//import { MenuComponent } from './menu/menu.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'Oh, yeah! baby...';
  stringInterpolation:string = "Event Binding";
  output:string = this.title + this.stringInterpolation;



}
