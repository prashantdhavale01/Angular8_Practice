import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/*alert("I am i main");*/
if (environment.production) {
  enableProdMode();
}
/*console.log("I am i main");*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
