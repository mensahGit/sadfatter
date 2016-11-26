//load polyfills for older browser compatability
import './polyfills.ts';
//load libs and enviros on which our app depends
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

//start app by grabbing app.module.ts
platformBrowserDynamic().bootstrapModule(AppModule);
