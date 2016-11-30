//IMPORT MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//IMPORT COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PostComponent } from './post/post.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component'

//IMPORT SERVICES
import { HttpService } from "./http.service";

//DECLARE COMPONENTS
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    PostComponent,
    EditComponent,
    DeleteComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ HttpService ],
  //start app by grabbing app.component.ts which in turn loads app.component.html
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
