import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { AppDevModule } from './app/app-dev/app-dev.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(
  //AppModule
  AppDevModule
  )
  .catch(err => console.error(err));
